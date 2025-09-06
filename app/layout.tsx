import type { Metadata } from 'next'
import './globals.css'
import Providers from './providers'

export const metadata: Metadata = {
  title: 'Mi App Next.js',
  description: 'Template básico con App Router',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <header>
          <nav>
            <h1>Mi App</h1>
          </nav>
        </header>
        <main>
          <Providers>{children}</Providers>
        </main>
        <footer>
          <p>© {new Date().getFullYear()} Mi App</p>
        </footer>
      </body>
    </html>
  )
}
