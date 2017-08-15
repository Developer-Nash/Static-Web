//if(localStorage.statusIn == 1){
//    $(".welcome-page").css("display", "none")
//}else{
//    $(".welcome-page").css("display", "block")
//}
//
//$(".enter").click(function(){
//    $(".welcome-page").css("display", "none");
//    localStorage.statusIn = 1;
//});




$(function(){
    /**第四页的延迟加载**/
    function loadCSS(href) {
        var cssLink = $("<link rel='stylesheet' type='text/css' href='"+href+"'>");
        $("head").append(cssLink);
    }


    $('#fullpage-wrapper').fullpage({
        //Navigation
        menu: false,
        lockAnchors: false,
        anchors:[],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: [],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        //scrollingSpeed: 700,
        //autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        //loopBottom: false,
        //loopTop: false,
        //loopHorizontal: true,
        //continuousVertical: false,
        //normalScrollElements: '',
        scrollOverflow: true,
        scrollOverflowOptions: {
            preventDefault: false
        },
        dragAndMove: false,
        //touchSensitivity: 15,
        //normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        resize : false,
        sectionsColor : [],
        paddingTop: '0',
        paddingBottom: '0',
//            fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slideFullPage',

        //events
        onLeave: function(index, nextIndex, direction){
            if(nextIndex == 4){
                loadCSS("css/website/index_sonar.css");
                $("#sonar-canvas").css("visibility", "inherit");
            }
            if(index == 1){
                $(".nav").css("display", "none");
            }
            //if(nextIndex == 6){
            //}
            //if(index == 6){
            //    $.fn.fullpage.setAllowScrolling(true, 'down');
            //}
        },
        afterLoad: function(anchorLink, index){
            if(index == 1){
                $("#indexArrowDown").click(function(){
                    $.fn.fullpage.moveSectionDown();
                });
                $(".nav").css("display", "block");
            }
            if(index == 3){
                $(".index-page .section-three .dataservice-bg").css({
                    "animation":"indexZoom 8s linear forwards",
                    "-moz-animation":"indexZoom 8s linear forwards",
                    "-webkit-animation":"indexZoom 8s linear forwards",
                    "-o-animation":"indexZoom 8s linear forwards"
                })
            }
            if(index == 4){
                $("#loadAfter").css("opacity", "1");
            }
            //if(index == 6){
                //$.fn.fullpage.setAllowScrolling(false,'down');
                //$("#scroll-content").scrollTop(1);
                //$("#scroll-content").scroll(function(){
                //    var position = $("#scroll-content").scrollTop();
                //    if(position == 0){
                //        $.fn.fullpage.setAllowScrolling(true);
                //    }else{
                //        $.fn.fullpage.setAllowScrolling(false);
                //    }
                //});

            //}
        },
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){},

    });
});

$(window).load(function() {
    $("body").css("opacity","1");
});

$(function(){
    $('.carousel').carousel({
        interval: 8000,
        pause: "none"
    });
});