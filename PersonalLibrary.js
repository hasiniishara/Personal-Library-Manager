//Declare a library array
let library = [];


//This function describes books add to the library array.
function addBook(title, author){
    //push objects to the array
    library.push({ Title:title, Author:author, Readstatus:false });
}

//This function describes, The book is read.
function markAsread(title) {
    //Getting index of exact matching item
    for (let i=0; i< library.length; i++){
        if(library[i].Title === title){
            //Set true value to the read status
            library[i].Readstatus = true;
        }
    }
}

//This function describes remove of the books
function removeBook(title){
    //Getting index of exact matching item
    for (let i=0; i< library.length; i++){
        if(library[i].Title === title){
            //Remove one item from starting index value.
            library.splice(i,1);
        }
    }
}

//This function describes List of all unread books.




//Create Book List Object
const bookObj = [
    {Title: "Harry Potter", Author: "J.K Rowling"},
    {Title: "A Village by the Sea", Author: "Anita Desai"},
    {Title: "War and Peace", Author: "Leo Tolstoy"},
    {Title: "The Tempest", Author: "William Shakespeare"}
]

//Call addBook Function -> Have to add data by each row by row.Using forEach
bookObj.forEach(data => addBook(data.Title, data.Author));
console.log(library.length);
markAsread("Harry Potter");
console.log(library);
removeBook("Harry Potter");
console.log(library);
