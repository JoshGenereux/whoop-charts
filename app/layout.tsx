import Navbar from "@/components/navbar/Navbar";
import "../styles/globals.css";
import { FileProvider } from "@/context/FileContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <FileProvider>{children}</FileProvider>
      </body>
    </html>
  );
}
