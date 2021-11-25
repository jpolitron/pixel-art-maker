//used ofr cleaner code
//"use strict";
//grid info
let $pixelCanvas = $('#pixelCanvas');
let $inputHeight = $('#inputHeight');
let $inputWidth = $('#inputWidth');
let $colorPicker = $('#colorPicker');
//https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
$('#sizePicker').submit(event => {
    event.preventDefault();

    let width = $inputWidth.val();
    let height = $inputHeight.val();
    //grid clear
    $pixelCanvas.html('');
    //call make gird function
    makeGrid(height, width);
    addCellClickListener('submit');
});
//when user enter hight width call gird function
function makeGrid(height, width) {
    for(let i = 0; i < height; i++) {
        $pixelCanvas.append('<tr></tr>');
    };

    for(let i = 0; i < width; i++) {
        $('tr').append('<td></td>');
    };
};

function addCellClickListener() {
    $('td').click( event => {
        let color = $colorPicker.val();
        $(event.currentTarget).css("background-color", color)
    });
};
