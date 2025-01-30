export function addCookie({
  name,
  value,
  maxAge,
}: {
  name: string;
  value: string;
  maxAge?: number;
}) {
  document.cookie = `${name}=${value}; ${maxAge ? `max-age=${maxAge}` : ''}; path=/`;
}

export function deleteCookie(name: string) {
  addCookie({ name, value: '', maxAge: -1 });
}

export function getCookie(name: string) {
  if (typeof window !== 'undefined') {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return (parts.pop() as string).split(';').shift();
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
}
