import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Doctor Mora, Guanajuato",
  description: "Descubre la magia de Doctor Mora, un encantador rincón en el corazón del estado de Guanajuato",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
