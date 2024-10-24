import React from 'react'

const Footer = () => {
  return (
    <footer>
       {/* footer with year, copy and Wojciech Czekała */}
        <div className='flex justify-center items-center h-16 bg-background mt-[auto] gap-4'>
            <div className='text-gray-800 text-center text-lg font-poppins'>
            &copy; {new Date().getFullYear()} Wojciech Czekała
            </div>
            <span className='text-gray-800 text-lg font-poppins'>Realizacja: <a href="https://www.linkedin.com/in/piotr-%C5%82abiak-052533193/" className='text-gray-800 hover:text-accent transition-all' target='blank'>Piotr Łabiak</a></span>
        </div>
    </footer>
  )
}

export default Footer;