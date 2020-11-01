// jQuery fuction ready to call
$(document).ready(function(){

    //  parses a string and returns an integer # for 'H'
    console.log(parseInt(moment().format('H')))

    // Created variable global space/saved using const display military hour without minutes
    const currentTime = moment().format('MMMM, Do, YYYY');
    // call currentTime to be displayed
    $('#currentTime').text(currentTime);
    // attr set to return span attribute used style to target width 
    $('span').attr('style', 'width: 65px');
    // target button color blue
    $('button').attr('style', 'background-color: blue',);

    // create an array to keep track of time
    const times = [9,10,11,12,13,14,15,16,17]
    // create a for loop using forEach method arrow function
    times.forEach(time => {
        // window.localStorage.setItem(time, '')
    const timeCheck = window.localStorage.getItem(times)
    // console.log(timeCheck)
        const currentHour = moment().hour()
        console.log(currentHour)
// current time confirmed

    if(timeCheck === null) {
window.localStorage.setItem(time, "")
    } else if( timeCheck.length > 0) {
        // dynamic back tic's given value
        $(`#${time}`).attr('value', window.localStorage.getItem(time))
    }

})

}) 
    
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
    






