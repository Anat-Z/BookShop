'use strict'

var gBooks = [{
    imglocation: 'img/tali.jpg',
    id: 1,
    name: 'אני וטלי בארץ הלמה',
    price: '65'
},
{
    imglocation: 'img/hundred.jpg',
    id: 2,
    name: 'מאה שנים של בדידות',
    price: '98'
},
{
    imglocation: 'img/tirat.jpg',
    id: 3,
    name: 'טירת הזכוכית',
    price: '72'
}]

$(document).ready(renderBooks())


function renderBooks() {

    var strHtml = ` <table class="table table-hover">
    <thead class="thead-dark">
      <tr>
          <th scope="col"></th>
        <th scope="col">ID</th>
        <th scope="col">Book</th>
        <th scope="col">Price</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>`

    gBooks.forEach(function (book) {
        strHtml += `<tr>
        <td> <img src="${book.imglocation}" alt="Book cover" class="img-fluid"> </td>
      <th scope="row">${book.id}'</th>
      <td>'${book.name}'</td>
      <td>'${book.price}'₪ </td>
      <td class="flex-row">
      <button type="button" class="btn btn-primary" id="read-book" data-toggle="modal" data-target="#exampleModal" onclick="renderModal(${book.id})">
      Read
    </button>
      <button class="btn btn-warning" id="update-book" onclick="readAndUpdateBook (${book.id})"> Update </button>
      <button onclick="deleteBook(${book.id})" class="btn btn-danger" id="delete-book"> Delete </button>
      </td>
    </tr>` ;
    })

    strHtml += ` </tbody>
    </table>`

    $('.book-shelf').html(strHtml);
}

function deleteBook(bookId) {
    console.log(bookId)
    var booktoDelete = getBookIdxByID(bookId)
    gBooks.splice(booktoDelete, 1)
    renderBooks();
}


function readAndAddNewBook() {
    var newBook = readNewBook();
    console.log(newBook)
    gBooks.push(newBook);
    renderBooks();
    $('.add-new-book').hide()
}

function readNewBook() {
    return {
        imglocation: $('#img').val(),
        id: 4,
        name: $('#bookname').val(),
        price: $('#price').val()

    }
}

function readAndUpdateBook(bookId) {
    
    var newprice = prompt('What is the updated price for this book?');
     var idx = getBookIdxByID (bookId);
    gBooks[idx].price = newprice;
    renderBooks();
}

function getBookIdxByID(bookId) {
    var bookIdx = gBooks.findIndex(function (book) {
        return book.id === bookId
    })
    return bookIdx
}

function renderModal (bookId) {

   var idx = getBookIdxByID (bookId); 
console.log (idx)

    var strHtml = `     
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">עוד פרטים על "${gBooks[idx].name}"</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <img src="${gBooks[idx].imglocation}" alt="Book cover" class="img-fluid">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      `;
      
   $('.bookModal').html(strHtml);

   var bookm = $('.bookModal')
   console.log (bookm)
}