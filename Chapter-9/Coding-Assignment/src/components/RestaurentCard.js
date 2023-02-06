import { useState } from "react";
import { IMG_CDN_URL } from "../constants";

function classNames(...args) {
  return args.filter(Boolean).join(' ')
}

 //const RestaurentCard = (props) => {
/*  const RestaurentCard = ( {restaurant} ) => { */
//this how u doing on the fly changes
const RestaurentCard = ( {cloudinaryImageId, name, cuisines, avgRating, deliveryTime, lastMileTravelString, title, ribbon} ) => {
    const [promotionaClass, setPromotionaClass] = useState(false);

    // console.log(props)
   /* const {cloudinaryImageId, name, cuisines, avgRating, deliveryTime, lastMileTravelString, title}  = restaurant.data ?? {}; */
     return (
         <div className="card" style={{position:'relative'}}>
             <div style={{position:'relative'}}>
                <img src={IMG_CDN_URL + cloudinaryImageId}/>
                {
                  ribbon ? (<div className={['special-pramotion-tag', ribbon[0].type === 'PROMOTED' ? 'bg-green' : 'bg-red'].join(' ')}>
                  <div className={'special-pramotion-tag-text'}>
                    {
                    ribbon[0].type
                    }</div>
                </div>) : (<div className="special-pramotion-tag" style={{display: 'none'}}></div>)
                }
             </div>
             
             {/* <h4>{restaurentData[2].data?.name}</h4> 1st method */}
             {/* <h4>{props.restaurant.data?.name}</h4> 2nd Method*/}
             {/* <h4>{name}</h4> */}
             <h4>{name}</h4>
             <h6 title={title}>{cuisines.join(', ')}</h6>
             <h4>Stars : {avgRating} </h4>
             <h5 className="d-flex-space-between">
               <small>Delivery Time : {deliveryTime}</small>  
               <small>Travel Distance : {lastMileTravelString}</small> 
             </h5>
         </div>
     )
  }

  export default RestaurentCard;