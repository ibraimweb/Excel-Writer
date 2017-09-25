var jsonObj = {};
var inputs = $('form input');
inputs.map(function (idx, element) {
    $(element).on('change', (val) => {
        jsonObj[element.id] = element.value;
    })
})
$('#submit').on('click', (evt) => {
    evt.preventDefault();
    axios.post("/api/client_form", jsonObj).then(Materialize.toast('Information has been sent!', 4000, 'rounded'));
    inputs.map((idx, element) => {
        element.value = "";
    })
})

$('#export').on('click', (evt) => {
    evt.preventDefault();
    axios.get("/export").then(Materialize.toast('Exporting....', 4000, 'rounded'));
})

