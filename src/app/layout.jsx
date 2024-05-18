import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "زيتونة - مزرعة الزيتون",
  description:
    "تأسست شركة زيتونة برعاية شركة سماء العرب في عام 2014، ومنذ ذلك الحين، حققت نجاحًا باهرًا في عالم صناعة زيت الزيتون والمنتجات المشتقة.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

/** @param {import("react").PropsWithChildren} props  */
export default function RootLayout(props) {
  return (
    <html lang="ar" dir="rtl" className={`${GeistSans.variable}`}>
      <body>{props.children}</body>
    </html>
  );
}
