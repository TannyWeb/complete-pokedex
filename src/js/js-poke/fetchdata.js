const fetchPokeData = (id) => {
	fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res.json()).then((data) => {
		resetScreen();

		const dataTypes = data['types'];
		const dataFirstType = dataTypes[0];
		const dataSecondType = dataTypes[1];
		pokeTypeOne.textContent = capitalize(dataFirstType['type']['name']);
		if (dataSecondType) {
			pokeTypeTwo.classList.remove('hide');
			pokeTypeTwo.textContent = capitalize(dataSecondType['type']['name']);
		} else {
			pokeTypeTwo.classList.add('hide');
			pokeTypeTwo.textContent = '';
		}
		mainScreen.classList.add(dataFirstType['type']['name']);

		pokeName.textContent = capitalize(data['name']);
		pokeId.textContent = '#' + data['id'].toString().padStart(3, '0');
		pokeWeight.textContent = data['weight'];
		pokeHeight.textContent = data['height'];
		pokeFrontImage.src = data['sprites']['front_default'] || '';
		pokeBackImage.src = data['sprites']['back_default'] || '';
	});
};
