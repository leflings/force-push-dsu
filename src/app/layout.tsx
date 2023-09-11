import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Team Force Push - DSU',
  description: 'A dashboard for the daily stand up of Team Force Push',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='{inter.className} bg-cyan-950 text-cyan-100'>
        <main className="flex flex-col min-h-screen px-16 h-full">
          <div className='h-10 w-3 border-l-2 border-b-2 rounded-bl-xl border-yellow-600'></div>
          <div className='bg-gradient-to-r from-yellow-600 to-yellow-300 my-[-2px] rounded-r-xl p-[2px] pl-0 ml-3 self-start'>
            <div className='bg-cyan-950 rounded-r-xl text-6xl font-bold tracking-widest uppercase pl-1 p-4'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-300'>Force Push</span><span>🤜🏽</span>
            </div>
          </div>
          <div className='h-4 w-4 border-l-2 border-t-2 rounded-tl-xl border-yellow-600'></div>
          <div className='border-l-2 border-yellow-600 grow pl-4'>{children}</div>
        </main>
      </body>
    </html>
  )
}
