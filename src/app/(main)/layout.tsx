"use client";



import Footer from "./components/layout/footer";
import Navbar from "./components/layout/navbar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full">
      <div className="w-full fixed top-0 left-0  p-4 z-50">
        <Navbar />
      </div>
      <div className=" w-full">{children}</div>
      {/* Footer */}
      <footer className="w-full">
      
          <Footer />
      
      </footer>
    </div>
  );
}
