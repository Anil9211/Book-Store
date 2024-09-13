import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Course from '../components/Course'

function Courses() {
  return (
    <>
        <div>
            <NavBar/>
            <div className="min-h-screen">
                <Course/>
            </div>
            
            <Footer/>
        </div>
    </>
  )
}

export default Courses
