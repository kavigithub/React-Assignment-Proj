const Footer = () => {
    return(
        <>
            <footer className=" w-full bg-lime-800 mt-5 p-5 flex justify-between items-center text-white fixed bottom-0">

                <span>© 2023 Company, Designed By : KAvita Ghatge</span>

                <ul className="flex justify-end">
                    <li className="px-2"><a href="https://www.facebook.com/swiggy.in" rel="nofollow noopener" alt="facebook" target="_blank"><img width="24" height="24" alt="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-facebook_tfqsuc" /></a></li>
                    <li className="px-2"><a href="https://pinterest.com/swiggyindia" rel="nofollow noopener" alt="pintrest" target="_blank"><img width="24" height="24" alt="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-pinterest_kmz2wd" /></a></li>
                    <li className="px-2"><a href="https://instagram.com/swiggyindia/" rel="nofollow noopener" alt="instagram" target="_blank"><img width="24" height="24" alt="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-instagram_b7nubh"/></a></li>
                    <li className="px-2"><a href="https://twitter.com/swiggy" rel="nofollow noopener" alt="twitter" target="_blank"><img width="24" height="24" alt="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-twitter_gtq8dv"/></a></li>
                </ul>
            </footer>
        </>
    )
 }

export default Footer; 