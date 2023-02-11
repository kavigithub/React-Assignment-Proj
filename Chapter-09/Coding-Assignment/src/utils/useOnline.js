import { useEffect, useState } from "react";

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true)

    useEffect(() => {
        const handleOnline = function() {
            setIsOnline(true)
        };

        window.addEventListener('online', handleOnline);

        const handleOffline = function(){
            setIsOnline(false)
        };

        window.addEventListener('offline', handleOffline);

        //clear the mess
        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        }
    }, [])

    //hooks always return boolean, array, object...
    //function component always return JSX
    return isOnline //true or false status
}

export default useOnline;

