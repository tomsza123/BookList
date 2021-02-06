const saveToLocalStorage = (data,place) => {//pushing e.g book to table
    let existing = [];
    existing = JSON.parse(localStorage.getItem(place)) || [] ;
    existing.unshift(data);
    localStorage.setItem(place, JSON.stringify(existing));
};

module.exports = saveToLocalStorage;