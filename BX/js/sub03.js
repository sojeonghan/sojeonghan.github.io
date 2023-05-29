window.addEventListener('DOMContentLoaded', function () {

    $('#se01_main_img .se01_main_img_move').addClass('on')
    $('#section01 .se01_name01').addClass('on')
    $('#section01 .se01_name02').addClass('on')
    $('#section01 .se01_sub_name').addClass('on')


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

    let sc02 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc02,
        trigger: "#section02", //기준(해당 section)
        start: "top top",
        end: "10% bottom",
        scrub: 1,
    });
    //('선택자(구동이들어갈)',{구동,구동,구동},듀레이션(0~1))
    sc02.to(".se02_img01",{opacity:1,x:0},0);
    sc02.to(".se02_img02",{opacity:1,x:0},0);
    sc02.to(".se02_title_01 img",{y:0},0.05);
    sc02.to(".se02_title_02 img",{y:0},0.2);
    sc02.to(".se02_button",{opacity:1,y:0},0.3);
    sc02.to(".se02_text",{opacity:1,y:0},0.5);


    let sc03 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc03,
        trigger: "#section03", //기준(해당 section)
        start: "-300px top",
        end: "bottom bottom",
        scrub: 1,
    });
    //('선택자(구동이들어갈)',{구동,구동,구동},듀레이션(0~1))
    sc03.to(".se03_left_img01",{opacity:1,x:0},0);
    sc03.to(".se03_left_title",{opacity:1,x:0},0);
    sc03.to(".se03_rig_img02",{opacity:1,x:0},0.1);
    sc03.to(".se03_rig_img02_number",{opacity:1,x:0},0.15);
    sc03.to(".se03_rig_text",{opacity:1,x:0},0.15);


    let sc04 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc04,
        trigger: "#section04", //기준(해당 section)
        start: "-300px top",
        end: "bottom bottom",
        scrub: 1,
    });
    //('선택자(구동이들어갈)',{구동,구동,구동},듀레이션(0~1))
    sc04.to(".se04_left_title",{opacity:1,x:0, rotate:0},0);
    sc04.to(".se04_left_line",{opacity:1,x:0, rotate:0},0.15);
    sc04.to(".se04_left_text",{opacity:1,x:0, rotate:0},0.3);
    sc04.to(".se04_left_button",{opacity:1,x:0, rotate:0},0.3);


    let sc05 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc05,
        trigger: "#section05", //기준(해당 section)
        start: "-300px top",
        end: "bottom bottom",
        scrub: 1,
    });
    //('선택자(구동이들어갈)',{구동,구동,구동},듀레이션(0~1))
    sc05.to(".se05_img01",{opacity:1,x:0},0);
    sc05.to(".se05_main_title01 img",{y:0},0.3);
    sc05.to(".se05_main_title02 img",{y:0},0.6);
    sc05.to(".se05_arrow_button",{opacity:1,y:0},0.8);
    sc05.to(".se05_main_text",{opacity:1,x:0},0.88);
    sc05.to(".se05_img02",{opacity:1,y:0},1);
    sc05.to(".se05_img03",{opacity:1,y:0},1);


























})


