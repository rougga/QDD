const position = {x: 0, y: 0};
interact('.resize-drag').resizable({
    edges: {left: true, right: true, bottom: true, top: true},

    listeners: {
        move(event) {
            var target = event.target;
            var x = (parseFloat(target.getAttribute('data-x')) || 0);
            var y = (parseFloat(target.getAttribute('data-y')) || 0);

            // update the element's style
            target.style.width = event.rect.width + 'px';
            target.style.height = event.rect.height + 'px';

            // translate when resizing from top or left edges
            x += event.deltaRect.left;
            y += event.deltaRect.top;

            target.style.webkitTransform = target.style.transform =
                    'translate(' + x + 'px,' + y + 'px)';

            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
        }
    },
    modifiers: [
        // keep the edges inside the parent
        interact.modifiers.restrictEdges({
            outer: 'parent'
        }),

        // minimum size
        interact.modifiers.restrictSize({
            min: {width: 100, height: 50}
        })
    ],
    inertia: true
})
        .draggable({
            listeners: {
                move: function (event) {
                    let $element=$(event.target);
                    let x = $element.position().left ;
                    let y = $element.position().top ;
                    $element.attr("data-x",x);
                    $element.attr("data-y",y);
                    //console.log(`X= ${x+event.dx} Y= ${y}`);
                    position.x += event.dx;
                    position.y += event.dy;
                    //$element.css({top: x+(event.dx), left: y+(event.dy), position:'absolute'});
                   event.target.style.transform =`translate(${position.x}px, ${position.y}px)`;
                }
            },
            inertia: false,
            modifiers: [
                interact.modifiers.restrictRect({
                    restriction: 'parent',
                    endOnly: true
                })
            ]
        });