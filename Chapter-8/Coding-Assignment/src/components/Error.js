import { useRouteError } from "react-router-dom";

const Error = () => {
    const errDetails = useRouteError();
    const {status, statusText} = errDetails;
    console.log
    return(
        <>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>Oops!</h1>
                        <h2> {status + " " + statusText}</h2>
                    </div>
                    <a href="/">Go TO HOMEPAGE</a>
                </div>
            </div>
        </>
    )
}

export default Error;