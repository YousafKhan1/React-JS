import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Veg1 from '../assets/Images/vege.jpg'
import Veg2 from '../assets/Images/vege2.jpg'
import Veg3 from '../assets/Images/vege3.jpg'
import Veg4 from '../assets/Images/vege4.png'
import Veg5 from '../assets/Images/vege5.jpg'
import Veg6 from '../assets/Images/vege6.jpg'
import Veg7 from '../assets/Images/vege7.jpeg'
import SProduct from './SProduct';

const ProductSlider = () => {
    var settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='slider py-5'>
        <h1 className='text-center display-4 mt-4 fw-bold text-light'>
            Fresh Vegetable Recipes To Bring
            <br /> To Your Next Cookout
        </h1>
        <div className='container mt-5'>
            <Slider {...settings}>
                <div className='p-1'>
                    <SProduct 
                        Image = {Veg1}
                        Description="Celery potato scallion desert raisin horseradish spinach carrot"
                    />
                </div>
                <div className='p-1'>
                <SProduct 
                        Image = {Veg2}
                        Description="Celery potato scallion desert raisin horseradish spinach carrot"
                    />
                </div>
                <div className='p-1'>
                <SProduct 
                        Image = {Veg3}
                        Description="Celery potato scallion desert raisin horseradish spinach carrot"
                    />
                </div>
                <div className='p-1'>
                <SProduct 
                        Image = {Veg4}
                        Description="Celery potato scallion desert raisin horseradish spinach carrot"
                    />
                </div>
                <div className='p-1'>
                <SProduct 
                        Image = {Veg5}
                        Description="Celery potato scallion desert raisin horseradish spinach carrot"
                    />
                </div>
                <div className='p-1'>
                <SProduct 
                        Image = {Veg6}
                        Description="Celery potato scallion desert raisin horseradish spinach carrot"
                    />
                </div>
                <div className='p-1'>
                <SProduct 
                        Image = {Veg7}
                        Description="Celery potato scallion desert raisin horseradish spinach carrot"
                    />
                </div>
            </Slider>
        </div>
    </div>
  )
}

export default ProductSlider