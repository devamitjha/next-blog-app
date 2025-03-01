'use client'
import React, {useState} from 'react'
import Link from 'next/link';
import { usePathname } from "next/navigation";
import "./Header.scss";



const Header = () => {
  const [user, setUser] = useState(false);
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header>
      <div className="container">
        <div className="d-flex justify-between">
          <div className="logo">
            <Link href="/" className={pathname === "/" ? "active" : ""}>DA</Link>
          </div>
          <div className="menu-center">
            <ul>
              <li>
                <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
              </li>
              <li>
                <Link href="/blog/categories" className={pathname.startsWith("/blog/categories") ? "active" : ""}>Category</Link>
              </li>
              <li>
                <Link href="/blog/authors" className={pathname.startsWith("/blog/authors") ? "active" : ""}>Author</Link>
              </li>
              <li>
                <Link href="/features" className={pathname.startsWith("/features") ? "active" : ""}>Features</Link>
              </li>
              <li>
                <Link href="/contact" className={pathname.startsWith("/contact") ? "active" : ""}>Contact</Link>
              </li>
              <li>
                <Link href="/search" className={pathname.startsWith("/search") ? "active" : ""}>Search</Link>
              </li>
            </ul>
          </div>
          <div className="menu-right">
            <ul>
              {
                user ? 
                      <li className="btn outline border-none"><Link href="/dashboard"><i className="fa fa-user-o"/></Link></li> 
                    : 
                    <>
                      <li className="btn filled"><Link href="/login">Login</Link></li>
                      <li className="btn outline"><Link href="/register">Register</Link></li>
                    </>
              }
            </ul>
          </div>
        </div>
      </div>    
    </header>
  )
}

export default Header
