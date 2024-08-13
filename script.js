// Displays welcoming message with name & alerts if there's no name.
document.getElementById('submit-first-name').addEventListener('click', function(){
    const firstName = document.getElementById('first-name').value; 
    if(firstName) { 
        document.getElementById('display-name').textContent = firstName; 
        document.getElementById('hidden-component').style.display = 'block'; 
    } else {
        alert("Please enter your name."); 
    }
});

// Adds a new book to the table when the user submits the book form
document.getElementById('submit-book').addEventListener('click', function(event) {
    event.preventDefault(); 

    // Book object to store form data
    const book = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        pages: document.getElementById('page-count').value,
        summary: document.getElementById('book-summary').value
    };

    // All fields must be filled out
    if (book.title === "" || book.author === "" || book.pages === "" || book.summary === "") {
        alert("Please fill out all fields.");
        return;
    }

    // Creates a new table row and cells for data
    const newRow = document.createElement('tr');
    const titleCell = document.createElement('td');
    const authorCell = document.createElement('td');
    const pagesCell = document.createElement('td');
    const summaryCell = document.createElement('td');

    // Sets the text content of the cells using the book object & key value pairs
    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;
    summaryCell.textContent = book.summary;

    // Add the cells to the row
    newRow.appendChild(titleCell);
    newRow.appendChild(authorCell);
    newRow.appendChild(pagesCell);
    newRow.appendChild(summaryCell);

    // Append the new row to the table
    const table = document.querySelector('#book-storage table');
    table.appendChild(newRow);

    // Update book stats
    updateBookStats(book.pages);

    // Clear the form fields
    document.getElementById('book').reset();
});

// Updates book stats on screen
function updateBookStats(pages) {
    const totalBooksElement = document.getElementById('total-books');
    const totalPagesElement = document.getElementById('total-pages');

    const currentBookCount = parseInt(totalBooksElement.textContent) || 0;
    const currentPageCount = parseInt(totalPagesElement.textContent) || 0;

    totalBooksElement.textContent = currentBookCount + 1;
    totalPagesElement.textContent = currentPageCount + parseInt(pages);
}
