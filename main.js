//Create array to store book object
let myLibrary = []

//Instantiate variables
const container = document.getElementById("Wrapper")
let arrayLength = myLibrary.length;
let author;
let title;
let pages;
let read;
//Get user input and send data to Book function to create book object
function getInput(){
    
    title = prompt("What is the name of the book?", "The Hobbit")
    author = prompt("What is the author's name?")
    pages = prompt("How many pages are there?")
    read = prompt("Have you read the book?")
    
    myLibrary.push(new Book(title, author, pages, read))
    displayLibrary()
    

}
//Create object
function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function displayLibrary(){
        //Create container for object information and allows for smepmmcmcmcmcic styling
        const card = document.createElement("div");
        //Instantitate Object properties and info
        const title1 = document.createElement("p")
        const author1 = document.createElement("P")
        const pages1 = document.createElement("p")
        const read1 = document.createElement("p")
        const delete_button = document.createElement("button")
        const change_read = document.createElement("button")

        //Add properties and info
        const title1_text = document.createTextNode("Title: " + title)
        const author1_text = document.createTextNode("Author: " + author)
        const pages1_text = document.createTextNode("Pages: " + pages)
        const read1_text = document.createTextNode("Read: " + read)
        delete_button.setAttribute('class', "delete_button")
        delete_button.addEventListener("click", function(){
            container.removeChild(card)
        })
        const button_text = document.createTextNode("Delete Book")
        change_read.setAttribute('class', 'delete_button')
        change_read.addEventListener('click', function(){
            Book.read = prompt("Have you finished reading it yet?")
        })
        change_text = document.createTextNode("Change Read Status")

        //Append text to elements
        title1.appendChild(title1_text)
        author1.appendChild(author1_text)
        pages1.appendChild(pages1_text)
        read1.appendChild(read1_text)
        delete_button.appendChild(button_text)
        change_read.appendChild(change_text)

        //Append containers to actual container or more professionally main container
        card.appendChild(title1)
        card.appendChild(author1)
        card.appendChild(pages1)
        card.appendChild(read1)
        card.append(delete_button)
        card.append(change_read)

        

        container.append(card)
}


