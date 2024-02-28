//Declare a library array
let library = [];


//This function describes books add to the library array.
function addBook(title, author){
    //push objects to the array
    library.push({ Title:title, Author:author, Readstatus:false });
    console.log(library);
}

//This function describes, The book is read.
function markAsread(title) {
    //Getting index of exact matching item
    const index = library.findIndex(data => data.Title === title);
    console.log(index);
    //Set true value to the read status
    library[index].Readstatus = true;
    console.log(library);
}

//This function describes remove of the books
function removeBook(title){
    //Getting index of exact matching item
    const index = library.findIndex(data => data.Title === title);
    console.log(index);
    //Remove one item from starting index value.
    library.splice(index,1);
    console.log(library);
}






//Call addBook Function
addBook("Mr Loard","James");
markAsread("Mr Loard");
removeBook("Mr Loard");
console.log(library);