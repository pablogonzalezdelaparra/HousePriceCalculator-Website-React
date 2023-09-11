import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { UserContext } from '../pages/RoutesPage';

function UserProvider({children}) {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const userToken = Cookies.get("userToken");
        const name = Cookies.get("name");
        const lastName = Cookies.get("lastName");
        if (userToken && name && lastName) {
            setUserData({ userToken, name, lastName });
        }
    }, []);

  return (
    <UserContext.Provider value={{userData: userData, setUserData: setUserData}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider