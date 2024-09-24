import Header from './Header/Header';

export default function RootLayout({
  children,
  color,
}: Readonly<{
  children: React.ReactNode;
  color: 'dark' | 'white';
}>) {
  return (
    <>
      <Header bg={color} />
      <main>{children}</main>
      <footer className='text-main'>футер</footer>
    </>
  );
}
