// Select color input
// Select size input
var rows, cols, color;
$(document).ready(function(){
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function makeGrid(grid) {
   
   rows = $('#inputHeight').val();
   cols = $('#inputWeight').val();
  // Your code goes here!
for (var i = 1; i <= rows; i++) {      
  $("table").append('<tr></tr>');

     for (var j = 1; j <=cols; j++) {
        $('tr:last').append('<td></td>');
       $('td').attr("class", 'cells');
       }
   }
  grid.preventDefault();
   // add colors to the cells
   $('.cells').click(function (event){
       color = $('#colorPicker').val();
      $(event.target).css('background-color', color)
   });
});
});
