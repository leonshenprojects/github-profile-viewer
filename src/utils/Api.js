function get(url) {
    const request = new XMLHttpRequest();

    request.open('GET', url);
    request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    request.setRequestHeader('Accept', 'application/vnd.github.v3+json');

	return new Promise((resolve = () => {}, reject = () => {}) => {
		request.onreadystatechange = function () {
			if (request.readyState === 4) {
				const responseBody = JSON.parse(request.responseText);

				if (isRequestStatusSuccessful(request.status)) {
					resolve(responseBody, request);
				} else {
					reject(request);
				}
			}
		};

        request.send();
	});
}

function isRequestStatusSuccessful(requestStatus) {
	return requestStatus >= 200 && requestStatus < 400;
}

export default { get }
