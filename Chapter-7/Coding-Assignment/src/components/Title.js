//export const Title = (props) => { //this is exporting by name
 const Title = (props) => {
    const imgPath = props.imgPath;
    return (
        <a href="/">
            <img src={imgPath} alt="React logo" style={{width:'60px'}}/>
        </a>
    )
} 

export default Title; ////this is exporting by default