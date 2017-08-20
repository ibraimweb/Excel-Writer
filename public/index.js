var jsonObj = {};

$('form input').map(function (idx, element) {
    $(element).on('change', (val) => {
        jsonObj[element.id] = element.value;
    })
})
$('#submit').on('click', (evt) => {
    evt.preventDefault();
    console.log(jsonObj);
})

