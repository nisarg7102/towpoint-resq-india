import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";

interface LayoutProps {
  children: React.ReactNode;
  showBackButton?: boolean;
}

const Layout = ({ children, showBackButton = true }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header showBackButton={showBackButton} />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Layout;
