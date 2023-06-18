import React from 'react'
import Image from 'next/image'
import styles from "./Header.module.css"
import "./Header.css"

const Header = () => {
  return (
           <div className='container mx-auto'>
            {/* <div className="container mx-auto">
             <Image src={bg} alt='bg'/>
            </div> */}

              <div className="hero min-h-screen bg-base-200 my-container container-fluid width: 100% mx-auto">
                <div className="hero-content text-center">
                  <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Hello there</h1>
                    <div>
                      <h1 className='header'>This Is Hero Section In Custom Css</h1>
                      <h1 className={styles.header}>This Is Hero Section In module css</h1>
                      <h1 className="text-2xl text-indigo-700">This Is Hero Section In Tailwind Css</h1>
                    </div>
                    <button className="btn btn-primary">Get Started</button>
                  </div>
                </div>
              </div>

              {/* Next Roll  */}

              
           </div> 
    
  )
}

export default Header 