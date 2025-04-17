import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Doctor Mora, Guanajuato",
  description: "Descubre la magia de Doctor Mora, un encantador rincón en el corazón del estado de Guanajuato",
  keywords: ["Doctor Mora", "Guanajuato", "Doctor Mora Guanajuato", "Turismo Doctor Mora", "Hoteles Doctor Mora", "Restaurantes Doctor Mora", "Servicios Doctor Mora", "Turismo en Guanajuato", "Gastronomía en Guanajuato", "Cultura en Guanajuato",],
  metadataBase: new URL("http://localhost:3000"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
