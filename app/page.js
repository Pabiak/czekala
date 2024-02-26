import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';
import { BsBook, BsClockHistory, BsEasel, BsJournalBookmarkFill, BsMic, BsPeopleFill } from 'react-icons/bs';

export default function Home() {
    return (
        <>
            <svg width='0' height='0'>
                <linearGradient
                    id='gradient'
                    x1='100%'
                    y1='100%'
                    x2='0%'
                    y2='0%'
                >
                    <stop stopColor='#3a7fae' offset='0%' />
                    <stop stopColor='#92cf57' offset='100%' />
                </linearGradient>
            </svg>
            <header className='flex flex-col gap-8 bg-header bg-cover bg-center bg-no-repeat w-full h-full clipPath-header lg:flex-row lg:pt-10'>
                <div className='font-poppins lg:w-[35%] lg:ml-[7rem]'>
                    <div>
                        <h1 className='flex flex-col text-5xl font-bold text-center mt-10 md:text-7xl lg:text-start'>
                            <span>Ekspert w</span>
                            <span className='relative'>
                                <span className='inset-0 before:absolute before:content-[""] before:-rotate-3 before:w-[22rem] before:h-full before:bg-gradient-to-r before:from-accent before:to-primary before:rounded-tl-[20px] before:rounded-br-[20px] lg:before:-left-5 lg:before:w-[33rem]'></span>
                                <span className='relative px-4 lg:p-0'>
                                    ekologicznym
                                </span>
                            </span>
                            <span>postępie</span>
                        </h1>
                        <h2 className='text-center my-4 font-thin md:text-2xl lg:text-start'>
                            Zbudujmy razem przyszłość
                        </h2>
                    </div>
                    <div className='flex items-center flex-col lg:items-start lg:mt-16'>
                        <p className='font-normal font-poppins tracking-wide md:mt-2 md:text-2xl lg:ml-2'>
                            Zapisz się do newslettera
                        </p>
                        <p className='text-sm font-poppins font-thin tracking-wider md:text-lg lg:ml-2'>
                            i bądź na bieżąco z moją działalnością
                        </p>
                        <div className='relative'>
                            <form>
                                <button
                                    type='submit'
                                    className='my-3 absolute -right-[3px] mr-1 bg-accent text-white text-3xl rounded-[50%] w-fit h-fit p-[0.7rem]'
                                >
                                    <FaArrowRight />
                                </button>
                                <input
                                    required
                                    type='email'
                                    placeholder='Miejsce na twój adres e-mail'
                                    className='my-3 focus:outline-none border-solid border-2 border-accent rounded-full bg-accent bg-opacity-25 w-[20rem] p-3 indent-5'
                                />
                            </form>
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
            <div className='bg-gradient-to-r from-accent to-primary w-full h-5 -rotate-[5deg] -mt-9 lg:-mt-6 lg:-rotate-[2deg] mb-10' />
            <section>
                <h1 className='text-2xl text-center font-bold md:text-4xl'>
                    <span className='relative'>
                        <span className='inset-0 before:absolute before:content-[""] before:-rotate-3 before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-primary before:rounded-tl-[20px] before:rounded-br-[20px] lg:before:-left-5 lg:before:w-[115%]'></span>
                        <span className='relative px-4 lg:p-0 inline-block'>
                            O mnie w liczbach
                        </span>
                    </span>
                </h1>
                <div className='grid grid-cols-2 place-items-center gap-10 my-14 md:my-[5rem] lg:grid-cols-3'>
                        <div className='flex flex-col items-center'>
                            <BsClockHistory
                                className='text-6xl mb-2 md:text-8xl'
                                style={{ fill: "url(#gradient)" }}
                            />
                            <span className='font-semibold md:text-2xl text-center'>15 lat</span>
                            <span className='md:text-2xl text-center'>doświadczenia</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <BsPeopleFill
                                className='text-6xl mb-2 md:text-8xl'
                                style={{ fill: "url(#gradient)" }}
                            />
                            <span className='font-semibold md:text-2xl text-center'>+100</span>
                            <span className='md:text-2xl text-center'>współprac z firmami</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <BsEasel
                                className='text-6xl mb-2 md:text-8xl'
                                style={{ fill: "url(#gradient)" }}
                            />
                            <span className='font-semibold md:text-2xl text-center'>+2000</span>
                            <span className='md:text-2xl text-center'>szkoleń i wykładów</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <BsBook
                                className='text-6xl mb-2 md:text-8xl'
                                style={{ fill: "url(#gradient)" }}
                            />
                            <span className='font-semibold md:text-2xl text-center'>+170</span>
                            <span className='md:text-2xl text-center'>prac twórczych</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <BsJournalBookmarkFill
                                className='text-6xl mb-2 md:text-8xl'
                                style={{ fill: "url(#gradient)" }}
                            />
                            <span className='font-semibold md:text-2xl text-center'>+50</span>
                            <span className='max-w-[10rem] text-center md:text-2xl md:max-w-[13rem] '>artykułów na liście filadelfijskiej</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <BsMic
                                className='text-6xl mb-2 md:text-8xl'
                                style={{ fill: "url(#gradient)" }}
                            />
                            <span className='font-semibold md:text-2xl'>+80</span>
                            <span className='max-w-[10rem] text-center md:text-2xl'>prelekcji na konferencjach</span>
                        </div>
                    </div>
            </section>
            <div className='bg-gradient-to-r from-accent to-primary w-full h-5 -rotate-[5deg] -mt-9 lg:-mt-6 lg:-rotate-[2deg]' />
        </>
    );
}
