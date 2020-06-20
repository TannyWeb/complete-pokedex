// export default function eventListeners(params) {
// 	const handleLeftButtonClick = () => {
// 		if (prevUrl) {
// 			fetchPokeList(prevUrl);
// 		}
// 	};

// 	const handleRightButtonClick = () => {
// 		if (nextUrl) {
// 			fetchPokeList(nextUrl);
// 		}
// 	};

// 	const handleListItemClick = (e) => {
// 		if (!e.target) return;

// 		const listItem = e.target;
// 		if (!listItem.textContent) return;

// 		const id = listItem.textContent.split('.')[0];
// 		fetchPokeData(id);
// 	};

// 	// adding event listeners
// 	leftButton.addEventListener('click', handleLeftButtonClick);
// 	rightButton.addEventListener('click', handleRightButtonClick);
// 	for (const pokeListItem of pokeListItems) {
// 		pokeListItem.addEventListener('click', handleListItemClick);
// 	}

// 	console.log('event listeners running');
// }

// const localVariable = console.log(document.querySelector('.main-screen'));
// export const exportVariable = localVariable;
