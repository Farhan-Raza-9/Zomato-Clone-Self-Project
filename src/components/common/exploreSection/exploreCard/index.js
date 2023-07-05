import React from 'react';
import './exploreCard.css';


const ExploreCard = ({ restaurant }) => {
  const name = restaurant? restaurant.info? restaurant.info.name?  restaurant.info.name :null :null :null;
  const coverImg = restaurant? restaurant.info? restaurant.info.image? restaurant.info.image.url?  restaurant.info.image.url  :null :null :null :null;
  const deliveryTime = restaurant? restaurant.order? restaurant.order.deliveryTime? restaurant.order.deliveryTime :null :null  :null ;
  const rating= restaurant? restaurant.info? restaurant.info.rating? restaurant.info.rating.rating_text? restaurant.info.rating.rating_text :null :null :null :null ;
  const approxPrice= restaurant? restaurant.info? restaurant.info.cfo? restaurant.info.cfo.text? restaurant.info.cfo.text :null :null :null :null;
  const offers= restaurant? restaurant.bulkOffers? restaurant.bulkOffers :null :null;
  const cuisine= restaurant? restaurant.info? restaurant.info.cuisine? restaurant.info.cuisine.map((item)=>item.name).slice(0,3)  :null :null :null ;

  
// const name = restaurant?.info?.name ?? "";
// const coverImg = restaurant?.info?.image?.url;
// const deliveryTime = restaurant?.order?.deliveryTime ;
// const rating= restaurant? restaurant.info? restaurant.info.rating? restaurant.info.rating.rating_text? restaurant.info.rating.rating_text  ;
// const approxPrice= restaurant? restaurant.info? restaurant.info.cfo? restaurant.info.cfo.text? restaurant.info.cfo.text ;
// const offers= restaurant? restaurant.bulkOffers? restaurant.bulkOffers :null :null ;
// const cuisine= restaurant? restaurant.info? restaurant.info.cuisine? restaurant.info.cuisine.map((item)=>item.name).slice(0,3)  ;

// const name = restaurant.info.name ;
// const coverImg = restaurant.info.image.url;
// const deliveryTime = restaurant.order.deliveryTime ;
// const rating= restaurant.info.rating.rating_text  ;
// const approxPrice= restaurant.info.cfo.text ;
// const offers= restaurant.bulkOffers  ;
// const cuisine= restaurant.info.cuisine.map((item)=>item.name).slice(0,3);
  
 
  const bottomContainers =  restaurant? restaurant.bottomContainers? restaurant.bottomContainers :null :null ;
  const goldOff= restaurant? restaurant.gold? restaurant.gold.text?  restaurant.gold.text :null :null :null ;
  const proOff= offers? offers.length>1? offers[0].text :null :null;
  const discount= offers? offers.length>1?offers[1].text:offers.length===1 ? offers[0].text :null :null;



    return (
    <div className='explore-card cur-po'>
     <div className='explore-card-cover'>
        <img src={coverImg} alt={name} className='explore-card-image'  />
        <div className='delivery-time'>{deliveryTime}</div>
        {
            proOff &&<div className='pro-off'>{proOff}</div>
        }
        {
            goldOff && <div className='gold-off absolute-center'>{goldOff}</div>
        }
        {
            discount && <div className='discount absolute-center'>{discount}</div>
        }
     </div>
    </div>
  );
};

export default ExploreCard
