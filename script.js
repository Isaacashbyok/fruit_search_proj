const input       = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = fruit.filter(value => value.toLowerCase().includes(str.toLowerCase()))
	if (!str) {
		results = [];
	}
	return results;
	//searches through the fruit array
}

function searchHandler(e) {
	suggestions.innerHTML = "";
	let results               = search(e.target.value);
	showSuggestions(results,e.target.value.toLowerCase());
	//shows suggestions upon typing 
}

function showSuggestions(results, inputVal) {
	for (let i = 0; i < results.length; i++) {
		let listVal = document.createElement('LI');
		let boldVal = results[i].toLowerCase().replaceAll(inputVal,'<b>' + inputVal + '<b>');
		if (boldVal[0] === '<') {
			boldVal = boldVal.slice(0,3) + boldVal.charAt(3).toUpperCase() + boldVal.slice(4);
		}
		else {
			boldVal = boldVal.charAt(0).toUpperCase() + boldVal.slice(1);
		}
		listVal.innerHTML = boldVal;
		suggestions.append(listVal);
	}
	//appends matching results to the dropdown menu
}

function useSuggestion(e) {
	input.value = e.target.innerText;
	suggestions.innerHTML = '';
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);