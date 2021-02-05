let bookTable = [];

let showBooks = () => {    
    if(document.getElementsByClassName("addBook")[0].style.display === "none") {
        (document.getElementsByClassName("showBooks")[0].style.display = "");
        
        console.log(JSON.parse(localStorage.getItem("bookTable")));

    }else console.log("jest juz dodawanie");
}

document.getElementById("showBooks").addEventListener("click", showBooks)
document.getElementsByClassName("close")[1].addEventListener("click", () => document.getElementsByClassName("showBooks")[0].style.display = "none");

module.exports = bookTable;