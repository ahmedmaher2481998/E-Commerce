import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
	const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
		useAuth0();
	const [myUser, setMyUser] = useState(null);
	const [a, seta] = useState(0);
	useEffect(() => {
		console.log("user", user);
		console.log("isAuthaticated", isAuthenticated);
		console.log("isloading", isLoading);
		console.log("**************");
		if (isAuthenticated) setMyUser(user);
		else setMyUser(null);
	}, [isAuthenticated]);
	return (
		<UserContext.Provider
			value={{ isAuthenticated, a, loginWithRedirect, myUser, logout }}
		>
			{children}
		</UserContext.Provider>
	);
};
// make sure use
export const useUserContext = () => {
	return useContext(UserContext);
};
