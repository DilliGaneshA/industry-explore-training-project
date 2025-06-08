$(document).ready(function() {
    // The entire code inside this block will execute when the DOM is fully loaded.
    // Event listener for when the element with id "clk" is clicked
    $('#clk').click(function() {
        // Anonymous function that will execute when the element is clicked
       // alert('hello guyz'); // This will show an alert box when the element is clicked
    //$('.dbox').hide();
    $('.dbox').fadeToggle(3000);
    
    
    });

    // Event listener for mouse entering the element with class "dbox"
    $('.dbox').mouseenter(function() {
        // When the mouse enters the element, its background color will change to red
        $(this).css({'background-color': 'red'}); // Note the correction: 'backgroundcolor' should be 'background-color'
    });

    // Event listener for mouse leaving the element with class "dbox"
    $('.dbox').mouseleave(function() {
        // When the mouse leaves the element, its background color will change to green
        $(this).css({'background-color': 'green'}); // Same correction here: 'backgroundcolor' to 'background-color'
    });
    $('#name').blur(function(){
        var userInput=$(this).val();
        if (userInput.length < 4){  
          // alert('minimum 4 letters');
          $('.error').show();
           }

    });



});
