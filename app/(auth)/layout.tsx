
import React from 'react'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div >
      <div className='border-b '>
        20% off
        
      </div>
      {children}
    </div>
  );
}
