const scriptURL = 'https://script.google.com/macros/s/AKfycbyPv8yimgjiQl1j3ngd9Yvlrt8vb1PtQQS_wGrGErcR52lpFPrIV-2sqwgdcnNph6-n/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
                .catch(error => console.error('Error!', error.message))
            })

