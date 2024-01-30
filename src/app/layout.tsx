import "../style/style.css";
import Footer from "@/components/footer/Footer";
import webLogo from '../../public/images/webLogo.png'
import Navbar from "@/components/header/navbar/Navbar";
import AdminIcon from "@/components/adminIcon/AdminIcon";

export const metadata = {
  title: {
    default: 'Home Page | AzarDev',
    template: '%s | AzarDev'
  }
}

const RootLayout = ({ children, }: Readonly<{ children: React.ReactNode; }>) => {
  return (
    <html lang="en">
      <link rel="icon" type="image/png" href={webLogo.src} />
      <body>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
        <AdminIcon />
      </body>
    </html>
  );
}

export default RootLayout