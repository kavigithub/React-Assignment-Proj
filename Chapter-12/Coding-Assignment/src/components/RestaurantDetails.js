import { useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants"
import useRestaurent from "../utils/useRestaurent";
import { FoodItemSkeleton } from "./FoodItemSkeleton";
import FoodItemLi from './FoodItemLi'

function filterMenuItem(item, menuFoodList) {
    let filterItem = menuFoodList.filter((filterI) => {
        return filterI.category === item
    })
    return filterItem;
}

function getUniqueCategory(objVal) {
    if (objVal) {
        return [...new Set(Object.values(objVal?.menu?.items).map((item) => item.category))];
    }
}

const RestaurantDetails = () => {
    //How to read dynamic URL params
    //const param = useParams();
    const { id } = useParams();

    const [restaurantData, menuFoodRender, setMenuFoodRender] = useRestaurent(id);
    /*   console.log(Object.values(restaurantData?.menu?.items)); */
    console.log(menuFoodRender, 'menuFoodRender');
    console.log(restaurantData, 'restaurantData');

    //console.log( restId);
    //to render api data into component and show on the page
    let [defaultState, setDefaultState] = useState(false);
    const [activeTab, setActiveTab] = useState(null);

    return (!restaurantData) ? <FoodItemSkeleton /> : (
        <>
            <div className="my-5">
                <section className="product-short-details-top bg-lime-900 p-7 flex flex-wrap justify-evenly items-center text-white">
                    <article className="mb-6 sm:mb-0 md:mb-0">
                        <figure className="w-52 border-2">
                            <img src={IMG_CDN_URL + restaurantData?.cloudinaryImageId} alt={restaurantData.name}
                            />
                        </figure>
                    </article>
                    <article className="mb-6 sm:mb-0 md:mb-0">
                        <h2 className="uppercase text-center md:text-left font-medium text-2xl pb-3">{restaurantData?.name}</h2>
                        {/* <h3>{restaurantData?.cuisines.join(',')}</h3> */}
                        <p>{restaurantData?.city}, {restaurantData?.area}, {restaurantData?.locality}</p>

                        <div className="flex my-4">
                            <p className="flex flex-col pr-3 border-r">{restaurantData?.avgRating} <small>Ratings</small></p>
                            <p className="flex flex-col px-3 border-r">{restaurantData?.sla?.deliveryTime} Mins<small>Delivery Time</small></p>
                            <p className="flex flex-col px-3">{restaurantData?.costForTwoMsg} <small>Cost for two</small></p>
                        </div>
                    </article>
                    <article className="mb-6 sm:mb-0 md:mb-0">
                        <div className="offer-box border border-gray-100 p-7 relative">
                            <hgroup>
                                <h2 className=" uppercase bg-amber-300 text-black p-3 absolute -top-6 font-bold -left-6">Offer</h2>
                                <h4 className="font-semibold text-base py-2">{restaurantData?.offerMeta[0]?.header}</h4>
                                <h4 className="font-semibold text-base">{restaurantData?.aggregatedDiscountInfo?.header}</h4>
                            </hgroup>
                        </div>
                    </article>
                </section>
                <hr />
                <section className="product-menu-items p-5">
                    <h4 style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'start', fontSize: '1.5rem', padding: '1rem' }}>Menu item  :
                        <span style={{ marginLeft: '5px' }}>{(defaultState === true) ? menuFoodRender.length : Object.values(restaurantData?.menu?.items).length}  Items</span>
                    </h4>
                    <hr />
                    <h3 className=" font-semibold text-xl p-4">Category</h3>
                    <ul className="flex flex-wrap p-1 mb-2">
                        {
                            getUniqueCategory(restaurantData).map((item, index) => (
                                <li id={index ? 'tab' + index : 'tab' + index} key={index} className={['py-1 px-2 cursor-pointer', activeTab === item ? ' border-b-2 border-lime-500' : ''].join(' ')} onClick={(e) => {
                                    console.log(e.currentTarget);
                                    let newTestData = filterMenuItem(item, Object.values(restaurantData?.menu?.items))
                                    console.log(newTestData, 'newtestdata')
                                    setMenuFoodRender(newTestData)
                                    setActiveTab(item)
                                    setDefaultState(true)
                                }}> {item} </li>
                            ))
                        }
                    </ul>
                    <hr />
                    <ul className="restaurent-item-info flex flex-wrap flex-col m-3">
                        {
                            menuFoodRender.map((item) => (
                                <FoodItemLi key={item.id} item={item} />
                            ))}
                    </ul>

                    {/* <div>{console.log(Object.values(restaurantData?.menu?.items))}</div> */}
                </section>
            </div>
        </>
    )
}

export default RestaurantDetails;