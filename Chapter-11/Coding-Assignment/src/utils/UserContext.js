import {createContext} from 'react';

const UserContext = createContext({
    newUser : {
        name: 'Dummy Name',
        email: 'abc@gmail.com'
    }
});

UserContext.displayName = 'UserContext'; //to diaplay context name for debugging

export default UserContext;