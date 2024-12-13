"use client";

import {useState, useRef, useEffect} from 'react';
import {NavLogo} from './NavLogo';
import {NavMenu} from './NavMenu';
import {MegaMenuContainer} from './MegaMenuContainer';
import {MobileNav} from './MobileNav';

export function MainNav() {
    const [openMegaMenu, setOpenMegaMenu] = useState<string | null>(null);
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setOpenMegaMenu(null);
            }
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setOpenMegaMenu(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    return (
        <header className="sticky top-0 z-50 w-full bg-[#F2F0EF]">
            <div className="h-[56px] lg:pt-4">
                <div className="transform-gpu transition-transform duration-200 ease-out lg:[.scroll-down_&]:-translate-y-4">
                    <nav 
                        className="relative w-full pl-4 lg:px-4 bg-[#111414] transition-[border-radius] duration-200 ease-out lg:rounded-lg lg:[.scroll-down_&]:rounded-none"
                        ref={navRef}
                    >
                        <div className="flex items-center justify-between h-14">
                            <div className="flex items-center">
                                <NavLogo />
                            </div>
                            <div className="flex items-center">
                                <div className="hidden md:flex">
                                    <NavMenu openMegaMenu={openMegaMenu} setOpenMegaMenu={setOpenMegaMenu}/>
                                </div>
                                <div className="flex xl:hidden">
                                    <MobileNav/>
                                </div>
                            </div>
                        </div>
                        {openMegaMenu && <MegaMenuContainer openMegaMenu={openMegaMenu} />}
                    </nav>
                </div>
            </div>
        </header>
    );
}
