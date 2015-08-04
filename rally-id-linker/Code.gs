function onEdit(e) {
    var us = /US\d+/i;
    var range = e.range;
    var cell = range.getValues()[0][0];

    if (us.test(cell)) {
        range.setValue('=hyperlink\(\"https://rally1.rallydev.com/#/search?keywords=' + cell + '\",\"' + cell + '\"\)');
    }
}
