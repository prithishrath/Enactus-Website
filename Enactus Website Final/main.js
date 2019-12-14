console.log('It works')

$(document).ready(function () {
    $('.button1').click(function () {
        console.log('clicked button')

        var name = $('#exampleInputName1').val()
        var email = $('#exampleInputEmail1').val()
        var subject = $('#exampleInputSubject1').val()
        var message = $('#exampleInputMessage1').val()

        var statusElm = $('.status')
        statusElm.empty()

        if(email.length > 5 && email.includes('.') && email.includes('@'))
        {
            
        }
        else{
            event.preventDefault()
            statusElm.append('<div>Email is not valid</div>')
        }

        
        if(name.length >=2)
        {
            
        }
        else{
            event.preventDefault()
            statusElm.append('<div>name is not valid</div>')
        }

        
        if(subject.length >=5)
        {
            
        }
        else{
            event.preventDefault()
            statusElm.append('<div>Subject is not valid</div>')
        }

        
        if(message.length >= 10)
        {
            
        }
        else{
            event.preventDefault()
            statusElm.append('<div>Message is not valid</div>')
        }
    })

})