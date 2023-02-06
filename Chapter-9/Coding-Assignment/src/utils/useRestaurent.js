import { useEffect, useState } from "react";
import { FEACH_MENU_URL } from "../constants";

const useRestaurent = (id) => {
    const [restaurantData, setRestaurantData] = useState(null);
    const [menuFoodRender, setMenuFoodRender] = useState([]);

    //to get data from api
    useEffect(()=> {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch(FEACH_MENU_URL + id);
        const getJson = await data.json();
        setRestaurantData(getJson.data);
        setMenuFoodRender(Object.values(getJson?.data?.menu?.items));
    }

    return [restaurantData, menuFoodRender, setMenuFoodRender]
}

export default useRestaurent;