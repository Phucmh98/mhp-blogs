
import Navbar from "./components/navbar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full">
      <div className="w-full fixed top-0 left-0  p-4">
        <Navbar />
      </div>
      <div className="h-full w-full">{children}</div>
    </div>
  );
}
