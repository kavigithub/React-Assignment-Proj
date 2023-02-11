import { useEffect, useState } from 'react';
import { restaurentData } from '../constants';
import RestaurentCard from './RestaurentCard';
import {FoodItemSkeleton} from './FoodItemSkeleton';
import { Link } from 'react-router-dom';

function filterData(searcInputText, restaurentData) {
    const dataFilter = restaurentData.filter((item) => {
       return item?.data?.name?.toLowerCase()?.includes(searcInputText);
    })
    return dataFilter;
}


const Body = () => {
    //let searchText = 'KFC';
    const [booleanText, setBooleanText] = useState('False');
    const [allRestaurent, setAllRestaurent] = useState([]);
    const [filterRestaurentList, setFilterRestaurentList] = useState([]); //initial data render
    const [searcInputText, setSearchInputText] = useState('');
    //console.log(restaurentList);

    //empty dependency array => once after render
    //dependency array [searchInputText] => once after initial render + every time after render change(searchInputText) 

    useEffect(() => {
        //get the API call
        getRestaurentData();
    }, []);

    async function getRestaurentData(){
        const reqData = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.19414704388351&lng=72.98747308552267&page_type=DESKTOP_WEB_LISTING');
        const json = await reqData.json();
        console.log(json);
        setAllRestaurent(json?.data?.cards[2]?.data?.data?.cards);
        setFilterRestaurentList(json?.data?.cards[2]?.data?.data?.cards);
    }

    console.log('render');

    //conditional redering
    //const restoLIst = restaurentList.map(box => (<ShimmerEffect itemNum={name}/>)); 

    //when restaurent data is not available...not render component ...Early return
    if(!allRestaurent) return null;

    return (allRestaurent.length === 0) ? <FoodItemSkeleton/> : (
        <>
        <div className='search-container'>
            <input type="text" className='search-input' placeholder='Search' value={searcInputText} onChange={ (e) => {
                 setSearchInputText(e.target.value);
                 if(e.target.value === '') {
                    setFilterRestaurentList(allRestaurent); 
                 } 
                }
            }/>
            {/* <h1 style={{display:'flex', flexDirection:'column'}}>{booleanText}</h1> */}
            <button className='search-btn' onClick={() => {
               const data = filterData(searcInputText, allRestaurent);
               setFilterRestaurentList(data); //kaha pe serach hoga..api mai
            }}>Search</button>
        </div>
        <section className="card-list">
            {
                (filterRestaurentList.length === 0) ? <h1 style={{paddingLeft:'20px'}}>
                No Restaurent match your Filter Criteria</h1> :
                filterRestaurentList.map((restaurant) => {
                  return <Link style={{width:'25%', textDecoration: 'none'}} to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}> <RestaurentCard {...restaurant.data} /></Link> 
                }) 
            }
        </section>
        
        </> 
    )
 }

 export default Body;