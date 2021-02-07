const { showCategories, addCategory } = require("./categories");
const saveToLocalStorage = require("./saveToLocalStorage");
const {generateTable} = require("./showBooks")
showCategories();
addCategory();

//prevent from refreshing page after filling form
document.querySelector(".form").addEventListener("submit", (e) => e.preventDefault());

const getData = () =>{
    let title = document.querySelector('input[name="title"]');
    let author = document.querySelector('input[name="author"]');
    let category = document.getElementById('category-select');
    let priorityTable = document.getElementsByName('rating');
    let priority = "";

    priorityTable.forEach((value) => {if(value.type=="radio")if(value.checked)priority = value.value;})
    return {title, author, category, priority, priorityTable};
};
//adding to localstore
document.getElementById("addBook").addEventListener("click", () => {
    let values = getData();
    //simple validaiton
    if (values.title.value == ''){
        warning("Enter the title");
    }
    else if (values.author.value == ''){
        warning("Enter the author");
    }
    else if (values.category.value == ''){
        warning("Choose category");
    }
    else if (values.priority.value == ''){
        warning("Choose priority");
    }
    else{
        let id = 0;
        if (JSON.parse(localStorage.getItem("bookTable")) !== null){
            id = JSON.parse(localStorage.getItem("bookTable")).length
        }
        saveToLocalStorage({
            id: id,
            title: values.title.value,
            author: values.author.value,
            category: values.category.value,
            priority: values.priority,
            dateAdded: `${new Date().toISOString().slice(0, 10)} ${new Date().toString().slice(15,24)}`    
        },"bookTable");
        //clear inputs after adding
        values.title.value = '';
        values.author.value = '';
        values.category.value = '';
        values.priorityTable[4].checked = true;
        warning("The book has been added.")
        generateTable();
    }
});

const warning = (warning) => {
    let inputs = document.querySelectorAll('form > input, form > select');
    let header = document.querySelector(".window h1");
    const action = (selected) =>{
        selected.style.borderBottom = `solid 2px #e53935`;
        
        
        let warn = document.createElement("h2");
        warn.innerHTML = warning;
        header.appendChild(warn)

        selected.addEventListener("click", () => {
            selected.style = "";
            header.removeChild(warn);
        });

    }
    switch (warning){
        case 'Enter the title':
            action(inputs[0]);
            break;
        case 'Enter the author':
            action(inputs[1]);
            break;
        case 'Choose category':
            action(inputs[2]);
            break;  
        case 'The book has been added.':
            let confirm = document.createElement("h2");
            confirm.style.backgroundColor = "#6200EE";
            confirm.innerHTML = warning;
            header.appendChild(confirm);
            setTimeout(() => {header.removeChild(confirm)},1200);
            break;
    }
}

document.getElementById("addBooks").addEventListener("click", () => {
    if(document.getElementsByClassName("showBooks")[0].style.display === ""){
        console.log("close show books window");
    }
    else{
        //show form
        document.getElementsByClassName("addBook")[0].style.display = "";
        document.getElementsByClassName("opacity")[0].style.display = "";
        getData();       
    }
});
//closing window
document.getElementsByClassName("close")[0].addEventListener("click", () => {
    document.getElementsByClassName("addBook")[0].style.display = "none";
    document.getElementsByClassName("opacity")[0].style.display = "none";
})


module.exports = getData;