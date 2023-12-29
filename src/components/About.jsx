import React from 'react'

const About = () => {
    return (
        <div name="about" className="w-full h-1/2 bg-gradient-to-b from-gray-800 to-black text-white">
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-1/2'>
                <div className="pb-8">
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>ABOUT</p>
                </div>

                <p className='text-xl mt-1'>
                    <p className='text-1xl font-bold inline border-b-4 border-gray-500'>ACADEMIC BACKGROUND</p> <br /> <br />
                    M.S.    - Information Systems, 2024 - Boston, USA <br /> <br />
                    M.B.A.  - Pondicherry University, 2016 - Puducherry, India <br /> <br />
                    B.E.    - Anna University, 2014 - Chennai, India <br /> <br />
                </p>

                <p className='text-xl mt-1'>
                    <p className='text-1xl font-bold inline border-b-4 border-gray-500'>PROFESSIONAL BACKGROUND</p> <br /> <br />
                    STRAIVE    - Senior Subject Matter Expert, 2016 - 2021 - Puducherry, India <br /> <br />
                    NPCI  - Associate Certification Operations, 2022 - Chennai, India <br /> <br />
                </p>

                <p className='text-xl mt-2'>
                    I develop Full Stack Web applications that are processed and assisted by an automated background processing systems.
                    I designed and developed a back-end database using MySQL by implementing functions, triggers, and queries. 
                    I have experience working in Agile/Scrum software development methodology and successfully completed my project deliverables on time.
                    I believe having an eye for detail and a proficient knowledge of algorithms makes me an ideal candidate 
                    for software development roles to design and deliver optimal solutions.
                    I am passionate about discovering new technologies and I am a quick learner.<br/>
                </p>
                <br />

                {/* <p className='text-xl'>
                    I worked at Straive and National Payments Corporation of India has helped me improve my coding skills. I believe having an eye for detail and a proficient knowledge of algorithms makes me an ideal candidate 
                    for software development roles to design and deliver optimal solutions.
                    I am passionate about discovering new technologies and I am a quick learner.
                </p> */}

            </div>
        </div>
    )
}

export default About
