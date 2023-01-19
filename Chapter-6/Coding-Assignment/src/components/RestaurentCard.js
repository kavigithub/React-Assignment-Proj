import { IMG_CDN_URL } from "../constants";

 //const RestaurentCard = (props) => {
/*  const RestaurentCard = ( {restaurant} ) => { */
//this how u doing on the fly changes
const RestaurentCard = ( {cloudinaryImageId, name, cuisines, avgRating, deliveryTime, lastMileTravelString, title} ) => {
    // console.log(props)
   /* const {cloudinaryImageId, name, cuisines, avgRating, deliveryTime, lastMileTravelString, title}  = restaurant.data ?? {}; */
     return (
         <div className="card">
             <img src={IMG_CDN_URL + cloudinaryImageId}/>
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