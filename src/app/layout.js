import './globals.css'
import ReduxProvider from './store/provider'
export const metadata = {
  title: 'HH',
  description: 'HH',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
