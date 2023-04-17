/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { authAtom } from '../state';
export { useFetchWrapper };

let retry = 0;

function useFetchWrapper() {
	const [auth, setAuth] = useRecoilState(authAtom);
	const navigate = useNavigate();

	return {
		get: request('GET'),
		post: request('POST'),
		put: request('PUT'),
		delete: request('DELETE'),
	};

	function request(method: string) {
		return (url: string, body: object) => {
			const requestOptions: any = {
				method,
				headers: authHeader(url),
			};
			requestOptions.headers['Content-Type'] = 'application/json';
			if (body) {
				requestOptions.body = JSON.stringify(body);
			}
			return fetch(url, requestOptions).then(handleResponse);
		};
	}

	function authHeader(url: string) {
		const storage = JSON.parse(
			localStorage.getItem('user') ?? JSON.stringify({})
		);
		const { token } = storage;
		const isLoggedIn = !!token;
		const isApiUrl =
			url.startsWith('http://localhost:5000') ||
			url.startsWith('http://0.0.0.0:5000');
		if (isLoggedIn && isApiUrl) {
			return {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			};
		} else {
			return { 'Content-Type': 'application/json' };
		}
	}

	function handleResponse(response: {
		text: () => Promise<string>;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		ok: any;
		status: number;
		statusText: string;
	}) {
		return response.text().then((text: string) => {
			const data = text && JSON.parse(text);
			if (!response.ok) {
				if ([401, 403].includes(response.status) && auth?.token) {
					retry++;
					if (retry >= 5) {
						localStorage.removeItem('user');
						setAuth(null);
						navigate('/login', { replace: true });
						retry = 0;
					}
				}
				const error = (data && data.message) || response.statusText;
				return Promise.reject({ error, data });
			}
			retry = 0;
			return data;
		});
	}
}
