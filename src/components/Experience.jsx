import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactimages from '../assets/reactimages.jpeg'
import redis from '../assets/redis.png'
import spring from '../assets/spring1.png'
import java from '../assets/java.png'
import hibernate from '../assets/hibernate.png'
import Kafka from '../assets/kafka.jpeg'
import elasticsearch from '../assets/elasticsearch.svg'
import git from '../assets/git.png'
import gitHubActions from '../assets/githubactions.svg'
import aws from '../assets/aws.png'
import mongodb from '../assets/mongodb.png'
import mysql from '../assets/mysql1.png'
import googlecloud from '../assets/googlecloud.png'
import pulumi from '../assets/pulumi.svg'
import packer from '../assets/packer.png'
import docker from '../assets/docker.png'
import kubernetes from '../assets/kubernetes.png'

const Experience = () => {

    const techs = [
        {
            id: 1,
            src: java,
            title:'Java',
            style: 'shadow-blue-500'
        },
        {
            id: 2,
            src: spring,
            title:'Spring',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title:'JavaScript',
            style: 'shadow-blue-500'
        },
        {
            id: 4,
            src: reactimages,
            title:'React',
            style: 'shadow-blue-500'
        },
        {
            id: 5,
            src: html,
            title:'HTML',
            style: 'shadow-blue-500'
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
            style: 'shadow-blue-500'
        },

        {
            id: 8,
            src: mysql,
            title:'MYSQL',
            style: 'shadow-blue-500'
        },
        {
            id: 9,
            src: redis,
            title:'REDIS',
            style: 'shadow-blue-500'
        },
    
        {
            id: 11,
            src: Kafka,
            title:'KAFKA',
            style: 'shadow-blue-500'
        },
        {
            id: 12,
            src: elasticsearch,
            title:'Elasticsearch',
            style: 'shadow-blue-500'
        },
        {
            id: 10,
            src: git,
            title:'Git',
            style: 'shadow-blue-500'
        },
        {
            id: 17,
            src: gitHubActions,
            title:'GitHub Actions',
            style: 'shadow-blue-500'
        },
        {
            id: 13,
            src: aws,
            title:'aws',
            style: 'shadow-blue-500'
        },
        {
            id: 14,
            src: mongodb,
            title:'MongoDb',
            style: 'shadow-blue-500'
        },
        {
            id: 15,
            src: googlecloud,
            title:'Google Cloud',
            style: 'shadow-blue-500'
        },
        {
            id: 16,
            src: pulumi,
            title:'Pulumi',
            style: 'shadow-blue-500'
        },
        {
            id: 17,
            src: packer,
            title:'Packer',
            style: 'shadow-blue-500'
        },
        {
            id: 18,
            src: docker,
            title:'Docker',
            style: 'shadow-blue-500'
        },
        {
            id: 19,
            src: kubernetes,
            title:'Kubernetes',
            style: 'shadow-blue-500'
        },
        
    ]

    return (
        <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-1/2'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>

                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>EXPERIENCE</p>
                    <p className='py-6'>These are the technologies and tools I've worked with</p>
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
