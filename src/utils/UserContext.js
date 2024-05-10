import { createContext } from 'react';

export const UserContext = createContext({
    loggedInUser:"Default User",
});


export default UserContext;