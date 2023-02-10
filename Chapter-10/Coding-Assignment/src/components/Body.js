import { useEffect, useState } from 'react';
import { restaurentData } from '../constants';
import RestaurentCard from './RestaurentCard';
import {FoodItemSkeleton} from './FoodItemSkeleton';
import { Link } from 'react-router-dom';
import SearchFood from './SearchFood';
import { filterData } from '../utils/helper';
/* import { DESKTOP_WEB_LISTING } from '../constants' */
import useAllRestaurentList from '../utils/useAllRestaurentList'
import useOnline from '../utils/useOnline'

const Body = () => {
    //let searchText = 'KFC';
    //const [booleanText, setBooleanText] = useState('False');
    //const [allRestaurent, setAllRestaurent] = useState([]);
    //const [filterRestaurentList, setFilterRestaurentList] = useState([]); //initial data render
    //const [searcInputText, setSearchInputText] = useState('');
    //console.log(restaurentList);

    //empty dependency array => once after render
    //dependency array [searchInputText] => once after initial render + every time after render change(searchInputText) 

    /* useEffect(() => {
        //get the API call
        getRestaurentData();  
    }, []);

    async function getRestaurentData(){
        const reqData = await fetch(DESKTOP_WEB_LISTING);
        const json = await reqData.json();
        console.log(json);
        setAllRestaurent(json?.data?.cards[2]?.data?.data?.cards);
        setFilterRestaurentList(json?.data?.cards[2]?.data?.data?.cards);
    } */

    const [allRestaurent, filterRestaurentList, setFilterRestaurentList] = useAllRestaurentList();

    //console.log(setFilterRestaurentList);

    console.log('render');

    //conditional redering
    //const restoLIst = restaurentList.map(box => (<ShimmerEffect itemNum={name}/>)); 
    //when restaurent data is not available...not render component ...Early return

    if(!allRestaurent) return null;

    return (allRestaurent.length === 0) ? <FoodItemSkeleton/> : (
        <>
        {/* <div className='search-container'>
            <input type="text" className='search-input' placeholder='Search' value={searcInputText} onChange={ (e) => {
                 setSearchInputText(e.target.value);
                 if(e.target.value === '') {
                    setFilterRestaurentList(allRestaurent); 
                 } 
                }
            }/>
            <button className='search-btn' onClick={() => {
               const data = filterData(searcInputText, allRestaurent);
               setFilterRestaurentList(data); //kaha pe serach hoga..api mai
            }}>Search</button>
        </div> */} 


      <SearchFood allRestaurent={allRestaurent} setFilterRestaurentList={setFilterRestaurentList}/>
      
      <section className="flex flex-wrap px-5">
            {
                (filterRestaurentList.length === 0) ? 
                <h1 style={{paddingLeft:'20px'}}> No Restaurent match your Filter Criteria</h1> :
                filterRestaurentList.map((restaurant) => {
                  return <Link className='md:w-1/4 sm:w-6/12' style={{textDecoration: 'none'}} to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}> <RestaurentCard {...restaurant.data} /></Link> 
                }) 
            }
        </section>
        
        </> 
    )
 }

 export default Body;