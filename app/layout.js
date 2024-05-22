import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import {
  ClerkProvider,
} from '@clerk/nextjs'




const inter = Josefin_Sans({ subsets: ["latin"] });
export const metadata = {
  title: "Fashion",
  
};


export default function RootLayout({ children }) {

  return (
   
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>

      {/* <Header /> */}
    <div className="pt-[70px]">  {children }</div>
      <Footer />
      </body>
    </html>
    </ClerkProvider>
   

  );
}
