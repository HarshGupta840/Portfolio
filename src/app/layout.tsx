import "./globals.css";
import { Open_Sans } from "next/font/google";
import Navbar from "./component/nav";
import Theme from "./component/theme";
export const Sans = Open_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Sans.className}>
        <section>
          <Theme />
          <Navbar />
        </section>
        {children}
      </body>
    </html>
  );
}
