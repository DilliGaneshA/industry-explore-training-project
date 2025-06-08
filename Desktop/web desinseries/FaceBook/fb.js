$(document).ready(function(){
    $('#signbox').validate({
        rules:{
             fname:{
               required: true,
               minlength: 5, // this tag are using to to enter mim 5 charters
                
             },
         lname:{
            required: true,
                minlength: 5, // this tag are using to to enter mim 5 charters
                
            },
             mobile:{
                required: true,
                minlength: 10,
             },
             password:{
             required: true,
                minlength: 9,
             },
             day:{
                required: true,
             },
        month:{
             required: true,
             },
             year:{
             required: true
            }
            



        },
        messages:{
            fname:{
                required: "pls enter first name",
                minlength: "pls enter below 7 letter"
            }
        }
    })

});