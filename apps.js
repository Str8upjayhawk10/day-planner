// jQuery fuction ready to call
$(document).ready(function(){
    console.log(parseInt(moment().format('H')))

    // Created variable global space/saved using const display military hour without minutes
    const currentTime = moment().format('Do YYYY MMMM');
    
    // The submit event is sent to the element "form" when the user is attempting to submit a form
    $('form').on('submit', function (e) {  
        e.preventDefault()
        console.log(e.target)
    })
    


});



