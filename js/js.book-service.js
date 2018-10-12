'use strict'

var gBooks = [{
    imglocation: 'img/tali.jpg',
    id: 1,
    name: 'אני וטלי בארץ הלמה',
    price: '65',
    author: 'אברהם שלונסקי',
    rating: 0
},
{
    imglocation: 'img/hundred.jpg',
    id: 2,
    name: 'מאה שנים של בדידות',
    price: '98',
    author: 'גבריאל גרסיה מארקס',
    rating: 0
},
{
    imglocation: 'http://www.booknet.co.il/imgs/site/prod/2000529345b.jpg',
    id: 3,
    name: 'טירת הזכוכית',
    price: '72',
    author: 'גאנט וולס',
    rating: 0
},
{
    imglocation: 'https://images-eu.ssl-images-amazon.com/images/I/519sxUosPtL._AC_US500_QL65_.jpg',
    id: 4,
    name: 'Atlas Shrugged',
    price: '102',
    author: 'Ayn Rand',
    rating: 0
},
{
    imglocation: 'https://images-eu.ssl-images-amazon.com/images/I/51zuRdRQM0L._AC_US500_FMwebp_QL65_.jpg',
    id: 5,
    name: 'The Little Prince',
price: '87',
    author: 'Antoine De Saint-Exupery',
    rating: 0
},
{
    imglocation: 'https://images-na.ssl-images-amazon.com/images/I/41Af8ftWGzL._SX331_BO1,204,203,200_.jpg',
    id: 6,
    name: 'The Picture of Dorian Gray',
    price: '58',
    author: 'Oscar Wilde',
    rating: 0
}

]

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
        <td> <img src="${book.imglocation}" alt="Book cover" class="img-responsive tableimg align-self-center"> </td>
      <th scope="row">${book.id}'</th>
      <td>'${book.name}'</td>
      <td>'${book.price}'₪ </td>
      <td class="flex-row">
      <button type="button" class="btn btn-primary" id="read-book" data-toggle="modal" data-target="#exampleModal" onclick="renderModal(${book.id})">
      Read
    </button>
      <button class="btn btn-warning" id="update-book" onclick="readAndUpdateBook(${book.id})"> Update </button>
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
    var idx = getBookIdxByID(bookId);
    gBooks[idx].price = newprice;
    renderBooks();
}

function getBookIdxByID(bookId) {
    var bookIdx = gBooks.findIndex(function (book) {
        return book.id === bookId
    })
    return bookIdx
}


/* TODO: make jumbotron slimmer.
make add book transition softly
add paging
give add book content validation
save rating to local storage?
*/