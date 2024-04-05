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
                    M.S.    - Information Systems - Boston, USA <br /> <br />
                    M.B.A.  - Pondicherry University - India <br /> <br />
                </p>

                <p className='text-xl mt-1'>
                    <p className='text-1xl font-bold inline border-b-4 border-gray-500'>PROFESSIONAL BACKGROUND</p> <br /> <br />
                    STRAIVE    - Senior Subject Matter Expert, 2016 - 2021 - Puducherry, India <br /> <br />
                    NPCI  - Associate Certification Operations, 2022 - Chennai, India <br /> <br />
                </p>

                <p className='text-xl mt-1'>
                    <p className='text-1xl font-bold inline border-b-4 border-gray-500'>SUMMARY </p> <br /> <br />
                </p>

                <p className='text-xl mt-2'>
                        <li>I develop Full Stack Web applications that are processed and assisted by an automated background processing systems.</li>
                        <li>Established CI/CD pipelines and built automated infrastructure in using various Cloud providers such as AWS.</li>
                        <li>Processed message processing pipelines and developed event driven microservices using Kakfa, RabbitMQ, AWS SQS <br/></li>
                        <li>Build Scalable Microservices with secured Authentication and Authorization mechanism using OAUTH2 framework.<br/></li>
                        <li>Enhanced Data accessibility and fetching using Redis and Elastic Search.<br/></li>
                        <li>I have experience working in Agile/Scrum software development methodology and successfully completed my project deliverables on time.</li>
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
