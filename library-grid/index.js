
// Variable assignment of HTML elements

let bookGrid = document.querySelector(".book-grid");
let newBookBtn = document.querySelector(".new-book-btn");

let bookModal = document.querySelector(".book-modal");
let bookForm = document.querySelector(".book-form")
let titleEl = document.querySelector("#title");
let authorEl = document.querySelector("#author");
let pagesEl = document.querySelector("#pages");
let readEl = document.querySelector("#read");
let cancelBtn = document.querySelector(".cancel-btn");
let submitBtn = document.querySelector(".submit-btn");

// Button event listeners

newBookBtn.addEventListener("click", () => {
    bookModal.show();
});

function closeAndResetModal() {
    bookModal.close();
    bookModal.close();
    titleEl.value = ""
    authorEl.value = ""
    pagesEl.value = ""
    readEl.checked = false;
}

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    if (bookForm.checkValidity()) {
        addBookToLibrary(titleEl.value, authorEl.value, pagesEl.value, readEl.checked);
        console.log(myLibrary);
        displayAllBooks();
        closeAndResetModal();
    }
});

cancelBtn.addEventListener("click", () => {
    closeAndResetModal();
});

// Library functions

const myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this._title = title;
        this._author = author;
        this._pages = pages;
        read ? this._read = "Read" : this._read = "Not Read"
    }

    get title() {
        return this._title;
    }

    set title(newTitle) {
        this._title = newTitle;
    }

    get author() {
        return this._author;
    }

    set author(newAuthor) {
        this._author = newAuthor;
    }

    get pages() {
        return this._pages;
    }

    set pages(newPages) {
        this._pages = newPages
    }

    get read() {
        return this._read;
    }

    set read(readStatus) {
        this._read = readStatus
    }

}

// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = `by ${author}`;
//     this.pages = `${pages} pages`;

//     if (read) {
//         this.read = "Read";
//     } else {
//         this.read = "Not Read";
//     }
// }

function addBookToLibrary(title, author, pages,read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function displayAllBooks() {

    bookGrid.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++) {

        let card = document.createElement("div");
        card.classList.add("card");

        card.setAttribute("bookNum", i);

        let title = document.createElement("h4");
        title.textContent = myLibrary[i].title;

        let author = document.createElement("p");
        author.textContent = myLibrary[i].author;

        let pages = document.createElement("p");
        pages.textContent = myLibrary[i].pages;

        let read = document.createElement("p");
        read.textContent = myLibrary[i].read;

        let buttonDiv = document.createElement("div");
        buttonDiv.classList.add("button-div")

        let readButton = document.createElement("button");
        readButton.textContent = "Toggle Read";
        readButton.classList.add("toggle-btn", "edit-btn");

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete Book";
        deleteButton.classList.add("delete-btn", "edit-btn");

        readButton.addEventListener("click", () => {
            myLibrary[i].read == "Read" ? myLibrary[i].read = "Not Read" : myLibrary[i].read = "Read";
            displayAllBooks();
        })

        deleteButton.addEventListener("click", () => {
            myLibrary.splice(i, 1);
            card.remove();
            displayAllBooks();
        })

        buttonDiv.appendChild(readButton);
        buttonDiv.appendChild(deleteButton);

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
        card.appendChild(buttonDiv);

        bookGrid.appendChild(card);

    }
}

// Default data for display purposes

addBookToLibrary("Hitchhiker's Guide to the Galaxy", "Douglas Adams", 224, true);
addBookToLibrary("Restaurant at the End of the Universe", "Douglas Adams", 208, false);
addBookToLibrary("Life, the Universe and Everything", "Douglas Adams", 240, false);
addBookToLibrary("Hitchhiker's Guide to the Galaxy", "Douglas Adams", 224, true);
addBookToLibrary("Restaurant at the End of the Universe", "Douglas Adams", 208, false);
addBookToLibrary("Life, the Universe and Everything", "Douglas Adams", 240, false);
addBookToLibrary("Hitchhiker's Guide to the Galaxy", "Douglas Adams", 224, true);
addBookToLibrary("Restaurant at the End of the Universe", "Douglas Adams", 208, false);
addBookToLibrary("Life, the Universe and Everything", "Douglas Adams", 240, false);
addBookToLibrary("Hitchhiker's Guide to the Galaxy", "Douglas Adams", 224, true);
addBookToLibrary("Restaurant at the End of the Universe", "Douglas Adams", 208, false);
addBookToLibrary("Life, the Universe and Everything", "Douglas Adams", 240, false);
addBookToLibrary("Hitchhiker's Guide to the Galaxy", "Douglas Adams", 224, true);
addBookToLibrary("Restaurant at the End of the Universe", "Douglas Adams", 208, false);
addBookToLibrary("Life, the Universe and Everything", "Douglas Adams", 240, false);

displayAllBooks();