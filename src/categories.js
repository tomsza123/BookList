const saveToLocalStorage = require("./saveToLocalStorage");
let select = document.querySelector("#category-select");

let template = ["criminal","sci-fi","fantasy","poetry","drama","science"];
if(localStorage.getItem("categories") == null){
    let categories = localStorage.setItem("categories", JSON.stringify(template));
}

const showCategories = () =>{    
    let label = document.createElement("option")
    label.value = "";
    label.disabled = true;
    label.selected = true;
    label.hidden = true;
    label.innerHTML = "---Choose category----";
    select.appendChild(label);

    JSON.parse(localStorage.getItem("categories")).forEach((category) => {
        let option = document.createElement("option");
        option.value = category;
        option.innerHTML = category;
        select.appendChild(option);
    }); 
}
//change getelements to queryselectors
const addCategory = (category) =>{    
    //repair add category form after press enter
    document.querySelector("#addCategory").addEventListener("click",() => {
        let categoryName = prompt("Please enter new category","");
        //validation
        let exists = {};
        if(categoryName != null){
            try{//check if category exists. if not, then add
                JSON.parse(localStorage.getItem("categories")).forEach(element => {
                    if(categoryName === element){
                        alert("This category already exists");
                        throw exists;
                    }
                })
                saveToLocalStorage(categoryName,"categories");
                document.querySelectorAll("option").forEach((option,index) => select.remove(option))
                showCategories();
            } catch (e) {if(e !== exists) throw e;}       
        }
    })
}
module.exports = {
    showCategories,
    addCategory
};