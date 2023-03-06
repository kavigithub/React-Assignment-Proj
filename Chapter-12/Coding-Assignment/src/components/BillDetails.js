import { useSelector } from "react-redux";

const BillDetails = () => {
    const cartItems = useSelector(store => store.cart.items); //useSelector: subscribe to the store
    console.log(cartItems, 'cartItems')

    let getPrice = cartItems.map((element) => (element?.price > 0) ? (element?.price / 100) * element?.count  : " ");

    console.log(getPrice, 'getPrice');   

    const getInitialValue = 0;
    const cartItemsTotal = (getPrice.reduce((accumalator, currentVal) => currentVal + accumalator, getInitialValue)).toFixed(2);

    console.log(cartItemsTotal, 'cartItemsTotal');

    const calGovtCharges =  ((cartItemsTotal * 5) / 100).toFixed(2);
    console.log(calGovtCharges, 'calGovtCharges'); 

   const netPayAmount = (parseFloat(cartItemsTotal) +  parseFloat(calGovtCharges)).toFixed(2);

    return(
        <>
            <h1 className="bg-lime-800 text-white p-3 font-semibold mb-3 text-lg">Bill Details</h1>
                    <div className="flex justify-between p-2">
                        <span>Item Total</span>
                        <span>&#8377; {cartItemsTotal}</span>
                    </div>
                    <div className="flex justify-between p-2">
                        <span>Delivery Charges</span>
                        <span>&#8377; FREE</span>
                    </div>
                    <div className="flex justify-between p-2">
                        <span>Govt Taxes & Other Charges</span>
                        <span>&#8377; {calGovtCharges}</span>
                    </div>
                    <div className=" border"></div>
                    <div className=" border"></div>

                    <div className="flex justify-between p-2">
                        <span className="font-bold">TO PAY</span>
                        <span className="font-bold">&#8377; {netPayAmount}</span>
                    </div>
        </>
    )
}

export default BillDetails;