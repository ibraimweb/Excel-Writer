var jsonObj = {};
var inputs = $('form input');
inputs.map(function (idx, element) {
    $(element).on('change', (val) => {
        jsonObj[element.id] = element.value;
    })
})
$('#submit').on('click', (evt) => {
    evt.preventDefault();
    axios.post("/api/client_form", jsonObj)
    inputs.map((idx, element) => {
        element.value = "";
    })
})

