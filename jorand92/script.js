var content = 'texto para mostrar ☼';

var ele = '<span>' + content.split('').join('</span><span>') + '</span>';

$(ele).hide()
    .appendTo('p')
    .each(function (i) {
        $(this)
            .delay(100 * i)
            .css({
                display: 'inline',
                opacity: 0
            })
            .animate(
                {
                    opacity: 1
                }, 100
            );
        }
    );

window.onload = function() {
    var context = new AudioContext();
}
