/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function() {

    $('#oneButton').bind('click', keyisClicked);
    
    /* Alert on button click */

    $('#logo').bind('mouseover', mouseOverMe);
    
    $('#logo').bind('mouseout', mouseOutMe);
    
    /* Mouseover and mouseout, changes a line when cursor is on and off the logo */

    $('#replaceWText').bind('click', replaceWText);

    $('#randPara').bind('click', addAPara);

    $('#removePara').bind('click', removeAPara);
    
    /* These add text when you click on them */

    $('#show').css('visibility', 'hidden');

    $('#hide').bind('click', hideThePage);

    $('#show').bind('click', showThePage);
    
    /* This hides the page when clicked and when hidden, click the "show the page" button and it will show the page */
    
    $('#superHumans').accordion({header: "h4"});
    
    /* This is an accordion for milestone 6 */
    
    $('#twobutton').bind('click', getDblFromServer);

});

function getDblFromServer() {
        $("span").load("getDouble.php",
                $("#theForm").serializeArray());
    }

    /*
     <?php
     $numberToDbl - $_POST["data];
     echo $_POST["data] . " Times 2 Equals ";
     $doubleUp = $numberToDbl * 2;
     echo $doubleUp;
     ?>
     */

function keyisClicked() {
            alert("There was a button clicked");
}

/* When this button is clicked, a pop will show up saying "There was a button clicked" */
 

function mouseOverMe()
{
    $("#second").html("You put my cursor on my logo");
}

function mouseOutMe()
{
    $("#second").html("You took my cursor off my logo");
}

/* These let the text change when the mouse hovers over and out of the logo */

function hideThePage() {
    $('#show').css('visibility', 'visible');
    $('div').hide('slide', {}, 2500);
    $('#show').show('fold', {}, 2500);
}

/* This will hide the page when clicking the correct button/text. */

function showThePage() {
    $('div').show('fold', {}, 2500);
    $('#show').hide('puff', {}, 2500);
}

/* This will show the page after its hidden from the code above */

function removeAPara() {
    $('#randPara p:last').remove();
}
/* This removes text after it has been added */

function addAPara() {
    $('#randPara').append('<p>ADDED</p>');

}

/* This adds text after the correct button/text has been clicked */

function replaceWText() {
    $('#randPara').html('<h1> Hello </h1>')
}

/* This will replace/change the text once it has been clicked */
