const scriptURL = 'https://script.google.com/macros/s/AKfycbx6r8dW1JZg0EvW8FuxWYcSEAP6sOpbvkqE2oE2PYViQ49DVLcAZJoEBkv9poq3P85faw/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Your documents have been successfully submitted! We will contact you soon."))
                .catch(error => console.error('Error!', error.message))
            })

