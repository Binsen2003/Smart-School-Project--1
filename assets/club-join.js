const scriptURL = 'https://script.google.com/macros/s/AKfycbw7SCbBuvZPqhF8iPFnsHw6GlylaOrIp3lZJuPRuMFXdqRoG7rn28aIq51UOiKCTC6MGQ/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("You are successfull submited form..! We Will Contact You Soon..."))
                .catch(error => console.error('Error!', error.message))
            })

