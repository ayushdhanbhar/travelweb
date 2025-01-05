import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData =[
    {
        imgUrl :weatherImg,
        title : 'Calculate Weather',
        desc: 'Get real-time weather updates for your travel destination! ⛅️',
    },
    {
        imgUrl :guideImg,
        title : 'Best Tour Guide',
        desc : 'Unlock the best tour guides for your next adventure! 🗺️',
    },
    {
        imgUrl :customizationImg,
        title : 'Customization',
        desc : 'Tailor your travel journey with personalized plans just for you! ✈️',
    },
]
const ServiceList = () => {
  return (
    <>
     {
        servicesData.map((item, index) => (
        <Col lg='3' key={index}>
            <ServiceCard item={item}/>
        </Col>
    ))
     } 
    </>
  )
}

export default ServiceList
