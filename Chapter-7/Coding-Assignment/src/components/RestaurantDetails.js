import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {IMG_CDN_URL, THUM_IMG_CDN} from "../constants"
import { FoodItemSkeleton } from "./FoodItemSkeleton";
import Counter from "./Counter";
  

function getUniqueCategory(objVal) {
    if(objVal){
        return [...new Set(Object.values(objVal?.menu?.items).map((item) => item.category))];
     }
}

function filterMenuItem(item, menuFoodList){
    let filterItem = menuFoodList.filter((filterI) => {
        return filterI.category === item
    })  
    return filterItem;
}

const RestaurantDetails = () => {
    //How to read dynamic URL params
    //const param = useParams();
    const { id } = useParams();
    //console.log( restId);
    //to render api data into component and show on the page
    const [restaurantData, setRestaurantData] = useState(null);
    const [filterItemsCategoty, setFilterItemsCategoty] = useState(getUniqueCategory(restaurantData));
    let [activeTab, setActiveTab] = useState(null);
    const [menuFoodRender, setMenuFoodRender] = useState([]);

   /* console.log(getUniqueCategory(restaurantData));
   console.log(restaurantData); */

   console.log(useState());

    //to get the api data
    useEffect(()=> {
        console.log(restaurantData);
        console.log(filterItemsCategoty)
        getRestaurantInfo();
        if(restaurantData) {
          setFilterItemsCategoty(getUniqueCategory(restaurantData));
        } 
    }, []);
   console.log(filterItemsCategoty);
   console.log(restaurantData);

    async function getRestaurantInfo() {
        const data = await fetch('https://www.swiggy.com/dapi/menu/v4/full?lat=19.19414704388351&lng=72.98747308552267&menuId='+id);
        const getJson = await data.json();
        //console.log(getJson)
        setRestaurantData(getJson.data);
        setMenuFoodRender(Object.values(getJson?.data?.menu?.items));
    }

   /*  if(!restaurantData) {
        return <FoodItemSkeleton />
    }
    */
   
    return (!restaurantData) ? <FoodItemSkeleton /> : (
        <>
            <Counter></Counter>
            <div>
               <section className="product-short-details-top">
                    <article>
                        <figure>
                        <img src={IMG_CDN_URL + restaurantData.cloudinaryImageId} alt={restaurantData.name}/>     
                        </figure>
                    </article>
                    <article>
                        <h2 style={{textTransform:"uppercase"}}>{restaurantData.name}</h2>
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
                    <h4 style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'start'}}>Menu item  : 
                         <span style={{marginLeft:'5px'}}>{menuFoodRender.length} Items</span>
                        {/*  setMenuFoodRender(Object.values(restaurantData?.menu?.items)) */}
                    </h4>
                    <hr />
                    <h3>Category</h3>
                    <ul className="restoCategory">
                        {
                            getUniqueCategory(restaurantData).map((item, index) => (
                                    <li id={index? 'tab'+index : 'tab'+index} key={index} className={activeTab === item ? 'active-category' : ''}  onClick={(e) => {
                                        console.log(e.currentTarget); 
                                        let newTestData = filterMenuItem(item, Object.values(restaurantData?.menu?.items))
                                        console.log(newTestData, 'newtestdata')
                                        setMenuFoodRender(newTestData)
                                        setActiveTab(item)
                                        }}> {item} </li>
                                ))  
                        }
                    </ul>
                    <hr />
                    <ul className="restaurent-item-info">
                    <span>{
                       /*  
                       setFilterItemsCategoty(item)
                                        setActiveTab(activeTab = !activeTab)
                       Object.values(restaurantData?.menu?.items).filter((fItem) => (
                            filterItemsCategoty === fItem.category
                        )) */
                         console.log('restinfo', filterItemsCategoty)
                        }
                        </span>
                        {menuFoodRender.map((item) => (
                          <li key={item.id}>
                            <section>
                                <article className="food-info">
                                <h4>{item.name}</h4>
                                {<p className="item-cost">{(item?.price > 0) ?
                  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR'}).format(item?.price/100 ): " " } </p> }
                                <small className="item-desc">{item?.description}</small>
                                {/* <p>{item.price}</p>*/}
                                </article>
                                
                                <figure className="food-img">
                                    <img src={ THUM_IMG_CDN  + item?.cloudinaryImageId } alt={item?.name}/>
                                    <div className="addBtn">
                                        <span style={{fontSize:'x-large'}}>+</span>
                                        <span>ADD</span>
                                        <span style={{fontSize:'xx-large'}}>-</span>
                                    </div>
                                </figure>    
                            </section>
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