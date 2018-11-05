function generarHtml(paramElemid, paramAmigos) {
    $(paramElemid).html(function () {
        let htmlAmigos = '';
        paramAmigos.forEach(unAmigo => {
            htmlAmigos += `<li>
            <div>${unAmigo.name}</div>
            <div>${unAmigo.email}</div>        
            <div><button class="saludaBtn green" data-value="${unAmigo.name}">Saludar</button></div>        
            </li>`;
        });

        return htmlAmigos;
    });
}

function asociaClick(paramSelector) {
    $(paramSelector).click(function () {
        alert("Hola " + $(this).attr('data-value') + "!!");
    })
}

$('#cargarbtnFace').click(function () {

    $.ajax({
        url: "http://www.mocky.io/v2/5bd84ad03100002714474d35",
    }).done(function (amigosFromServer) {
        console.log(amigosFromServer);
        //INYECTAR amigosFromServer en el html
        generarHtml('#amigosface', amigosFromServer);

        // Asociar eventos
        asociaClick('#amigosface .saludaBtn');
    });

});

$('#cargarbtnSpoty').click(function () {

    $.ajax({
        url: "http://www.mocky.io/v2/5bd84ad03100002714474d35",
    }).done(function (amigosFromServer) {
        console.log(amigosFromServer);
        //INYECTAR amigosFromServer en el html
        generarHtml('#amigosspoty', amigosFromServer);

        // Asociar eventos
        asociaClick('#amigosspoty .saludaBtn');

    });

});

function addAmigoHtml(paramElemid, unAmigo) {
    let htmlAmigos = `<li>
    <div>${unAmigo.nombre}</div>
    <div>${unAmigo.email}</div>        
    <div><button class="saludaBtn green" data-value="${unAmigo.nombre}">Saludar</button></div>        
    </li>`;


    $(paramElemid).append(htmlAmigos);
    asociaClick('#amigosface .saludaBtn');

}

$('#addBtn').click(function (evnt) {
    evnt.preventDefault();

    document.querySelectorAll('.error').forEach(elem => {
        elem.classList.add('esconder');
    });

    let formValid = document.getElementById('addForm').checkValidity();

    if (formValid) {
        let newAmigo = {
            nombre: document.getElementById('nombre').value,
            email: document.getElementById('email').value
        };

        //ENVIAR
        $.ajax({
            method: "POST",
            url: "http://www.mocky.io/v2/5bd9731d2f00005e0006d11d",//caso true
            // url: "http://www.mocky.io/v2/5bd9777d2f0000790006d14c",//caso false
            data: newAmigo
        }).done(function (data) {
            console.log(data);
            if (data.result) {
                addAmigoHtml('#amigosface', newAmigo);

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
    }

});
