import Header from "./Header";
import Footer from "./Footer";

export default function Main({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-[4.5rem]">{children}</main>
      <Footer />
    </div>
  );
}
