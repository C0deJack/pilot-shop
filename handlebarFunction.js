$.get('template.hbs', function (data) {
    var source = data
    var template = Handlebars.compile(source)

    var data = {
        title: "All about <p> Tags",
        body: "This is a <p> post about &lt;p&gt; tags</p>"
    }

    var html = template(data)
    $('body').append(html)

})