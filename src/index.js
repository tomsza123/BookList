import './styles/style.scss';
import Icon from './icon.png';
//scripts
const saveToLocalStorage = require('./scripts/saveToLocalStorage.js');
const getData = require('./scripts/getData.js');
const showBooks = require('./scripts/showBooks.js');
const categories = require('./scripts/categories.js');

document.getElementsByClassName("opacity")[0].style.display = 'none';
showBooks.generateTable();

