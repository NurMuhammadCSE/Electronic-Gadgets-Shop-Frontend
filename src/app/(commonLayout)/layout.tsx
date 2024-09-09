import type { Metadata } from "next";
import NavBar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavBar />
      <main className="min-h-screen max-w-screen-xl	mx-auto">{children}</main>
      <Footer />
    </div>
  );
}
