/* eslint-disable @typescript-eslint/no-explicit-any */
import { atom } from 'recoil';

const storage = JSON.parse(localStorage.getItem('user') ?? JSON.stringify({}));
let auth: any;
if (storage.length > 0) {
	auth = {
		token: storage.token,
		user: storage.user,
	};
}
const authAtom = atom({
	key: 'auth',
	// get initial state from local storage to enable user to stay logged in
	default: auth || storage,
});

export { authAtom };
