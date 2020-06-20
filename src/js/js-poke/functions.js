const capitalize = (str) => str[0].toUpperCase() + str.substr(1);

const resetScreen = () => {
	mainScreen.classList.remove('hide');
	for (const type of TYPES) {
		mainScreen.classList.remove(type);
	}
};
