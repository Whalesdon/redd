import "./globals.css";


const backgroundImageStyle = {
  backgroundImage: `url('/background.png')`,
  backgroundSize: 'cover', // You can add additional background properties here
  backgroundPosition: 'center',
  margin: 0,
  padding: 0,
  width: '100vw', // Set width to cover the viewport width
  height: '100vh'
};


export const metadata = {
  title: "REVOLUT 2 EARN",
  description: "revolt.com",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon.png",
        href: "/favicon.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon.png",
        href: "/favicon.png",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="" style={backgroundImageStyle}>{children}</body>
    </html>
  );
}
