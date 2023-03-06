import { useDispatch, useSelector } from "react-redux";
import {FoodItemSkeleton} from './FoodItemSkeleton';
import useAllRestaurentList from '../utils/useAllRestaurentList'
import FoodItemCart from "./FoodItemCart";
import { clearCart } from '../utils/cartSlice';
import CartEmpty from './CartEmpty';
import BillDetails from "./BillDetails";

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items); //useSelector: subscribe to the store
    console.log(cartItems, 'cartItems')

    const [allRestaurent] = useAllRestaurentList();
    //const [restaurantData] = useRestaurent(null); 

    const dispatch = useDispatch(); 

    const handleClearCart = ()=> {
        dispatch(clearCart())
    }

    return (allRestaurent.length === 0) ? <FoodItemSkeleton /> : (
        <div className="p-3">
            <div className=" flex justify-between align-middle py-5">
             <h1 className=" font-semibold text-2xl pl-8">Added Cart Items: {cartItems.length}</h1>
              <button className="inline-flex justify-center border border-transparent bg-lime-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500" onClick={() => handleClearCart()}>Clear Cart</button>  
            </div>
            
            { cartItems.length === 0 ? <CartEmpty /> : 
            <div className="flex flex-wrap px-5">
                   {/*  <FoodItemCart {...cartItems[0]}/> */}
                   <div className="flex flex-col w-3/4">
                   {cartItems.map((item) =>  <FoodItemCart key={item.id} {...item}/>)}
                   {/* <FoodItemCart /> */}
                   </div>

                   <div className=" w-1/4">
                    <BillDetails />
                   </div> 
            </div>
            }

        </div>
    )
}

export default Cart;