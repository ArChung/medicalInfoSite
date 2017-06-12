$(document).ready(function() {

    initAni();

    initSwipeEvent();

    initPop();

    initScale();
});

var isPlaying = false;
var mom = $('.container');
var ani1, ani2, ani3, ani4, ani5, ani6;

function initAni() {
    ani1 = new TimelineMax({ paused: true });
    ani2 = new TimelineMax({ paused: true });
    ani3 = new TimelineMax({ paused: true });
    ani4 = new TimelineMax({ paused: true });
    ani5 = new TimelineMax({ paused: true });
    ani6 = new TimelineMax({ paused: true });

    TweenMax.set('.page', { autoAlpha: 0 })

    ani1.set('.p1', { autoAlpha: 1, marginTop: 0 })
        .set('.p1 .t1', { autoAlpha: 0, marginTop: 0, marginLeft: -30 })
        .set('.p1 .t2', { autoAlpha: 0, marginTop: 0, marginLeft: 30 })
        .to('.p1 .t1', .8, { autoAlpha: 1, marginLeft: 0 }, 0)
        .to('.p1 .t2', .8, { autoAlpha: 1, marginLeft: 0 }, 0)


    ani2.set('.p1,.p2', { autoAlpha: 1, marginTop: 0 })
        .set('.p2 .wrap > *', { autoAlpha: 0 })
        .set('.p2 .tAni', { marginTop: 60 })
        .set('.p2 .rAni', { marginLeft: 60 })
        .set('.p2 .lAni', { marginLeft: -60 })
        .to('.p1', .8, { autoAlpha: 0, marginTop: -180, ease: Power2.easeIn })
        .staggerTo('.p2 .wrap > *', .6, { autoAlpha: 1, marginLeft: 0, marginTop: 0 }, .1)



    ani3.set('.p2,.p3', { autoAlpha: 1, marginTop: 0 })
        .set('.p3 .wrap > *', { autoAlpha: 0 })
        .set('.p3 .tAni', { marginTop: 60 })
        .set('.p3 .rAni', { marginLeft: 60 })
        .set('.p3 .lAni', { marginLeft: -60 })
        .to('.p2', .8, { autoAlpha: 0, marginTop: -180, ease: Power2.easeIn })
        .staggerTo('.p3 .wrap > *', .6, { autoAlpha: 1, marginLeft: 0, marginTop: 0 }, .1)


    ani4.set('.p3,.p4', { autoAlpha: 1, marginTop: 0 })
        .set('.p4 .wrap > *', { autoAlpha: 0 })
        .set('.p4 .tAni', { marginTop: 60 })
        .set('.p4 .rAni', { marginLeft: 60 })
        .set('.p4 .lAni', { marginLeft: -60 })
        .to('.p3', .8, { autoAlpha: 0, marginTop: -180, ease: Power2.easeIn })
        .staggerTo('.p4 .wrap > *', .6, { autoAlpha: 1, marginLeft: 0, marginTop: 0 }, .1)


    ani5.set('.p4,.p5', { autoAlpha: 1, marginTop: 0 })
        .set('.p5 .title', { marginTop: 60, autoAlpha: 0 })
        .set('.p5 .wrap', { perspective: 1500 })
        .set('.p5 .table', { rotationY: 60, autoAlpha: 0 })
        .to('.p4', .8, { autoAlpha: 0, marginTop: -180, ease: Power2.easeIn })
        .to('.p5 .title', .6, { autoAlpha: 1, marginLeft: 0, marginTop: 0 })
        .to('.p5 .table', 1.2, { rotationY: 0, autoAlpha: 1, ease: Back.easeOut }, '-=.2')


    ani6.set('.p5,.p6', { autoAlpha: 1, marginTop: 0 })
        .set('.p6 .title', { marginTop: 60, autoAlpha: 0 })
        .set('.p6 .wrap', { perspective: 1500 })
        .set('.p6 .table', { rotationY: 60, autoAlpha: 0 })
        .to('.p5', .8, { autoAlpha: 0, marginTop: -180, ease: Power2.easeIn })
        .to('.p6 .title', .6, { autoAlpha: 1, marginLeft: 0, marginTop: 0 })
        .to('.p6 .table', 1.2, { rotationY: 0, autoAlpha: 1, ease: Back.easeOut }, '-=.2')


    ani1.restart();
    mom.addClass('channel_1');


    TweenMax.to('.arr', 0.6, { marginBottom: 10, yoyo: true, repeat: -1, ease: Power2.easeInOut })
    // ani6.restart();

}


