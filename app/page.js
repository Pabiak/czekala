import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
    return (
        <>
            <header className='flex flex-col gap-8 bg-header bg-cover bg-center bg-no-repeat w-full h-full clipPath-header lg:flex-row lg:pt-10'>
                <div className='font-poppins lg:w-[35%] lg:ml-[7rem]'>
                  <div>
                    <h1 className='flex flex-col text-5xl font-bold text-center mt-10 lg:text-start lg:text-7xl'>
                        <span>Ekspert w</span>
                        <span className='relative'>
                            <span className='inset-0 before:absolute before:content-[""] before:-rotate-3 before:w-[22rem] before:h-full before:bg-gradient-to-r before:from-accent before:to-primary before:rounded-tl-lg before:rounded-br-lg lg:before:-left-5 lg:before:w-[33rem]'></span>
                            <span className='relative px-4 lg:p-0'>ekologicznym</span>
                        </span>
                        <span>postępie</span>
                    </h1>
                    <h2 className='text-center my-4 font-thin lg:text-start lg:text-xl'>
                        Zbudujmy razem przyszłość
                    </h2>
                </div>
                <div className='flex items-center flex-col lg:items-start lg:mt-16'>
                  <p className='font-normal font-poppins tracking-wide lg:ml-2 lg:text-xl'>Zapisz się do newslettera</p>
                  <p className='text-sm font-poppins font-thin tracking-wider lg:ml-2 lg:text-md'>i bądź na bieżąco z moją działalnością</p>
                  <div className='relative'>
                    <button className='my-3 absolute -right-[3px] mr-1 bg-accent text-white text-3xl rounded-[50%] w-fit h-fit p-[0.7rem]'>
                      <FaArrowRight />
                    </button>
                    <input type="email" placeholder="Miejsce na twój adres e-mail" className='my-3 focus:outline-none border-solid border-2 border-accent rounded-full bg-accent bg-opacity-25 w-[20rem] p-3 indent-5'/>
                  </div>
                </div>
                </div>
                <div className='flex items-center justify-center lg:justify-end'>
                    <Image
                        src={'/wojciech-header.png'}
                        alt='Zdjęcie przedstawiające profesora Czekałę'
                        width={700}
                        height={700}
                    />
                </div>
            </header>
            <div className='bg-gradient-to-r from-accent to-primary w-full h-5 -rotate-[5deg] -mt-9 lg:-mt-6 lg:-rotate-[2deg]' />
        </>
    );
}
