
//parsear
function parseranking(rank) {
    let listaOl = document.getElementById('tus_clanes');

    for (let index = 0; index < rank.length; index++) {
        listaOl.innerHTML += `<tr>
        <td><a href="./blurp.html" class="info"> ${rank[index].tus_clanes}</a></td>
        <td><img src="${rank[index].icono}"></td>
        <td>${rank[index].Ranking}</td>
        </tr>`;
    }
}

$.ajax({
    url: "http://www.mocky.io/v2/5be17ed83000000f00d9aa0b",
}).done(function (data1) {
    console.log(data1);

    parseranking(data1);
})