
async function getBooks(a) {
    console.log(a);
    const response = await fetch('https://www.anapioficeandfire.com/api/books/?page='+a+'&pageSize=50');
    try {
        const books = await response.json();
    let i = 0;
    const table = document.getElementById('book-table');
    books.forEach(book => {
      const row = table.insertRow();
      const idCell = row.insertCell();
      const nameCell = row.insertCell();
      const authorCell = row.insertCell();
      const publisherCell = row.insertCell();
      const numberOfPagesCell = row.insertCell();
      const isbnCell = row.insertCell();
      const releasedDate = row.insertCell();
      idCell.innerHTML = ++i;
      nameCell.innerHTML = book.name;
      authorCell.innerHTML = book.authors;
      publisherCell.innerHTML = book.publisher;
      numberOfPagesCell.innerHTML= book.numberOfPages;
      isbnCell.innerHTML = book.isbn;
      releasedDate.innerHTML = book.released;
      
    });
    } catch (error) {
        console.log(error)
    }
    
  }
  getBooks();
  
  function searchTable() {
    // Get the search input
    var input = document.getElementById("txt").value;
    
    // Get all the rows in the table
    var rows = document.getElementsByTagName("tr","th");
    
    // Loop through all the rows
    for (var i = 0; i < rows.length; i++) {
      // Get the cells in the current row
      var cells = rows[i].getElementsByTagName("td");
      
      // Set the row to be hidden by default
      rows[i].style.display = "none";
      
      // Loop through all the cells in the current row
      for (var j = 0; j < cells.length; j++) {
        // If the search input is found in any of the cells, show the row
        if (cells[j].innerHTML.toLowerCase().indexOf(input.toLowerCase()) > -1) {
          rows[i].style.display = "";
          break;
        }
      }
    }
  }
  