import React from 'react'
import aceit from '../assets/portfolio/aceit.png'
import flatmate from '../assets/portfolio/flatmate.png'
// import navbar from '../assets/portfolio/flatmate.png'
import portfolio from '../assets/portfolio/portfolio.png'
import smartcity from '../assets/portfolio/smartcity.jpg'
// import reactWeather from '../assets/portfolio/reactWeather.jpg'


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: aceit,
            href: "https://github.com/Rajkumar-kumaravelu/AceIt-BrightMinds"
        },
        {
            id: 2,
            src: flatmate,
            href: "https://github.com/Rajkumar-kumaravelu/FLATMATE-EXPENSE-TRACKER"
        },
        {
            id: 3,
            src: portfolio,
            href: "https://github.com/Rajkumar-kumaravelu/MyPortfolio"
        },
        {
            id: 4,
            src: smartcity,
            href: "https://github.com/Rajkumar-kumaravelu/SMARTCITY"
        },
        

    ]




    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                    <p className="py-6">Checkout some of my work here</p>
                </div>




                <div className="grid sm:grid-cold-2 md:grid-cols-3 gap-8 px-12 sm:px-0">


                    {
                        portfolios.map(({ id, src, href }) => (
                        // eslint-disable-next-line
                            <div key={id} className="shadow-md shadow-red-600 rounded-lg" >
                                <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
                                <div className='flex items-center justify-center'>
                                
                                    <a href={href} className='w1/2 px-6 py-3 m-4 duration-200 hover:scale-105' target='_blank' rel="noreferrer" >Click for Code</a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div >
    )
}

export default Portfolio
