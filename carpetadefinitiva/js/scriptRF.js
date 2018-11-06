$('#addBtn').click(function (evnt) {
    evnt.preventDefault();

    document.querySelectorAll('.error').forEach(elem => {
        elem.classList.add('esconder');
    });

    let formValid = document.getElementById('addForm').checkValidity();

    if (formValid) {
        let newUsuario = {
            nombre: document.getElementById('nombre').value,
            email: document.getElementById('email').value,
            codigo: document.getElementById('codigo').value,
            pass: document.getElementById('pass').value,
        };

        //ENVIAR
        $.ajax({
            method: "POST",
            url: "http://www.mocky.io/v2/5bd9731d2f00005e0006d11d",//caso true
            // url: "http://www.mocky.io/v2/5bd9777d2f0000790006d14c",//caso false
            data: newUsuario
        }).done(function (data) {
            console.log(data);
            if (data.result) {
                alert("Gracias por registrarte!");
                while (alert==true) {
                    stop
                }
                window.location.href='./pgprincipal.html'

            } else {
                //mensaje de error
                document.getElementById('servererr').classList.remove('esconder');
            }
        });

    } else {

        if (!document.getElementById('nombre').checkValidity()) {
            document.getElementById('nombreerr').classList.remove('esconder');
        }

        if (!document.getElementById('email').checkValidity()) {
            document.getElementById('emailerr').classList.remove('esconder');
        }

        if (!document.getElementById('codigo').checkValidity()) {
            document.getElementById('codierr').classList.remove('esconder');
        }

        if (!document.getElementById('pass').checkValidity()) {
            document.getElementById('passierr').classList.remove('esconder');
        }
    }

});
