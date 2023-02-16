import { useState } from "react";
import { IMG_CDN_URL } from "../constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

function classNames(...args) {
  return args.filter(Boolean).join(' ')
}

 //const RestaurentCard = (props) => {
/*  const RestaurentCard = ( {restaurant} ) => { */
//this how u doing on the fly changes
const RestaurentCard = ( {cloudinaryImageId, name, cuisines, avgRating, deliveryTime, lastMileTravelString, title, ribbon, user}) => {
    const [promotionaClass, setPromotionaClass] = useState(false);

    const {newUser} = useContext(UserContext);

    // console.log(props)
   /* const {cloudinaryImageId, name, cuisines, avgRating, deliveryTime, lastMileTravelString, title}  = restaurant.data ?? {}; */
     return (
         <div className="relative h-fit p-5 m-3 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105" style={{position:'relative'}}>
             <div style={{position:'relative'}}>
                <img src={IMG_CDN_URL + cloudinaryImageId} className="border-2 border-gray-200"/>
                {
                  ribbon ? (<div className={['special-pramotion-tag text-white absolute uppercase p-1 top-0 -left-2 text-sm', ribbon[0].type === 'PROMOTED' ? 'bg-lime-700' : 'bg-red-700'].join(' ')}>
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
             <h4 className="text-lg font-bold py-1 truncate">{name}</h4>
             <h6 className="font-bold text-xs py-1" title={title}>{cuisines.join(', ')}</h6>
             <h4 className="font-bold py-1">Stars : {avgRating} </h4>
             <h5 className=" font-bold text-xs flex justify-between py-1">
               <small>Delivery Time : {deliveryTime}</small>  
               <small>Travel Distance : {lastMileTravelString}</small> 
             </h5>
             <h4>{user.name}</h4>
             <b>{newUser.email}</b>
         </div>
     )
  }

  export default RestaurentCard;