$.get('template.hbs', function (data) {
    var template = Handlebars.compile(data)

    $.get('products.json', function (data2) {
        var htmlToBeOutput = template(data2)
        $('body').append(htmlToBeOutput)
    })
})
