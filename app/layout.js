import './globals.css'
import Layout from './components/Layout'

export const metadata = {
  title: 'Jets News - Latest New York Jets Updates',
  description: 'Your source for the latest New York Jets news, analysis, and updates',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
