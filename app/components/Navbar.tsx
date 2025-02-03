'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { DarkModeIcon, CloseIcon, LightModeIcon } from './icons'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { setTheme } from '@/lib/features/theme/themeSlice'
import MenuIcon from './icons/MenuIcon'

const Navbar = () => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector((state) => state.theme.theme)
  const navbarRef = useRef<HTMLDivElement>(null)
  const sideMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.scrollY > 10) {
      navbarRef.current?.classList.add('outlined')
    }
    const handleScroll = () => {
      if (window.scrollY > 10) {
        navbarRef.current?.classList.add('outlined')
      } else {
        navbarRef.current?.classList.remove('outlined')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const openSideMenu = () => {
    sideMenuRef.current!.style.transform = 'translateX(-16rem)'
  }
  const closeSideMenu = () => {
    sideMenuRef.current!.style.transform = 'translateX(16rem)'
  }

  const toggleTheme = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))
  }

  return (
    <>
      <div className="h-20 w-full" />
      <nav ref={navbarRef} className="navbar">
        <Link href="/" className="flex items-center gap-1 text-2xl group">
          <span className="text-xl group-hover:-rotate-90 group-hover:scale-125 transform ease-in-out duration-300">
            ✦
          </span>
          <span className="group font-medium">VueJs</span>
        </Link>

        <div className="flex items-center gap-6 lg:gap-8">
          <ul className="flex items-center gap-6 text-lg max-lg:hidden">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
          </ul>
          <button className="icon-btn" onClick={toggleTheme}>
            {theme === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
          </button>
          <button className="lg:hidden" onClick={openSideMenu}>
            <MenuIcon className="size-12 " />
          </button>
        </div>
      </nav>

      <div
        ref={sideMenuRef}
        className="fixed top-0 bottom-0 -right-64 w-60 z-navbar transition duration-500 sidebar m-2 border shadow-md dark:shadow-dark-800"
      >
        <button className="absolute top-4 right-4" onClick={closeSideMenu}>
          <CloseIcon className="size-10" />
        </button>
        <ul className="h-full flex flex-col items-start justify-center gap-6 text-lg py-3 px-8 ">
          <li>
            <a href="#home" onClick={closeSideMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeSideMenu}>
              About Me
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeSideMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#experience" onClick={closeSideMenu}>
              Experience
            </a>
          </li>
          {/* <li>
            <a href="#home" onClick={closeSideMenu}>
              Contact Me
            </a>
          </li> */}
        </ul>
      </div>
    </>
  )
}

export default Navbar

// 2:15 dark mode
// 2:50 animation
