import React from 'react'
import './topBrands.css';
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import Slider from 'react-slick';

const topBrandsList=[
    {
        id:1,
        time: "35 min",
        cover: 'https://www.uengage.in/images/addo/logos/lapinoz.png'
    },
    {
        id:2,
        time: "29 min",
        cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Burger_King_2020.svg/800px-Burger_King_2020.svg.png'
    },
    {
        id:3,
        time: "32 min",
        cover: 'https://cdn.dribbble.com/users/7389414/screenshots/15375369/pizza-kinng-001_4x.jpg'
    },
    {
        id:4,
        time: "30 min",
        cover: 'https://cdn.dribbble.com/users/6179442/screenshots/14368674/burger_point_logo-04.jpg'
    },
    {
        id:5,
        time: "39 min",
        cover: 'https://logowik.com/content/uploads/images/674_kfc.jpg'
    },
    {
        id:6,
        time: "24 min",
        cover: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/logos/original/1611934153_Yash.png'
    },
    {
        id:7,
        time: "48 min",
        cover: 'https://static.vecteezy.com/system/resources/previews/020/190/610/original/mcdonalds-logo-mcdonald-icon-free-free-vector.jpg'
    },
];

const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
const TopBrands = () => {
  return (
    <div className='top-brands max-width'>
    <div className='collection-title'>Top brands for you</div>
    <Slider {...settings}>
     {topBrandsList.map((brand)=>{
      return <div>
        <div className='top-brands-cover'>
            <img src={brand.cover} className='top-brands-image' alt={brand.time}  />
        </div>
      </div>
    
    })}
    
    </Slider>
    </div>
  )
}

export default TopBrands
