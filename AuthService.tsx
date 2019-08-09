interface Response {
	status: number;
	body: object[];
}

class AuthService {
	public async fetch(url: string, options?: object): Promise<Response | void> {
		const headers = {
			Accept: 'application/json',
			'Content-Type': 'application/json; charset=utf-8',
		};

		return fetch(url, {
			headers,
			...options,
		})
			.then(response => {
				return response.json().then(data => {
					return { status: response.status, body: data };
				});
			})
			.catch((e): void => console.error(e));
	}
}

export default AuthService;
