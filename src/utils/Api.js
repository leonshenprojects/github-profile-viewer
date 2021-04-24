async function get(url) {
	const headers = {
		'Accept': 'application/vnd.github.v3+json',
		'X-Requested-With': 'XMLHttpRequest',
	};

	const request = await fetch(url, {
        method: 'GET',
        headers: headers,
    });

	if (!request.ok) {
		throw {
			request,
			response: await request.json(),
		};
	}

	return getBody(request);
}

async function getBody(request) {
	try {
		return await request.json();
	} catch {
		return null;
	}
}

export default { get }
