$('.banner-slider').slick({
    infinite: true,
    autoplay: true,
    // speed: 300,
    slidesToShow: 1,
    dots: true,
    adaptiveHeight: true,
});


$('.featured-slider').slick({
    centerMode: true,
    centerPadding: '130px',
    dots: true,
    slidesToShow: 3,
    responsive: [{

            breakpoint: 1260,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '100px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 900,
            settings: {
                centerPadding: '80px',
                centerMode: true,
                slidesToShow: 1.5
            }
        },
        {
            breakpoint: 640,
            settings: {
                // centerPadding: '100px',
                centerMode: true,
                slidesToShow: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                centerPadding: '80px',
                arrows: false,
                centerMode: false,
                slidesToShow: 1
            }
        }
    ]
});

$('.image-slider').slick({
    centerMode: true,
    centerPadding: '200px',
    dots: true,
    slidesToShow: 3,
    responsive: [{

            breakpoint: 1260,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '100px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                // centerPadding: '50px',
                centerMode: false,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 545,
            settings: {
                arrows: false,
                centerMode: false,
                slidesToShow: 1
            }
        }
    ]
});

$(document).ready(function() {
    $(".collapse.show").each(function() {
        $(this)
            .prev(".card-header")
            .find(".fa")
            .addClass("fa-minus")
            .removeClass("fa-plus");
    });

    $(".collapse")
        .on("show.bs.collapse", function() {
            $(this)
                .prev(".card-header")
                .find(".fa")
                .removeClass("fa-plus")
                .addClass("fa-minus");
        })
        .on("hide.bs.collapse", function() {
            $(this)
                .prev(".card-header")
                .find(".fa")
                .removeClass("fa-minus")
                .addClass("fa-plus");
        });

});


// countdown timer

(function() {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "07/07/",
        birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
        birthday = dayMonth + nextYear;
    }
    //end

    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {

            const now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            //do something later when date is reached
            if (distance < 0) {
                document.getElementById("headline").innerText = "Live";
                document.getElementById("countdown").style.display = "none";
                document.getElementById("live").style.display = "block";
                clearInterval(x);
            }
            //seconds


            $('.carousel').each(function() {
                var centerpoint = $(window).outerWidth(true) / 2;
                var halfitemWidth, getelementoffset = 0;
                var getcenteritem = 0;

                $(this).find('.recent-slider').each(function() {
                    halfitemWidth = $(this).width() / 2;
                    getelementoffset = $(this).offset().left;
                    getcenteritem = centerpoint - halfitemWidth;
                    if (getcenteritem >= getelementoffset - halfitemWidth && getcenteritem <= getelementoffset + halfitemWidth) {
                        $(this).find('.slider-caption').addClass('active').parents('.recent-slider').siblings().find('.slider-caption').removeClass('active')
                    } else {
                        $(this).find('.slider-caption').removeClass('active')
                    }

                })

            })




        }, 0)
}());




Draggable.create(".carousel", {
    type: "rotation",
    inertia: true,
    minimumMovement: 0,
    snap: function(endValue) {
        var step = 10;
        return Math.round(endValue / step) * step;
    }

});


$(document).ready(function() {
    var doAnimations = function() {

        // Calc current offset and get all animatables
        var offset = $(window).scrollTop() + $(window).height(),
            $animatables = $('.animatable');

        // Unbind scroll handler if we have no animatables
        if ($animatables.length == 0) {
            $(window).off('scroll', doAnimations);
        }

        // Check all animatables and animate them if necessary
        $animatables.each(function(i) {
            var $animatable = $(this);
            if (($animatable.offset().top + $animatable.height() - 20) < offset) {
                $animatable.removeClass('animatable').addClass('animated');
            }
        });

    };
    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');

});