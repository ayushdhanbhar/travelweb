import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {
    const settings = {
        dots:true,
        infinite: true,
        autoplay:true,
        speed: 500,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:2,

        responsive:[
            {
            breakpoint:992,
            settings:{
                slidesToShow:2,
                slidesToScroll:1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint:576,
            settings:{
                slidesToShow:1,
                slidesToScroll:1,
            }  ,
        },
    ],
    };
  return (
 <Slider {...settings}>
<div className="testimonial py-4 px-3">
<p>"Incredible service from booking to return! 🌍 They made my dream vacation a reality. 🏖️ Personalized touches made every moment unforgettable! From handpicked accommodations to local experiences, everything exceeded my expectations. Truly an amazing journey that I’ll cherish forever!"</p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava01} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>John Doe</h6>
    <p>Customer</p>
</div>
</div>
</div>
<div className="testimonial py-4 px-3">
<p>"A seamless experience from start to finish! 🌟 Every destination was perfectly planned, and the customer service was exceptional. Highly recommend! ✈️💯 From booking to checking in, everything was hassle-free, making my vacation stress-free and unforgettable!"</p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava02} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>Lia Franklin</h6>
    <p>Customer</p>
</div>
</div>
</div>
<div className="testimonial py-4 px-3">
<p>"I’ve never felt more taken care of! From the moment I booked until I returned, every detail was flawless. 🌍 Thank you for making my dream vacation a reality! 🏖️💖 The itinerary was spot-on, and I could focus on enjoying my trip without worrying about a thing!"</p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava03} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>John Doe</h6>
    <p>Customer</p>
</div>
</div>
</div>
<div className="testimonial py-4 px-3">
<p>"The best travel agency I’ve ever used! 🌞 They handled everything from flights to accommodations. I felt like a VIP throughout my entire journey! 🏨✈️ Every hotel was top-notch, and I was always treated with care. Truly a 5-star experience from start to finish!"</p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava03} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>John Doe</h6>
    <p>Customer</p>
</div>
</div>
</div>
<div className="testimonial py-4 px-3">
<p>"Amazing travel planning! 🗺️ I’ve never experienced such smooth and stress-free vacations. Their team is incredible, and they make everything easy! 🌟🌍 The attention to detail was impeccable, and I could relax knowing everything was handled perfectly!"</p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava02} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>Lia Franklin</h6>
    <p>Customer</p>
</div>
</div>
</div>
 </Slider>
  )
}

export default Testimonials
