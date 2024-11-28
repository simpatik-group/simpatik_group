#!/bin/bash

PATH=/www/wwwroot/simpatik.group/node_modules/.bin:/www/server/nodejs/v20.18.1/bin:/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin

echo "[$(date '+%Y-%m-%d %H:%M:%S')] Start deployment NextJS service..."

# Checking if the project directory exists
if [ -d "/www/wwwroot/simpatik.group" ]; then
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] Project directory already exists. Skipping git cloning."
else
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] Go to /www/wwwroot"
  cd /www/wwwroot || exit
 
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] Cloning project from GitHub..."
  git clone https://github.com/simpatik-group/simpatik.group.git
fi

# Looking for the NextJS process running via nohup
PID=$(ps aux | grep 'node' | grep '/www/wwwroot/simpatik.group' | awk '{print $2}')

if [ -n "$PID" ]; then
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] Found NextJS process with PID: $PID. Stopping it..."
  kill $PID
  if [ $? -eq 0 ]; then
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] NextJS service stopped successfully."
  else
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] Failed to stop NextJS service. Trying with kill -9..."
    kill -9 $PID
  fi
else
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] No running NextJS process found. Skipping stop."
fi

echo "[$(date '+%Y-%m-%d %H:%M:%S')] Go to the project directory..."
cd /www/wwwroot/simpatik.group || exit

echo "[$(date '+%Y-%m-%d %H:%M:%S')] Configuring git..."
git config --global --add safe.directory /www/wwwroot/simpatik.group

echo "[$(date '+%Y-%m-%d %H:%M:%S')] Reset local changes..."
git reset --hard

echo "[$(date '+%Y-%m-%d %H:%M:%S')] Pulling latest version from Git..."
git pull

echo "[$(date '+%Y-%m-%d %H:%M:%S')] Installing dependencies..."
/www/server/nodejs/v20.18.1/bin/npm install -y

if [ $? -ne 0 ]; then
 echo "[$(date '+%Y-%m-%d %H:%M:%S')] Error: npm install failed. Exiting deployment."
 exit 1
fi

echo "[$(date '+%Y-%m-%d %H:%M:%S')] Building project..."
/www/server/nodejs/v20.18.1/bin/npm run build

if [ $? -ne 0 ]; then
 echo "[$(date '+%Y-%m-%d %H:%M:%S')] Error: npm run build failed. Exiting deployment."
 exit 1
fi

echo "[$(date '+%Y-%m-%d %H:%M:%S')] Starting NextJS service with aapanel script..."
/www/server/nodejs/vhost/scripts/simpatik_group.sh

if [ $? -eq 0 ]; then
 echo "[$(date '+%Y-%m-%d %H:%M:%S')] NextJS service started successfully."
else
 echo "[$(date '+%Y-%m-%d %H:%M:%S')] Failed to start NextJS service."
 exit 1
fi

echo "[$(date '+%Y-%m-%d %H:%M:%S')] Deployment NextJS completed!"
