/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function() {
    $('#oneButton').bind('click', keyisClicked);
    $('#logo').bind('mouseover', mouseOverMe);
    $('p:last').css("background-color", "purple").css("color", "white");
});

$("document").ready(function() {

$('deleteSpan').bind('click', deleteSpan)
 
     $('randPara').before('<span>Before Paragraph</span');
     $('<span> Insert Before Paragraph</span>').insertBefore('randPara');
     $('<span> Prepend to Paragraph</span>').prependTo('randPara');
     $('<span> Append to Paragraph</span>')/appendTo('randPara');
     $('#randPara').append('<span> Append Paragraph</span');
     $('<span> Insert After Paragraph</span>').insertAfter('#randPara');
});

function keyisClicked() {
    alert("There was a button clicked");
}

function mouseOverMe()
{
    console.log("mouseover");
    $("#second").html("You put my cursor on my logo");
}

function mouseOutMe()
{
    $("#second").html("You took my cursor off my logo");
}

    
