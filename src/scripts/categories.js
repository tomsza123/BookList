let categories = ["criminal","sci-fi","fantasy","poetry","drama","science"];

function showCategories(){
    let select = document.createElement("select");
    select.id = 'category-select';
    document.getElementsByClassName("categoryList")[0].appendChild(select);
    let option = document.getElementById('category-select').createElement("option");
    //option.value  = '';
    //option.innerHTML = '<option value="" disabled selected hidden>Choose Category...</option>'
    


    
}
//change getelements to queryselectors
function addCategory(category){

}

module.exports = {
    showCategories,
    addCategory
};