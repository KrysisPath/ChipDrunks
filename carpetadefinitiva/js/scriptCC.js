document.getElementById('btnClan').onclick = (function (event) {
    console.log(event);
    event.preventDefault();//previene envio form

    document.querySelectorAll('.error').forEach(element => { //querySelectorAll=getElementById=getElementByClassName
        element.classList.add('esconder');
    });

    let formValid = document.getElementById('formClan').checkValidity();
    
    if (formValid) {
        //Enviar
        $.ajax({
            method: "POST",
            url: "http://www.mocky.io/v2/5bd973312f00006f0006d126",//caso true
            // url: "http://www.mocky.io/v2/5bd977ac2f00003e0006d155",//caso false
            crossDomain: true,
            dataType: 'jsonp',
            data: {
                usuario: document.getElementById('camaradas').value,
            }
        }).done(function (data) { //done=respuesta del servidor//
            console.log(data);
            if (data.result) {
                alert("Clan Creado!"); 
                while (alert==true){
                    stop //mientras que la alerta se activa que no me envía a la pag siguiente//
                }
                window.location.href = 'pgprincipal.html';
            } else {
                document.getElementById('mensaje').classList.remove('esconder');
            }
        });
    } else {
        //mostrar mensaje y no enviar
        // document.getElementById('mensaje').innerHTML="Datos Incorrectos";

        if (!document.getElementById('camaradas').checkValidity()) {
            document.getElementById('errorcamaradas').classList.remove('esconder');
        }
    }
});