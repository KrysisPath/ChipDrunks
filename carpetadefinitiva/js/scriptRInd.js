function parseranking(rank) {
    let listaOl = document.getElementById('rank_ind');

    for (let index = 0; index < rank.length; index++) {
        listaOl.innerHTML += `<tr>
        <td>${rank[index].posicion}</td>
        <td>${rank[index].nombre}</td>
        <td>${rank[index].baresVisitados}</td>
        </tr>`;
    }
}


$.ajax({
    url: "http://www.mocky.io/v2/5be18afa3000005100d9aa4b",
    crossDomain: true,
    dataType: 'jsonp',
  }).done(function (data) {
    parseranking(data);
    console.log(data);

  });