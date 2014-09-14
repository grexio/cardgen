(function() {
    $("#cardgen").click(function () {
        var source   = $("#card-template").html();
        var template = Handlebars.compile(source);
        var context = $("#cardform").serializeObject();
        $("#cardhtml").text(template(context));
    });
}());
