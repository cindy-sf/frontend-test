import { Poppins } from 'next/font/google'

import './styles/global.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
