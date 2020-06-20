// FETCH LIST
const fetchPokeList = (url) => {
	fetch(url).then((res) => res.json()).then((data) => {
		const { results, previous, next } = data;
		prevUrl = previous;
		nextUrl = next;

		for (let i = 0; i < pokeListItems.length; i++) {
			const pokeListItem = pokeListItems[i];
			const resultData = results[i];

			if (resultData) {
				const { name, url } = resultData;
				const urlArray = url.split('/');
				const id = urlArray[urlArray.length - 2];
				pokeListItem.textContent = id + '. ' + capitalize(name);
			} else {
				pokeListItem.textContent = '';
			}
		}
	});
};
