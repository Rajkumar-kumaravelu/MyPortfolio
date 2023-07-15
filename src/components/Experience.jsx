import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactimage from '../assets/html.png'
import github from '../assets/html.png'
import tailwind from '../assets/html.png'

const Experience = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title:'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title:'css',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title:'javascript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: javascript,
            title:'javascript',
            style: 'shadow-yellow-500'
        },
        {
            id: 5,
            src: javascript,
            title:'javascript',
            style: 'shadow-yellow-500'
        },
        {
            id: 6,
            src: javascript,
            title:'javascript',
            style: 'shadow-yellow-500'
        },
        {
            id: 7,
            src: javascript,
            title:'javascript',
            style: 'shadow-yellow-500'
        },

        {
            id: 8,
            src: javascript,
            title:'javascript',
            style: 'shadow-yellow-500'
        },

    ]




    return (
        <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>

                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Expeience</p>
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
