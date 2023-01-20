export const FoodItemSkeleton = () => {
    //this is the shimmer effect
    return(
        <>
            { Array(20).fill("").map((e, i) => (
                        <section className="shine-div" key={i}>
                            <div className="shine shine-photo"></div>
                            <div className="shine shine-lines"></div>
                            <div className="shine shine-lines"></div>
                            <div className="shine shine-lines"></div>
                            <div className="shine shine-lines"></div>
                        </section>
                    ))
            }
        </>
        
    )
};
