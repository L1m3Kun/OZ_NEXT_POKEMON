import Header from "@/components/Headers";
import "./globals.css";

export const metadata = {
  title: "포켓몬 도감",
  description: "귀여운 포켓몬들을 살펴보세요.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
