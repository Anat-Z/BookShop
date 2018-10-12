'use strict'


function renderModal(bookId) {
    //insert book data to modal and to ratings
    var idx = getBookIdxByID(bookId)
    $('.authordet').html(gBooks[idx].author)
    $('#bookimage').attr('src', `${gBooks[idx].imglocation}`)
    var strHtml = `<button id="minusbtn" class="btn btn-light" onclick="onClickMinus(${bookId})">-</button> <span class="rating"> ${gBooks[idx].rating} </span>
     <button onclick="onClickPlus(${bookId})" id="plusbtn" class="btn btn-light">+</button>`
    $('.ratings-bar').html(strHtml)
}

function onClickAddBook() {
    $('.add-new-book').show()

}

function onClickMinus(bookId) {
    var idx = getBookIdxByID(bookId)
    var prevRating = gBooks[idx].rating
    if (prevRating > 0) {
        gBooks[idx].rating--;
        renderModal(bookId)
    }
    return;
}

function onClickPlus(bookId) {
    var idx = getBookIdxByID(bookId)
    var prevRating = gBooks[idx].rating
    if (prevRating < 10) {
        gBooks[idx].rating++;
        renderModal(bookId)
    }
    return;
}