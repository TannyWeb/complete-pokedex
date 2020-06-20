const mainScreen = document.querySelector('.main-screen');
const pokeName = document.querySelector('.poke-name');
const pokeId = document.querySelector('.poke-id');
const pokeFrontImage = document.querySelector('.poke-front-image');
const pokeBackImage = document.querySelector('.poke-back-image');
const pokeTypeOne = document.querySelector('.poke-type-one');
const pokeTypeTwo = document.querySelector('.poke-type-two');
const pokeWeight = document.querySelector('.poke-weight');
const pokeHeight = document.querySelector('.poke-height');
const pokeListItems = document.querySelectorAll('.list-item');
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');

// constants and variables
const TYPES = [
	'normal',
	'fighting',
	'flying',
	'poison',
	'ground',
	'rock',
	'bug',
	'ghost',
	'steel',
	'fire',
	'water',
	'grass',
	'electric',
	'psychic',
	'ice',
	'dragon',
	'dark',
	'fairy'
];
let prevUrl = null;
let nextUrl = null;

console.log('lololol');

export {
	mainScreen,
	pokeName,
	pokeId,
	pokeFrontImage,
	pokeBackImage,
	pokeTypeOne,
	pokeTypeTwo,
	pokeWeight,
	pokeHeight,
	pokeListItems,
	leftButton,
	rightButton,
	TYPES,
	prevUrl,
	nextUrl
};
