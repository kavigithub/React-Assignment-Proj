const CartEmpty = () => {
    return(
        <>
            <div>
                <h4  className=" m-auto bg-lime-600 text-white p-3 text-center w-1/2">YOUR CART IS EMPTY || <a href="/" className=" text-yellow-400">ADD YOUR FAVOURITE FOOD</a></h4>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/97e35c134324769.61d3e179c4d3d.png" width={'50%'} className=" m-auto"/>
                
            </div>
        </>
    )
}

export default CartEmpty;