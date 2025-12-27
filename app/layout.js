import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import {Outfit} from "next/font/google"
import Provider from "../provider"

export const metadata = {
  title: "AI Room redesigner",
  description: "An ai app to redesign the room",
};

const outfit = Outfit({subsets: ["latin"]})

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{elements : {footer: "hidden",
      footerAction: "hidden",
      footerActionText: "hidden",
      footerActionLink: "hidden",
      userButtonPopoverFooter: "hidden"}}}>
      <html lang="en">
      <body className={outfit.className}>
       <Provider>
       {children}
       </Provider>
      </body>
    </html>
    </ClerkProvider>
  );
}