function initSwipeEvent() {
    addSwipeUpDownEvent($('body'), function() {
        // prev
        if ($('.container').hasClass('bigSize')) {
            return;
        }

        var cNow = parseInt(ChungTool.returnClassNameWithFilter(mom, 'channel_'));
        var cNext = cNow - 1;

        if (cNext <= 0) {
            return;
        }
        ChungTool.removeClassWithFilter(mom, 'channel_');
        mom.addClass('channel_' + cNext);
        window['ani' + cNow].timeScale(1.8);
        window['ani' + cNow].reverse(0)

    }, function() {
        if ($('.container').hasClass('bigSize')) {
            return;
        }
        // next
        var cNow = parseInt(ChungTool.returnClassNameWithFilter(mom, 'channel_'));
        var cNext = cNow + 1;

        if (cNext >= 7) {
            return;
        }

        window['ani' + cNext].timeScale(1);
        window['ani' + cNext].restart()
        ChungTool.removeClassWithFilter(mom, 'channel_');
        mom.addClass('channel_' + cNext);
    })



    $('.arr').click(function() {
        if($('.container').hasClass('bigSize')){
            return;
        }
        // next
        var cNow = parseInt(ChungTool.returnClassNameWithFilter(mom, 'channel_'));
        var cNext = cNow + 1;

        if (cNext >= 7) {
            return;
        }

        window['ani' + cNext].timeScale(1);
        window['ani' + cNext].restart()
        ChungTool.removeClassWithFilter(mom, 'channel_');
        mom.addClass('channel_' + cNext);


    })


    $('.logo').click(function() {
        TweenMax.set('.page', { autoAlpha: 0 })
        ChungTool.removeClassWithFilter(mom, 'channel_');
        mom.addClass('channel_1');
        ani1.restart();
    })




}

function initPop() {

    $('.p4 .btn').click(function() {
        console.log(23)
        simpleShow($('.calendarPop'));
    })

    $('.calendarPop .bg').click(function() {
        simpleHide($('.calendarPop'))
    })

    $('.calendarPop .clozBtn').click(function() {
        simpleHide($('.calendarPop'));
    })
}

function initScale() {
    // $('.table').click(function(e) {
    //     $('.container').toggleClass('bigSize');
    // })
}


function addSwipeUpDownEvent(el, upFunc, downFunc) {
        // var touchObj = document.getElementById("index_banner_swipe");

        var start_y;
        var end_y;
        var t = el;

        t.get(0).addEventListener('touchstart', touchStart, false);
        t.get(0).addEventListener('touchmove', touchMove, false);
        t.get(0).addEventListener('touchend', touchSwipe);

        function touchStart(event) {
            if (event.targetTouches.length != 1) {
                return false;
            } //單點觸控
            start_y = end_y = event.targetTouches[0].pageY;

        }

        function touchMove(event) {
            // event.preventDefault();
            if (event.targetTouches.length != 1) {
                return false;
            } //單點觸控
            end_y = event.targetTouches[0].pageY;
            t.css('margin-top', end_y - start_y);
        }

        function touchSwipe(event) {


            t.css('margin-top', 0);
            if (end_y - start_y > 100) {
                upFunc();

            } else if (end_y - start_y < -100) {
                downFunc();
            }
        }
    }
