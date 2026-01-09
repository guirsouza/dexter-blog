import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dexter Blog",
  description: "Blog para estudo de React + NestJS",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
