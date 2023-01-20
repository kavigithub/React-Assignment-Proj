import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {IMG_CDN_URL} from "../constants"
import { FoodItemSkeleton } from "./FoodItemSkeleton";

const RestaurantDetails = () => {
    //How to read dynamic URL params
    const param = useParams();
    const { id } = param;
    console.log(param, id);
    //to render api data into component and show on the page
    const [restaurantData, setRestaurantData] = useState(null);

    //to get the api data
    useEffect(()=> {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch('https://www.swiggy.com/dapi/menu/v4/full?lat=19.060655&lng=72.851833&menuId='+ id);
        const getJson = await data.json();
        console.log(getJson)
        setRestaurantData(getJson.data);
    }

 /*    let uniqueList = restaurantData.map((item) => {
        console.log(item)
    });

    console.log(uniqueList);
 */
    //console.log(uniqueList);

   /*  if(!restaurantData) {
        return <FoodItemSkeleton />
    }
    */
   
    return (!restaurantData) ? <FoodItemSkeleton /> : (
        <>
            <div>
               <section className="product-short-details-top">
                    <article>
                        <figure>
                        <img src={IMG_CDN_URL + restaurantData.cloudinaryImageId} alt={restaurantData.name}/>     
                        </figure>
                    </article>
                    <article>
                        <h1 style={{textTransform:"uppercase"}}>{restaurantData.name}</h1>
                        <h3>{restaurantData.cuisines.join(', ')}</h3>    
                        <p>{restaurantData?.city}, {restaurantData?.area}, {restaurantData?.locality}</p>   

                         <div className="flex-item">
                            <p>{restaurantData?.avgRating} <small>Ratings</small></p>
                            <p>{restaurantData?.sla?.deliveryTime} Mins<small>Delivery Time</small></p>
                            <p>{restaurantData?.costForTwoMsg} <small>Cost for two</small></p>
                         </div>                              
                    </article>
                    <article>
                      <div className="offer-box">
                        <hgroup>
                            <h2>Offer</h2>
                            <h4>{restaurantData.offerMeta[0].header}</h4>
                            <h4>{restaurantData.aggregatedDiscountInfo.header}</h4>
                        </hgroup>
                      </div>
                    </article>
               </section>
                <hr />
                <section className="product-menu-items">
                    <h2>Menu item</h2>
                    <div>
                        Categories
                        {Object.values(restaurantData?.menu?.items).map((item) => {
                            <div key={item.id}>item.category</div>
                        })}
                    </div>
                    <ul>
                        {Object.values(restaurantData?.menu?.items).map((item) => (
                          <li key={item.id}>
                            <div>
                                <h6>{item.name}</h6>
                                <p>{item.attributes.vegClassifier}</p>
                                <img style={{width:'100px'}} src={IMG_CDN_URL + item.cloudinaryImageId}/>
                                <p>{item.price}</p>
                            </div>
                          </li>
                        ))}
                    </ul>

                    <div>{console.log(Object.values(restaurantData?.menu?.items))}</div>
                </section>
            </div>
        </>
    )
}

export default RestaurantDetails;