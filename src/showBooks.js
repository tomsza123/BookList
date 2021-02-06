let bookTable = [];
const saveToLocalStorage = require('./saveToLocalStorage');
const clearTable = () => {
    let table = document.querySelector(".bookTable");
    while(table.hasChildNodes())table.removeChild(table.firstChild);
}
const generateTable = () => {    
    let table = document.querySelector(".bookTable");
    clearTable()//clear table to put updated data
    let books = JSON.parse(localStorage.getItem("bookTable"));
    const showTable = (array) => { 
        let bookCounter = 0;       
        if(array != null){
            array.forEach((element, index) => {
                let row = table.insertRow(index);
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                let cell3 = row.insertCell(2);
                let cell4 = row.insertCell(3);
                let cell5 = row.insertCell(4);
                let cell6 = row.insertCell(5);
    
                cell1.innerHTML = element.title;
                cell2.innerHTML = element.author;
                cell3.innerHTML = element.category;
                cell4.innerHTML = element.priority;
                cell5.innerHTML = element.dateAdded;
                cell6.innerHTML = `<span class="material-icons action edit" value=${element.id}>edit</span>  <span class="material-icons action delete" value=${element.id}>delete_forever</span>`;
                bookCounter++;
            });
            if(bookCounter === 1){
                document.getElementById("counter").innerHTML = `You have added ${bookCounter} book!`
            }
            else{
                document.getElementById("counter").innerHTML = `You have added ${bookCounter} books!`
            }            
        }
    }
    const sortBooks = (order,direction) => { //i know it should get done better :/ 
        //while(table.hasChildNodes())table.removeChild(table.firstChild);
        if (direction === null) direction = 'asc';
        switch(order){
            case 'title':
                if(direction == 'asc'){
                    showTable(books.sort((a, b) => (a.title > b.title) ? 1 : -1))
                }
                else if(direction = 'desc'){
                    showTable(books.sort((a, b) => (a.title < b.title) ? 1 : -1))
                }                
                break;
            case 'author':
                if(direction == 'asc'){
                    showTable(books.sort((a, b) => (a.author > b.author) ? 1 : -1))
                }
                else if(direction = 'desc'){
                    showTable(books.sort((a, b) => (a.author < b.author) ? 1 : -1))
                }   
                break;
            case 'priority':
                if(direction == 'asc'){
                    showTable(books.sort((a, b) => (a.priority > b.priority) ? 1 : -1))
                }
                else if(direction = 'desc'){
                    showTable(books.sort((a, b) => (a.priority < b.priority) ? 1 : -1))
                }                
                break;
            case 'category':
                if(direction == 'asc'){
                    showTable(books.sort((a, b) => (a.category > b.category) ? 1 : -1))
                }
                else if(direction = 'desc'){
                    showTable(books.sort((a, b) => (a.category < b.category) ? 1 : -1))
                }                
                break;
            case 'dateAdded':
                if(direction == 'asc'){
                    showTable(books.sort((a, b) => (a.dateAdded > b.dateAdded) ? 1 : -1))
                }
                else if(direction = 'desc'){
                    showTable(books.sort((a, b) => (a.dateAdded < b.dateAdded) ? 1 : -1))
                }                
                break;
            default:
                showTable(books);
        }        
        let sortArray = document.querySelectorAll('th');
        for(let i=0;i<sortArray.length;i++){
            sortArray[i].addEventListener("click", () => {
                sortBooks(sortArray[i].getAttribute.value);
            })
        }
    }   
    sortBooks();        
}

const showBooks = () => {
    if(document.getElementsByClassName("addBook")[0].style.display === "none"){
        if(JSON.parse(localStorage.getItem("bookTable")) != null){
            (document.getElementsByClassName("showBooks")[0].style.display = "")
            generateTable();
            //delete item from list
            let deleteArray = document.querySelectorAll(".delete");
            for(let i=0;i<deleteArray.length;i++){
                deleteArray[i].addEventListener("click", () => {
                    if(confirm("Do you really want to remove this book?")){
                        const filterArray = JSON.parse(localStorage.getItem("bookTable")).filter((item) => item.id != deleteArray[i].getAttribute('value'))
                        localStorage.setItem("bookTable",JSON.stringify(filterArray));
                        showBooks();
                    }
                });
            }
        }
        else{
            alert("add some books");
        }
    }else{
        console.log("you have opened another window");
    }
}



document.getElementById("showBooks").addEventListener("click", showBooks)
document.getElementsByClassName("close")[1].addEventListener("click", () => document.getElementsByClassName("showBooks")[0].style.display = "none");

module.exports = {
    bookTable,
    generateTable
}