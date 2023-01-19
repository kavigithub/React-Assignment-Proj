let Skelton = () => {
    for(let i = 0; i < 5; i++) {
        return(
            <section className="shine-div" id={i}>
                <div className="shine shine-photo"></div>
                <div className="shine shine-lines"></div>
                <div className="shine shine-lines"></div>
                <div className="shine shine-lines"></div>
                <div className="shine shine-lines"></div>
            </section>
        )
    }
};


const ShimmerEffect = () => {
    return (
        <>
            {Skelton()} 
        </>
    )
}

export default ShimmerEffect;