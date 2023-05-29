window.addEventListener('DOMContentLoaded', function () {

    $('#section01 .se01_img01').addClass('on')
    $('#section01 .se01_img01_text').addClass('on')


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

        // let scrollTop = container.scrollTop;
        // $('.posNum').html(scrollTop)







    });



    /*  slide,click event section */
    //#se05_img 안에 있는 li들을 호버했을때 안에 자식인 .se05_img_after가 눈에 보이겠다.
    $('#se05_img > li').mouseenter(function () {
        $(this).addClass('on')
    }).mouseleave(function () {
        $(this).removeClass('on')
    })


    let sc01 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc01,
        trigger: "#section01", //기준(해당 section)
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
    });
          //('선택자(구동이들어갈)',{구동,구동,구동},듀레이션(0~1))
    sc01.to(".se01_main_img_after",{opacity:1},0);
    sc01.to(".se01_name01 img",{y:0},0.4);
    sc01.to(".se01_name02 img",{y:0},0.55);
    sc01.to(".se01_img02",{opacity:1,x:0},0.8);
    sc01.to(".se01_img02_text",{opacity:1,y:0},0.85);
    sc01.to(".se01_text01",{opacity:1,y:0},0.85);


    let sc02 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc02,
        trigger: "#section02", //기준(해당 section)
        start: "-300px top",
        end: "90% bottom",
        scrub: 1,
    });
    //('선택자(구동이들어갈)',{구동,구동,구동},듀레이션(0~1))
    sc02.to(".se02_rig_title",{opacity:1,y:0, rotate:0},0);
    sc02.to(".se02_rig_line",{opacity:1,y:0, rotate:0},0.15);
    sc02.to(".se02_rig_text01",{opacity:1,y:0, rotate:0},0.3);
    sc02.to(".se02_rig_text02",{opacity:1,y:0, rotate:0},0.45);
    sc02.to(".se02_rig_text03",{opacity:1,y:0, rotate:0},0.6);








    gsap.to('.fix_this_3', {
        scrollTrigger: {
            trigger: ".trigger_this_03",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            pin: true,
            pinSpacing: false,
            scrub: true,
        }
    });


    let sc03 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc03,
        trigger: "#section03",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
    });
    sc03.to(".x_scroll",{x:-5760},0);
    sc03.to(".se03_page01_navi02",{x:1225},0);


    let sc03_page01 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc03_page01,
        trigger: "#section03", //기준
        start: "top top", //기준점, 브라우저
        end: "2000px bottom", //기준점, 브라우저
        scrub: 1,
    });
    sc03_page01.to(".se03_page01_img01_text01",{opacity:1, y:0},0);
    sc03_page01.to(".se03_page01_img01",{opacity:1, x:0},0);
    sc03_page01.to(".se03_page01_img02",{opacity:1, x:0},0.3);
    sc03_page01.to(".se03_page01_img02_text01",{opacity:1, y:0},0.3);





    let sc03_page02 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc03_page02,
        trigger: "#section03", //기준
        start: "500px top", //기준점, 브라우저
        end: "4000px bottom", //기준점, 브라우저
        scrub: 1,
    });
    sc03_page02.to(".se03_page02_img03",{opacity:1, x:0},0);
    sc03_page02.to(".se03_page02_img03_title01 img",{y:0},0.05);
    sc03_page02.to(".se03_page02_img03_title02 img",{y:0},0.15);
    sc03_page02.to(".se03_page02_img03_text01",{opacity:1, y:0},0.3);
    sc03_page02.to(".se03_page02_img04",{opacity:1, x:0},0.5);
    sc03_page02.to(".se03_page02_img04_1",{opacity:1, x:0},0.65);
    sc03_page02.to(".se03_page02_img04_title01 img",{y:0},0.8);
    sc03_page02.to(".se03_page02_img04_text01",{opacity:1, y:0},0.95);




    let sc03_page03 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc03_page03,
        trigger: "#section03", //기준
        start: "1000px top", //기준점, 브라우저
        end: "6000px bottom", //기준점, 브라우저
        scrub: 1,
    });
    sc03_page03.to(".se03_page03_img05",{opacity:1, x:0},0);
    sc03_page03.to(".se03_page03_img05_title01 img",{y:0},0.15);
    sc03_page03.to(".se03_page03_img05_text01",{opacity:1, x:0},0.45);





    let sc03_page04 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc03_page04,
        trigger: "#section03",
        start: "5000px top",
        end: "8000px bottom",
        scrub: 1,
    })
    sc03_page04.to(".se03_page04_img06",{opacity:1, x:0},0)
    sc03_page04.to(".se03_page04_img06_title01 img",{y:0},0.15)
    sc03_page04.to(".se03_page04_img06_text01",{opacity:1, y:0},0.3)
    sc03_page04.to(".se03_page04_img06_text02",{opacity:1, y:0},0.5)
    sc03_page04.to(".se03_page04_img07",{opacity:1, x:0},0.6)
    sc03_page04.to(".se03_page04_img07_text01",{opacity:1, y:0},0.75)
    sc03_page04.to(".se03_page04_img07_text02",{opacity:1, y:0},0.9)







    let sc04_circle = gsap.timeline();
    ScrollTrigger.create({
        animation: sc04_circle,
        trigger: "#section04",
        start: "-200px top",
        end: "-100px bottom",
        scrub: 1,
    });
    sc04_circle.to(".se04_img01",{clipPath:'circle(26% at 50% 50%)'},0);



    let sc04_text1 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc04_text1,
        trigger: "#section04",
        start: "-200px top",
        end: "100px bottom",
        scrub: 1,
    })
    sc04_text1.to(".se04_left_title01 img",{y:0},0.1)
    sc04_text1.to(".se04_left_title02 img",{y:0},0.1)
    sc04_text1.to(".se04_left_title03 img",{y:0},0.1)
    sc04_text1.to(".se04_left_button",{opacity:1, y:0},1.25)
    sc04_text1.to(".se04_left_text01",{opacity:1, y:0},1.25)
    sc04_text1.to(".se04_rig_title04 img",{y:0},0.1)
    sc04_text1.to(".se04_rig_title05 img",{y:0},0.1)
    sc04_text1.to(".se04_rig_title06 img",{y:0},0.1)
    sc04_text1.to(".se04_rig_text02",{opacity:1, y:0},1)
    sc04_text1.to(".se04_circle_title01_overlap img",{y:0},0.1)
    sc04_text1.to(".se04_circle_title02_overlap img",{y:0},0.1)
    sc04_text1.to(".se04_circle_title03_overlap img",{y:0},0.1)


    let sc05 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc05,
        trigger: "#section05",
        start: "-500px top",
        end: "100px bottom",
        scrub: 1,
    });
    sc05.to(".se05_title01 img",{y:0},0.1);


    let sc06 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc06,
        trigger: "#section06", //기준(해당 section)
        start: "-200px top",
        end: "50% bottom",
        scrub: 1,
    });
    //('선택자(구동이들어갈)',{구동,구동,구동},듀레이션(0~1))
    sc06.to(".se06_text01",{opacity:1,y:0},0);
    sc06.to(".se06_title_01",{opacity:1,y:0},0);
    sc06.to(".se06_title_02",{opacity:1,y:0},0);
    sc06.to(".se06_title_03",{opacity:1,y:0},0);
    sc06.to(".se06_text02",{opacity:1,y:0},0);
    sc06.to(".se06_button",{opacity:1,y:0},0);
    sc06.to(".se06_img01",{opacity:1,x:0},0);
    sc06.to(".se06_img02",{opacity:1,x:0},0);


































})


