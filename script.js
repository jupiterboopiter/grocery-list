$(function() {
    let callback = function(event) {
        event.preventDefault();
        let input = $('input[type=text][name=item]'),
            value = input.val(),
            need = ($(event.target).attr('id') === 'addNeed'),
            item = $('<li><input type="checkbox" name="item"> ' + value + ' <a href="#">remove</a></li>'),
            list = (need) ? $('ul').first() : $('ul').last();

        input.val("");
        input.focus();

        if (value === "") return;

        if (!need) {
            item.find('input').attr('checked', true);
        }
        item.appeandTo(list);
    }

    $('#addHave, #addNeed').click(callback);

    $('ul').on('click', 'li a', function(event) {
        $(event.target).parent('li').remove();
    });

    


});