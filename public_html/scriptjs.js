/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function() {
    
    $('#oneButton').bind('click', keyisClicked);
    
    $('#logo').bind('mouseover', mouseOverMe);
    
    $('p:last').css("background-color", "purple").css("color", "white");
    
    $('#replaceWText').bind('click', replaceWText);
    
    $('#randPara').bind('click', addAPara);
    
    $('#removePara').bind('click', removeAPara);
    
    $('#show').css('visibility', 'hidden');
    
    $('#hide').bind('click', hideThePage);
    
    $('#show').bind('click', showThePage);
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

function hideThePage(){
    $('#show').css('visibility', 'visible');
    $('div').hide('slide', {}, 2500);
    $('#show').show('fold', {}, 2500);
}

function showThePage(){
    $('div').show('fold', {}, 2500);
    $('#show').hide('puff', {}, 2500);
}

function removeAPara(){
    $('#randPara p:last').remove();
}

function addAPara(){
    $('#randPara').append('<p>ADDED</p>');

}

function replaceWText(){
    $('#randPara').html('<h1>Dany loves Twilight</h1>')
}

    
