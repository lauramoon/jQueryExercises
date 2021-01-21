$('form').on('submit', function(evt) {
    evt.preventDefault();
    const title = $('#title').val();
    const rating = $('#rating').val();
    const remove = '<button class="remove">X</button>'
    const newRow = `<tr><td class="title">${title}</td>
        <td class="rating">${rating}</td>
        <td>${remove}</td></tr>`
    $('tbody').append(newRow);
    $('#title').val('').focus();
    $('#rating').val('');

});

$('table').on('click', '.remove', function() {
    $(this).parent().parent().remove();
})

$('#moviesort').on('click', function() {
    $('tbody > tr').sort(function (a, b) {
        return $('td.title', a).text().toLowerCase() > $('td.title', b).text().toLowerCase();
    }).appendTo('tbody');
})

$('#sortup').on('click', function() {
    $('tbody > tr').sort(function (a, b) {
        return +$('td.rating', b).text() > +$('td.rating', a).text();
    }).appendTo('tbody');
})

$('#sortdown').on('click', function() {
    $('tbody > tr').sort(function (a, b) {
        return +$('td.rating', b).text() < +$('td.rating', a).text();
    }).appendTo('tbody');
})