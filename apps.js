// jQuery fuction ready to call
$(document).ready(function(){

    //  parses a string and returns an integer # for 'H'
    console.log(parseInt(moment().format('H')))

    // Created variable global space/saved using const display military hour without minutes
    const currentTime = moment().format('Do YYYY MMMM');
    
    // The submit event is sent to the element "form" when the user is attempting to submit a form
    $('form').on('submit', function (e) {  
        e.preventDefault()

        // target specified element "input" & returns the value of a specified attribute id "9am-17pm" on the element
        const time = e.target.querySelector("input").getAttribute("id")

        // used to get the values of form elements
        const text = e.target.querySelector("input").value

        // setItem localStorage stored within dev tools application time&text
        window.localStorage.setItem(time, text)
    })
    


});



