import Header from "@/components/header/Header";
import "../style/style.css";
import Footer from "@/components/footer/Footer";
import webLogo from '../../public/images/webLogo.png'

export const metadata = {
  title: {
    default: 'Home Page',
    template: '%s | AzarDev'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" type="image/png" href={webLogo.src} />
      <body>
        <div className="container">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
