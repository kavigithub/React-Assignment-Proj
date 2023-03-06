import { IMG_CDN_URL } from "../constants";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const FoodItemCart = (item) => {
    const { cloudinaryImageId, name, category, title, discription, price, count, id } = item;
    const [selectItemId, setSelectItemId] = useState(null);

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

    return (
        <div>
            <div className="p-5 m-3 mt-0 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 flex">
                <div className="pb-2 w-32 pr-4"><img src={IMG_CDN_URL + cloudinaryImageId} className="border-2 border-gray-200" /></div>
                <div className=" flex-grow">
                    <h4 className="font-bold truncate">{name}</h4>
                    <h6 className="font-bold text-xs py-1" title={title}>{category}</h6>
                    <p className="item-cost text-lime-900">{(price > 0) ?
                        new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price / 100) : " "} </p>
                    <h4 className="font-bold py-1">{discription} </h4>
                </div>
                <div className="self-center flex-shrink">
                    <div className="addBtn flex w-full md:w-36 bg-lime-900 text-white justify-around items-center my-2 p-2">
                        <button className="text-2xl hover:text-yellow-400" onClick={() => addFoodItem(item)}> &#8853;</button>
                        <span>{count}</span>
                        <button onClick={() => { removeFoodItem(item) }} className="text-2xl hover:text-yellow-400">&#8861;</button>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default FoodItemCart;