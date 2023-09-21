import './globals.css'
import style from './style.module.css';
import type { Metadata } from 'next'
import Provider from './provider';

export const metadata: Metadata = {
  title: 'Codebaou',
  description: 'Web personal Boris Alvarez',
}

export default function RootLayout({
  children,
}:{
  children: React.ReactNode
}){
  return (
    <html lang="en">
    
      <body>
        <Provider>
          <div className={style.contentWeb}>
            {children}
          </div>
        </Provider>
      </body>
    </html>
  )
}
