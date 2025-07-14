// app/layout.tsx
import { QuoteModalProvider } from "@/context/QuoteModalContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <QuoteModalProvider>{children}</QuoteModalProvider>;
}
