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
  title: "Gala",
  description: "",
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
