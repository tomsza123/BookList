import './style.scss';
import Icon from './icon.png';
//scripts
let getData = require('./scripts/getData');
let showBooks = require('./scripts/showBooks');

//let bookTable = [];

document.getElementById("addBook").addEventListener("click", () => {
    (getData() != undefined) ? getData()/* showBooks.bookTable.push(getData()) */ : false;
    //console.log(bookTable);
});
document.getElementById("showBooks").addEventListener("click", showBooks.showBooks)

document.getElementById("close").addEventListener("click", () => document.getElementsByClassName("addBook")[0].style.display = "none");
document.getElementById("addBooks").addEventListener("click", () => document.getElementsByClassName("addBook")[0].style.display = "");

