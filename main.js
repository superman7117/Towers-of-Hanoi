'use strict';

function winning(){
  if($('#tower3').children().length === 4) {
    $("#tower2").text('YOU WIN');
  }
}
$('.block').on('click', blockSelect);
// $('.tower').on('click', gameCtrl)


// function gameCtrl(event){
//   if(selectBo){
//     blockPut(event)
//   } else if (!selectBo){
//     blockSelect(event)
//   }
// }

var $theTower;
var theBlock;
var selectBo = false;

function blockSelect(e) {
  theBlock = $(this);
  e.stopPropagation();
  console.log("The BLOCK!", e)
  if (selectBo === false && $(this).is(":first-child")){
    $(this).css('background-color', 'pink');
    selectBo = true;
    $('.towerChooser').on('click', blockPut);
  }
  else{
    $(this).css('background-color', 'yellow');
    selectBo = false;
    return;
  }
}
function blockPut(e) {
  $theTower = $(this).parent()

  console.log(e)
  console.log($(this))
  //
  console.log("what is this: ",parseInt($(this).parent().children().first().attr('data')))
  if(selectBo === true && parseInt($('.block').attr('data'))< parseInt($(this).parent().children().first().attr('data'))){
    $(theBlock).css('background-color', 'yellow');
    $(theBlock).remove();
    $theTower.prepend(theBlock);
    selectBo = false;
    theBlock;
    return;
  }
  winning();
}
