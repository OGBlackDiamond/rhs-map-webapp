import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { AppBar, Container } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Reno High Schedule Mapper',
  description: 'A tool to help you map out your schedule!',
}

function Header() {
  return (
    <AppBar position='static' style={
      {
        color: "black",
        textAlign: "left",
        border: "auto",
        height: "100px"
      }
    }>
      <Container  maxWidth='xl'>
        <div style={{padding: "100px"}}>
          Show me something
        </div>
      </Container>
    </AppBar>
  );
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
