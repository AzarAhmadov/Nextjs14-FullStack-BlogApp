import "../style/style.css";
import Footer from "@/components/footer/Footer";
import webLogo from '../../public/images/webLogo.png'
import Navbar from "@/components/header/navbar/Navbar";
import Container from "@/components/container/Container";

export const metadata = {
  title: {
    default: 'Home Page | AzarDev',
    template: '%s | AzarDev'
  }
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <link rel="icon" type="image/png" href={webLogo.src} />
      <body>
        <div className="container">
          <Navbar />
          <Container>
            {children}
          </Container>
          <Footer />
        </div>
      </body>
    </html>
  );
}
