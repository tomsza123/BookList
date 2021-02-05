//const { forEach } = require("lodash");
let {bookTable} = require('./showBooks.js');

function getData(){
    let title = document.querySelector('input[name="title"]').value;
    let author = document.querySelector('input[name="author"]').value;
    let category = document.getElementById('category-select').value;
    let priorityTable = document.getElementsByName('rating');
    let priority = "";

    priorityTable.forEach((value) => {
        if (value.type=="radio"){
            if(value.checked)priority = value.value;
        }
    })

    if (title == ''){
        console.log("brak tytułu");
    }
    else if (author == ''){
        console.log("brak autora");
    }
    else if (category == ''){
        console.log("brak kategorii");
    }
    else if (priority == ''){
        console.log("brak priorytetu");
    }
    else {
        //return [title, author, category, priority];
        bookTable.push([title, author, category, priority])
        //better to implement association array
    }
};
//show modal if some position is empty

module.exports = getData;

