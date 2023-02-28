import { IMG_CDN_URL } from "../constants";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const FoodItemCart = ({cloudinaryImageId, name, category, title, discription, price, item, id}) => {
    const [itemCount, setItemCount] = useState(0);

    const dispatch = useDispatch();

    const addFoodItem = (item) => {
        dispatch(addItem(item))
        setItemCount(addItem(item))
    }   

    const removeFoodItem = (item) => {
        console.log(item, 'XXXXXXXXXXXXXXX')
        dispatch(removeItem(item))
        setItemCount(removeItem(item))
    }

    return(
        <>
            {
                (!id) ? setItemCount(itemCount+=1)  : <div className="p-5 m-3 mt-0 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 flex">
                <div className="pb-2 w-32 pr-4"><img src={IMG_CDN_URL + cloudinaryImageId} className="border-2 border-gray-200"/></div>
                <div className=" flex-grow">
                    <h4 className="font-bold truncate">{name}</h4>
                    <h6 className="font-bold text-xs py-1" title={title}>{category}</h6>
                    <p className="item-cost text-lime-900">{(price > 0) ?
                    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR'}).format(price/100 ): " " } </p>
                    <h4 className="font-bold py-1">{discription} </h4>
                </div>
                <div className="self-center flex-shrink">
                <div className="addBtn flex w-full md:w-36 bg-lime-900 text-white justify-around items-center  p-2">
                                        <button className="text-2xl hover:text-yellow-400" onClick={() => addFoodItem(itemCount)}> &#8853;</button>
                                        <span>{itemCount}</span>
                                        <button onClick={() => {removeFoodItem(itemCount)}} className="text-2xl hover:text-yellow-400">&#8861;</button>
                                    </div>
                </div>
                
            </div>
            }

        </>
    )
}

export default FoodItemCart;