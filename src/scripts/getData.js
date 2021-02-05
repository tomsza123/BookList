const { showCategories } = require("./categories");
showCategories();

function saveToLocalStorage(data){//pushing book to table
    let existing = [];
    existing = JSON.parse(localStorage.getItem("bookTable")) || [] ;
    existing.unshift(data);
    localStorage.setItem("bookTable", JSON.stringify(existing));
};

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
    return {title, author, category, priority};
};
//adding to localstore
document.getElementById("addBook").addEventListener("click", () => {
    let values = getData();
    //simple validaiton
    if (values.title == ''){
        modal("enter the title");
    }
    else if (values.author == ''){
        modal("enter the author");
    }
    else if (values.category == ''){
        modal("choose category");
    }
    else if (values.priority == ''){
        modal("choose priority");
    }
    else{
        saveToLocalStorage({
            title: values.title,
            author: values.author,
            category: values.category,
            priority: values.priority,
            dateAdded: `${new Date().toISOString().slice(0, 10)} ${new Date().toString().slice(13,24)}`    
        });
    }        
});    

function modal(warning) {
    //show modal if some position is empty
    console.log(warning);
}

document.getElementById("addBooks").addEventListener("click", () => {
    if(document.getElementsByClassName("showBooks")[0].style.display === ""){
        console.log("close show books window");
    }
    else{
        //show form
        document.getElementsByClassName("addBook")[0].style.display = ""; 
        getData();       
    }
});
//closing window
document.getElementsByClassName("close")[0].addEventListener("click", () => document.getElementsByClassName("addBook")[0].style.display = "none");

module.exports = getData;