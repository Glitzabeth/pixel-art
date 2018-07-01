var height, width, color;


$('#sizePicker').submit(function (event) {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
    $('#pixelCanvas').empty()
    makeGrid(height, width);
})

function makeGrid(x, y) {

 // Your code goes here!
 for (var i = 1; i <= x; i++) {
     $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
     for (var j = 1; j <=y; j++) {
         $('#table' + i).append('<td></td>');
       }
   }
   // add colors to the cells
   $('td').click(function addColor(){
       color = $('#colorPicker').val();

       if ($(this).attr('style')) {
           $(this).removeAttr('style')
       } else {
           $(this).attr('style', 'background-color:' + color);
       }
   })

}
