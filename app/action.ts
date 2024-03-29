'use server';

export const fetchAnime = async (page: number) => {
	const response = await fetch(
		`https://shikimori.one/api/animes?page=${page}&limit=10&order=popularity`
	);

	if (!response.ok) {
		throw new Error('Failed to fetch anime');
	}

	const data = await response.json();

	return data;
};
