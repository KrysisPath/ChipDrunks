function parseranking(rank) {
    let listaOl = document.getElementById('rank_grupo');

    for (let index = 0; index < rank.length; index++) {
        listaOl.innerHTML += `<tr>
        <td>${rank[index].Posición}</td>
        <td>${rank[index].Clan}</td>
        <td>${rank[index].baresVisitados}</td>
        </tr>`;
    }
}

$.ajax({
    url: "http://www.mocky.io/v2/5be18c963000008000d9aa53",
    crossDomain: true,
    dataType: 'jsonp',
  }).done(function (data) {
    parseranking(data);
    console.log(data);
  });