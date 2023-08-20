import './globals.css'

export const metadata = {
  title: 'HH',
  description: 'HH',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
