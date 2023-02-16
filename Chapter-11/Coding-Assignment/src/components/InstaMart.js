import { useState } from "react"

//import React from "react";
const Section = ({ title, discription, isVisible, setIsVisible }) => {
    //const [isVisible, setIsVisible] = useState(false) //control given from child to parent 
    return (
        <>
            <div className="border border-black m-2 p-2">
                <h3 className=" text-lg flex align-middle justify-between">{title}
                    <span className="cursor-pointer" onClick={(e) => setIsVisible(!isVisible)}>{ 
                    isVisible === true ? 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" /></svg> : 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                    }</span>
                </h3>
                {/* <button className="cursor-pointer" onClick={() => setIsVisible(!isVisible)}>{(isVisible === true) ? 'Hide' : 'Show'}</button> */}
                {/* <h3 className="text-sm">{isVisible && discription}</h3> wromg*/}
                {isVisible && <p className="text-sm py-3">{discription}</p>}
                {/* {} //when u wrap it inside {}... allows to use javascript ...conditions
                && <p className="text-sm">{discription}</p> //this will only render if
                isVisible is true */}
            </div>
        </>
    )
}

const InstaMart = () => {
   /*  const [sectionConfig, setSectionConfig] = useState({
        showAbout : false,
        showTeam : false,
        showOffer: false
    }); */
    const [visibleSection, setVisibleSection] = useState('about')
    return (
        <>
            
            <figure className="mt-3" style={{ backgroundColor: '#fee3c6' }}>
                <img src="https://offers.freecharge.in/Swiggy/1440x752.png" alt="offer" className=" text-center" style={{ width: '500px', margin: '0 auto' }} />
            </figure>

            <div>
                {/* //this is not good example */}
                {/* <Section title={'About Instamart'} discription={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} 
                isVisible={sectionConfig.showAbout} 
                setIsVisible ={() => 
                        setSectionConfig({  
                            showAbout : true,
                            showTeam : false,
                            showOffer: false
                        }) 
                    }
                />
                <Section title={'Team Instamart'} discription={"This is instamert Team"} isVisible={sectionConfig.showTeam} 
                 setIsVisible={() => setSectionConfig({
                    showAbout: false,
                    showTeam: true,
                    showOffer: false
                 })}   
                />
                <Section title={'Offer Instamart'} discription={"This is instamert Offer"} isVisible={sectionConfig.showOffer}
                setIsVisible={() => { setSectionConfig({
                                        showAbout: false,
                                        showTeam: false,
                                        showOffer: true
                                    })
                }}
                 /> */}

            
                {/*  THIS IS THE RIGHT WAY */}
                <Section title={'About Instamart'} discription={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} 
                isVisible={visibleSection === 'about'} 
                setIsVisible ={() => setVisibleSection( visibleSection === 'about' ? null : 'about')}
                />
                <Section title={'Team Instamart'} discription={"This is instamert Team"} 
                 isVisible={visibleSection === 'team'} 
                 setIsVisible={() => setVisibleSection(visibleSection === 'team' ? '' : 'team')}   
                />
                <Section title={'Offer Instamart'} discription={"This is instamert Offer"} 
                isVisible={visibleSection === 'offer'}
                setIsVisible={() => {setVisibleSection(visibleSection === 'offer'? null : 'offer')}}
                 />
            </div>
        </>
    )
}

export default InstaMart;