import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactimages from '../assets/reactimages.jpeg'
import redis from '../assets/redis.png'
import spring from '../assets/spring.png'
import java from '../assets/java.png'
import hibernate from '../assets/hibernate.png'
// import mongodb from '../assets/mongodb.png'
import mysql from '../assets/mysql.png'

const Experience = () => {

    const techs = [
        {
            id: 1,
            src: java,
            title:'JAVA',
            style: 'shadow-red-500'
        },
        {
            id: 2,
            src: spring,
            title:'SPRING',
            style: 'shadow-green-500'
        },
        {
            id: 3,
            src: javascript,
            title:'javascript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactimages,
            title:'REACT',
            style: 'shadow-blue-500'
        },
        {
            id: 5,
            src: html,
            title:'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 6,
            src: css,
            title:'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 7,
            src: hibernate,
            title:'HIBERNATE',
            style: 'shadow-yellow-500'
        },

        {
            id: 8,
            src: mysql,
            title:'MYSQL',
            style: 'shadow-yellow-500'
        },
        {
            id: 10,
            src: redis,
            title:'REDIS',
            style: 'shadow-red-500'
        },

    ]




    return (
        <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>

                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>EXPERIENCE</p>
                    <p className='py-6'>These are the technologies I've worked with</p>
                </div>


                <div className='w-full grid grid-cols-3 sm:grid-col-2 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    techs.map(({id, src, title, style})=>(
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounder-lg ${style}`} >
                        <img src={src} alt="" className="w-20 mx-auto" />
                            <p className='mt-4'>{title}</p>
                    </div>
                    ))
                }  
                </div>
            </div>
        </div>
    )
}

export default Experience
