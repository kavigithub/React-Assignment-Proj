import { THUM_IMG_CDN } from "../constants";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";

const FoodItemLi = ({ item }) => {

    const [selectItemId, setSelectItemId] = useState(null);

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const addFoodItem = (item) => {
        setSelectItemId(item.id);
        dispatch(addItem(item))
    }

    const removeFoodItem = (item) => {
        console.log(item, 'XXXXXXXXXXXXXXX')
        setSelectItemId(item.id);
        dispatch(removeItem(item.id))
    }
    console.log('jikl');
    return (
        <li className=" border-b border-lime-900 p-2 mb-2" key={item?.id}>
            <section className="flex md:justify-between">
                <article className="mr-2 w-3/4 float-left">
                    <h4 className="md:text-lg text-sm font-bold pb-2 text-lime-900">{item?.name}</h4>
                    <p className="item-cost text-lime-900">{(item?.price > 0) ?
                        new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(item?.price / 100) : " "} </p>
                    <small className="item-desc">{item?.description}</small>
                    {/* <p>{item.price}</p>*/}
                </article>

                <div className="float-right w-1/4">
                    <figure className="flex flex-col items-end sm:ml-2 md:mx-10">
                        <img className="sm:w-full md:w-36 h-28 border border-gray-300 p-1" src={THUM_IMG_CDN + item?.cloudinaryImageId} alt={item?.name} />
                        <div className="addBtn flex w-full md:w-36 bg-lime-900 text-white justify-around items-center my-2 p-2">
                            <button className="text-2xl hover:text-yellow-400" onClick={() => addFoodItem(item)}> &#8853;</button>
                            <span>{selectItemId === item.id ?
                                <>
                                    {
                                        cartItems.length ?
                                            cartItems.map(foodItem => {
                                                if (foodItem.id === item.id) {
                                                    return foodItem.count;
                                                }
                                        }) : 0
                                    }
                                </> 
                            : 0}</span>
                            <button onClick={() => { removeFoodItem(item) }} className="text-2xl hover:text-yellow-400">&#8861;</button>
                        </div>
                    </figure>
                </div>
            </section>
        </li>
    )
}

export default FoodItemLi;