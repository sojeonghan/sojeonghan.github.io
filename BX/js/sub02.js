window.addEventListener('DOMContentLoaded', function () {

    setTimeout(()=>{
        $('#se01_main_img .se01_main_img_move').addClass('on')
        $('#se01_main .se01_main_subtitle').addClass('on')
        $('#se01_main .se01_main_title').addClass('on')
        $('#se01_main .se01_main_text').addClass('on')
    },100)

    $('.se01_gnb_menu').click(function () {
        $('#menu').fadeIn(1000)
    })
    $('.menu_close').click(function () {
        $('#menu').fadeOut(1000)
    })


    $('#menu_text_container > div').mouseenter(function () {
        $('#menu_text_container > div').removeClass('on')
        $('#img_rolling > div').removeClass('on')

        let v = $('#menu_text_container > div').index(this)

        $(this).addClass('on')
        $('#img_rolling > div').eq(v).addClass('on')

    }).mouseleave(function () {
        $('#menu_text_container > div').removeClass('on')
        $('#img_rolling > div').removeClass('on')
    })


    $('#social_brand > div').mouseenter(function () {
        $(this).addClass('on')
    }).mouseleave(function () {
        $(this).removeClass('on')
    })



    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)





    });



    /*  slide,click event section */

    gsap.to('.fix_this_0', {
        scrollTrigger: {
            trigger: ".trigger_this_00",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            pin: true,
            pinSpacing: false,
            scrub: true,
        }
    });

    let xScroll = gsap.timeline();
    ScrollTrigger.create({
        animation: xScroll,
        trigger: "#section_xScroll", //기준(해당 section)
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
    });
    //('선택자(구동이들어갈)',{구동,구동,구동},듀레이션(0~1))
    xScroll.to(".sub02_xScroll",{x:-7680},0);


    let sc02 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc02,
        trigger: "#section_xScroll",
        start: "1300px top",
        end: "2500px bottom",
        scrub: 1,
    });

    sc02.to("#se02_right .se02_right_sub",{opacity:1,y:0, rotate:0},0);
    sc02.to("#se02_right .se02_right_main_title01",{opacity:1,y:0, rotate:0},0.1);
    sc02.to("#se02_right .se02_right_main_title02",{opacity:1,y:0, rotate:0},0.2);
    sc02.to("#se02_right .se02_right_text",{opacity:1,y:0, rotate:0},0.4);



    let sc03 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc03,
        trigger: "#section_xScroll",
        start: "2800px top",
        end: "4000px bottom",
        scrub: 1,
    });

    sc03.to("#se03_right .se03_right_sub",{opacity:1,y:0, rotate:0},0);
    sc03.to("#se03_right .se03_right_main_title01",{opacity:1,y:0, rotate:0},0.1);
    sc03.to("#se03_right .se03_right_main_title02",{opacity:1,y:0, rotate:0},0.1);
    sc03.to("#se03_right .se03_right_text",{opacity:1,y:0, rotate:0},0.4);




    let sc04 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc04,
        trigger: "#section_xScroll",
        start: "4500px top",
        end: "6000px bottom",
        scrub: 1,
    });

    sc04.to("#section04 .se04_img",{opacity:1,x:0},0);
    sc04.to("#section04 .se04_title01 img",{y:0},0.2);
    sc04.to("#section04 .se04_title02 img",{y:0},0.3);
    sc04.to("#section04 .se04_text",{opacity:1,y:0},0.45);


    let sc05 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc05,
        trigger: "#section_xScroll",
        start: "8300px top",
        end: "10% bottom",
        scrub: 1,
    });

    sc05.to("#section05 .se05_center_text",{opacity:1,y:0},0.2);
    sc05.to("#se05_left .se05_left_text01",{opacity:1,x:0},0.2);
    sc05.to("#se05_left .se05_left_text02",{opacity:1,x:0},0.2);
    sc05.to("#se05_left .se05_left_text03",{opacity:1,x:0},0.2);
    sc05.to("#se05_right .se05_rig_title01",{opacity:1,x:0},0.2);
    sc05.to("#se05_right .se05_rig_title02",{opacity:1,x:0},0.2);
    sc05.to("#se05_right .se05_rig_text",{opacity:1,x:0},0.2);



















})


