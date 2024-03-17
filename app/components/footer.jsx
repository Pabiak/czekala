import React from 'react'

const Footer = () => {
  return (
    <footer>
       {/* footer with year, copy and Wojciech Czekała */}
        <div className='flex justify-center items-center h-16 bg-background'>
            <div className='text-black text-center text-lg font-poppins'>
            &copy; {new Date().getFullYear()} Wojciech Czekała
            </div>
        </div>
    </footer>
  )
}

export default Footer;