/* eslint-disable @typescript-eslint/no-explicit-any */

import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { useFetchWrapper } from '../helpers';
import { authAtom } from '../state';
import { auth, googleAuthProvider } from '../firebase';
export { useUserActions };

function useUserActions() {
	const navigate = useNavigate();
	const baseUrl = `api`;
	const fetchWrapper = useFetchWrapper();
	const setAuth = useSetRecoilState(authAtom);
	return {
		login,
		logout,
		googleLogin,
	};

	function login(username: string, password: string) {
		return fetchWrapper
			.post(`${baseUrl}/login`, { username, password })
			.then((user: any) => {
				// store user details and jwt token in local storage to keep user logged in between page refreshes
				localStorage.setItem('user', JSON.stringify(user));
				setAuth(user);
			});
	}

	function logout() {
		// remove user from local storage, set auth state to null and redirect to login page
		localStorage.removeItem('user');
		setAuth(null);
	}

	function googleLogin() {
		return auth
			.signInWithPopup(googleAuthProvider)
			.then((user: any) => {
				alert(user);
				if (user != null) {
					navigate('/dashboard');
				}
			})
			.catch((error: any) => {
				alert(error);
			});
	}
}

export default useUserActions;
