/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function(){
    $('#oneButton').bind('click', keyisClicked);
    $('#logo').bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
});

    function keyisClicked(){
        alert("There was a button clicked");
    }
    
    function mouseOverMe()
    {
        ("#second").html("You put my cursor on my logo");
    }
    
    function mouseOutMe()
    {
        ("#second").html("You put my cursor on my logo");
    }
