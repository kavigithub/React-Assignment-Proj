import {createContext} from 'react';

const UserContext = createContext({
    newUser : {
        name: 'Admin',
        email: 'admin@gmail.com',
        isAuthenticated: false
    }
});

UserContext.displayName = 'UserContext'; //to diaplay context name for debugging

export default UserContext;