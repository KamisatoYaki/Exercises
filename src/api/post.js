const POSTS_URL = '/api/posts';

async function request(url, options) {
    const response = await fetch(url, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        ...options,
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
        const error = new Error(data?.message || 'The request failed.');
        error.response = {
            status: response.status,
            data,
        };
        throw error;
    }

    return { data };
}

export function getPost() {
    return request(POSTS_URL);
}

export function storePost(post) {
    return request(POSTS_URL, {
        method: 'POST',
        body: JSON.stringify(post),
    });
}
