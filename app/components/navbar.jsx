'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
    const router = useRouter();
    const [navActive, setNavActive] = useState(false);

    const mockNavData = [
        // {
        //     path: 'https://blog.wojciechczekala.pl',
        //     label: 'Blog',
        //     gradient: true,
        // },
        {
            path: '/#o-mnie',
            label: 'O mnie',
        },
        {
            path: '/#ekoslownik',
            label: 'Ekosłownik',
        },
        {
            path: '/#kontakt',
            label: 'Kontakt',
        },
    ];

    const renderMenu = () => {
        return mockNavData.map((item) => {
            const { path, label, gradient } = item;
            return (
                <a key={path} href={path ?? ''} scroll='false'>
                    <li
                        onClick={() => setNavActive(false)}
                        className={
                            gradient
                                ? 'px-4 mx-4 min-w-max relative text-black cursor-pointer h-7 flex items-center bg-gradient-to-r from-accent to-primary rounded-tl-2xl rounded-br-2xl font-poppins'
                                : 'py-2 px-4 mx-4 min-w-max relative text-black cursor-pointer font-poppins after:content-[""] after:w-0 after:h-1 after:bg-gradient-to-r from-accent to-primary after:rounded-tl-lg after:rounded-br-lg after:absolute after:bottom-0 after:right-0 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0'
                        }
                    >
                        {label ?? ''}
                    </li>
                </a>
            );
        });
    };

    return (
        <nav className='flex h-14 bg-background items-center fixed w-full z-[11]'>
            <div className='flex items-center justify-between w-full px-4 mx-auto'>
                <div className='flex flex-col ml-4 cursor-pointer' onClick={() => router.push('/')}>
                    <div className='text-black text-left text-xl'>Wojciech</div>
                    <div className='text-black text-right ml-5 text-xl'>Czekała</div>
                </div>
            </div>
            {navActive ? (
                <HiX
                    className='inline-block text-color-black text-[2rem] mr-1 lg:hidden'
                    onClick={() => setNavActive(false)}
                />
            ) : (
                <HiMenuAlt3
                    className='inline-block text-color-black text-[2rem] mr-1 lg:hidden'
                    onClick={() => setNavActive(true)}
                />
            )}
            <ul className={`z-20 flex flex-col items-center justify-center gap-y-6 min-h-screen fixed top-14 w-full -right-full text-2xl bg-background transition-all duration-500 ease-in-out ${navActive ? 'right-0' : ''} md:text-3xl lg:flex-row lg:items-center lg:p-0 lg:w-fit lg:min-h-fit lg:static lg:text-base`}>
                {renderMenu()}
            </ul>
        </nav>
    );
}

export default Navbar;
