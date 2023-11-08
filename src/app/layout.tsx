import "./globals.css";
import { Open_Sans, Montserrat } from "next/font/google";
import Navbar from "./component/nav";
import Theme from "./component/theme";
import { Providers } from "./providers";
import Footer from "./component/foooter";
export const Sans = Open_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
export const monst = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["cyrillic"],
});

export const metadata = {
  title: "Developer Harsh",
  description: "The Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={monst.className}>
        <Providers>
          <section>
            <Theme />
            <Navbar />
          </section>
          {children}
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}
