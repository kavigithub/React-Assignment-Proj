const ShimmerEffect = () => {
    return(
        <>
            {
                Array(20).fill("").map((e) => (
                        <section className="shine-div">
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

export default ShimmerEffect;