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
function listunread(){
    //Define variable & assign the exact matcing value in to it.
    let unreadArr = library.filter(data => !data.Readstatus);
    console.log(unreadArr);
}

//This function describes, find the books according to the author.
function findBooksByAuthor(author){
    //Define variable & assign the exact matcing value in to it.
    let book1 = library.filter(data => data.Author === author);
    console.log(book1);

}

//This function describes, the book is exist or not in the Library.
function bookExists(title){
    //Define variable & getting boolean value.
    const isBookThere = library.some(data => data.Title === title);
    //Check book is there or not.
    if(isBookThere) {
        console.log("The Book is available in the Library");
    }else{
        console.log("The Book is currently not available in the Library");
    }
}

//Create Book List Object
const bookObj = [
    {Title: "Harry Potter", Author: "J.K Rowling"},
    {Title: "A Village by the Sea", Author: "Anita Desai"},
    {Title: "War and Peace", Author: "Leo Tolstoy"},
    {Title: "The Tempest", Author: "William Shakespeare"}
]

//Call addBook Function -> Have to add data by each row by row.Using forEach
bookObj.forEach(data => addBook(data.Title, data.Author));
markAsread("Harry Potter");
removeBook("Harry Potter");
listunread();
findBooksByAuthor("William Shakespeare");
bookExists("War and Peace");

