import { useState, useEffect } from "react";
import { DESKTOP_WEB_LISTING } from '../constants'

const useAllRestaurentList = () => {

    const [allRestaurent, setAllRestaurent] = useState([]);
    const [filterRestaurentList, setFilterRestaurentList] = useState([]); //initial data render
    
    useEffect(() => {
        //get the API call
        getRestaurentData();  
    }, []);

    async function getRestaurentData(){
        const reqData = await fetch(DESKTOP_WEB_LISTING);
        const json = await reqData.json();
       /*  console.log(json); */
        setAllRestaurent(json?.data?.cards[2]?.data?.data?.cards);
        setFilterRestaurentList(json?.data?.cards[2]?.data?.data?.cards);
    }

    return [allRestaurent, filterRestaurentList, setFilterRestaurentList, setAllRestaurent]
}

export default useAllRestaurentList