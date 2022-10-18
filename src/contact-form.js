document.addEventListener("DOMContentLoaded", function(){

    let formBtn = document.getElementById('submit-form')
    formBtn = formBtn.addEventListener('click', sendMail())

    function sendMail(){
        Email.send({
            Host : "smtp.gmail.com",
            Username : "doyouhavehotsauce@gmail.com",
            Password : "stronGMan15",
            To : 'doyouhavehotsauce@gmail.com',
            From : "crozierr2@gmail.com.com",
            Subject : "Initial email test",
            Body : "And this is the body. Have a nice day!"
        }).then(
          message => alert(message)
        );
    }

    
    
    
    
    
    
    
    }); //close dom listner