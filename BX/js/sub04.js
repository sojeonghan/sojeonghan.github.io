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
        start: "-300px top",
        end: "10% bottom",
        scrub: 1,
    });
    //('선택자(구동이들어갈)',{구동,구동,구동},듀레이션(0~1))
    sc02.to(".se02_img01_number",{opacity:1,y:0},0);
    sc02.to(".se02_img01",{opacity:1,x:0},0);
    sc02.to(".se02_img01_text",{opacity:1,y:0},0.1);

    sc02.to(".se02_img02_number",{opacity:1,y:0},0);
    sc02.to(".se02_img02",{opacity:1,x:0},0);
    sc02.to(".se02_img02_text",{opacity:1,y:0},0.1);

    sc02.to(".se02_img03_number",{opacity:1,y:0},0);
    sc02.to(".se02_img03",{opacity:1,x:0},0);
    sc02.to(".se02_img03_text",{opacity:1,y:0},0.1);


    let sc03 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc03,
        trigger: "#section03", //기준(해당 section)
        start: "-500px top",
        end: "bottom bottom",
        scrub: 1,
    });
    //('선택자(구동이들어갈)',{구동,구동,구동},듀레이션(0~1))
    sc03.to(".se03_text01 img",{y:0},0);
    sc03.to(".se03_text02 img",{y:0},0.2);
    sc03.to(".se03_text03 img",{y:0},0.4);
    sc03.to(".se03_text04 img",{y:0},0.6);



























})


