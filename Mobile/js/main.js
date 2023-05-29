window.addEventListener('DOMContentLoaded', function () {

    $('#se01_center .se01_center_subtitle01').addClass('on')
    $('#se01_center .se01_center_subtitle02').addClass('on')
    $('#se01_rig_pill .se01_rig_blue_pill').addClass('on')
    $('#se01_rig_pill .se01_rig_white_pill').addClass('on')
    $('#se01_rig_pill .se01_rig_skyblue_pill').addClass('on')
    $('#se01_rig_pill .se01_rig_yellow_pill').addClass('on')
    $('#section01 .se01_rig_post_it').addClass('on')
    $('#se01_center .se01_center_emotion').addClass('on')
    $('#section01 .se01_mobile_post_it').addClass('on')


    $('#navi > div').click(function () {

        let v = $('#navi > div').index(this)

        if(v===0){
            container.scrollTo(0, 0, 600, {
                callback: () => console.log('done!'),
                easing: easing.easeInOutCirc,
            });
        }
        if(v===1){
            container.scrollTo(0, 2450, 600, {
                callback: () => console.log('done!'),
                easing: easing.easeInOutCirc,
            });
        }
        if(v===2){
            container.scrollTo(0, 11400, 600, {
                callback: () => console.log('done!'),
                easing: easing.easeInOutCirc,
            });
        }
        if(v===3){
            container.scrollTo(0, 17150, 600, {
                callback: () => console.log('done!'),
                easing: easing.easeInOutCirc,
            });
        }

    })



    function Inter01() {
        let count1 = 0;
        setInterval(()=>{
            count1++;
                                                    //이미지 경로 0 전까지
            $('#lets_l_01 .lets_01 img').attr('src',`image/section01/lets/l/lets_l_0${count1}.png`)
            //이미지 앞에 선택자 명시
            if(count1 >= 4){ //이미지 갯수 만큼 숫자 바꿔주기
                count1 = 0;
            }
        }, 630) //이미지 하나당 카운트
    }
    Inter01();

    function Inter02() {
        let count1 = 0;
        setInterval(()=>{
            count1++;
            $('#lets_e_01 .let_02 img').attr('src',`image/section01/lets/e/lets_e_0${count1}.png`)

            if(count1 >= 4){
                count1 = 0;
            }
        }, 500)
    }
    Inter02();

    function Inter03() {
        let count1 = 0;
        setInterval(()=>{
            count1++;
            $('#lets_t_01 .let_03 img').attr('src',`image/section01/lets/t/lets_t_0${count1}.png`)

            if(count1 >= 4){
                count1 = 0;
            }
        }, 400)
    }
    Inter03();


    function Inter04() {
        let count1 = 0;
        setInterval(()=>{
            count1++;
            $('#lets_s_01 .let_04 img').attr('src',`image/section01/lets/'s/lets_s_0${count1}.png`)

            if(count1 >= 4){
                count1 = 0;
            }
        }, 500)
    }
    Inter04();


    function Inter05() {
        let count1 = 0;
        setInterval(()=>{
            count1++;
            $('#eat_e_01 .eat_01 img').attr('src',`image/section01/eat/e/eat_e_0${count1}.png`)

            if(count1 >= 4){
                count1 = 0;
            }
        }, 450)
    }
    Inter05();

    function Inter06() {
        let count1 = 0;
        setInterval(()=>{
            count1++;
            $('#eat_a_01 .eat_02 img').attr('src',`image/section01/eat/a/eat_a_0${count1}.png`)

            if(count1 >= 4){
                count1 = 0;
            }
        }, 350)
    }
    Inter06();


    function Inter07() {
        let count1 = 0;
        setInterval(()=>{
            count1++;
            $('#eat_t_01 .eat_03 img').attr('src',`image/section01/eat/t/eat_t_0${count1}.png`)

            if(count1 >= 4){
                count1 = 0;
            }
        }, 600)
    }
    Inter07();


    function Inter08() {
        let count1 = 0;
        setInterval(()=>{
            count1++;
            $('#together_t_01 .together_01 img').attr('src',`image/section01/together/t/together_t_0${count1}.png`)

            if(count1 >= 4){
                count1 = 0;
            }
        }, 700)
    }
    Inter08();


    function Inter09() {
        let count1 = 0;
        setInterval(()=>{
            count1++;
            $('#together_o_01 .together_02 img').attr('src',`image/section01/together/o/together_o_0${count1}.png`)

            if(count1 >= 4){
                count1 = 0;
            }
        }, 320)
    }
    Inter09();


    function Inter10() {
        let count1 = 0;
        setInterval(()=>{
            count1++;
            $('#together_g_01 .together_03 img').attr('src',`image/section01/together/g/together_g_0${count1}.png`)

            if(count1 >= 4){
                count1 = 0;
            }
        }, 530)
    }
    Inter10();


    function Inter11() {
        let count1 = 0;
        setInterval(()=>{
            count1++;
            $('#together_e_01 .together_04 img').attr('src',`image/section01/together/e/together_e_0${count1}.png`)

            if(count1 >= 4){
                count1 = 0;
            }
        }, 450)
    }
    Inter11();


    function Inter12() {
        let count1 = 0;
        setInterval(()=>{
            count1++;
            $('#together_t2_01 .together_05 img').attr('src',`image/section01/together/t2/together_t2_0${count1}.png`)

            if(count1 >= 4){
                count1 = 0;
            }
        }, 200)
    }
    Inter12();



    function Inter13() {
        let count1 = 0;
        setInterval(()=>{
            count1++;
            $('#together_h_01 .together_06 img').attr('src',`image/section01/together/h/together_h_0${count1}.png`)

            if(count1 >= 4){
                count1 = 0;
            }
        }, 340)
    }
    Inter13();


    function Inter14() {
        let count1 = 0;
        setInterval(()=>{
            count1++;
            $('#together_e2_01 .together_07 img').attr('src',`image/section01/together/e2/together_e2_0${count1}.png`)

            if(count1 >= 4){
                count1 = 0;
            }
        }, 460)
    }
    Inter14();



    function Inter15() {
        let count1 = 0;
        setInterval(()=>{
            count1++;
            $('#together_r_01 .together_08 img').attr('src',`image/section01/together/r/together_r_0${count1}.png`)

            if(count1 >= 4){
                count1 = 0;
            }
        }, 190)
    }
    Inter15();



    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)


        if(scrollTop >= 980){
            $('#se02_container').addClass('on')
        }

        if(scrollTop >= 1880){
            var pourcentage = 70;
            var total = 200;

            var result = ((pourcentage * total) / 100);

            $('.pie').css('strokeDasharray', result);
        }

        if(scrollTop >= 2350){
            $('#se03_graph01').addClass('on')
        }

        if(scrollTop >= 2400){
            $('#se03_graph02').addClass('on')
        }

        if(scrollTop >= 3450){
            $('#se04_brand01').addClass('on')
        }

        if(scrollTop >= 3450){
            $('#se04_brand02').addClass('on')
        }

        if(scrollTop >= 7700){
            $('#se08_persona_01').addClass('on')
        }

        if(scrollTop >= 7800){
            $('#se08_persona_01 .persona_01_text').addClass('on')
        }

        if(scrollTop >= 8300){
            $('#se08_persona_02').addClass('on')
        }

        if(scrollTop >= 8300){
            $('#se08_persona_02 .persona_02_text').addClass('on')
        }

        if(scrollTop >= 10000){
            $('#se09_emotion').addClass('on')
        }

        if(scrollTop >= 11300){
            $('#se10_visual').addClass('on')
        }

        if(scrollTop >= 12600){
            $('#se11_visual').addClass('on')
        }

        if(scrollTop >= 15300){
            $('#se13_deco_02').addClass('on')
        }

        if(scrollTop >= 16050){
            $('#section13').addClass('on')
        }

        if(scrollTop >= 18150){
            $('#se14_splash_screen').addClass('on')
        }

        if(scrollTop >= 21400){
            $('#se15_visual').addClass('on')
        }

        if(scrollTop >= 24300){
            $('#se16_main').addClass('on')
        }

        if(scrollTop >= 24200){
            $('#icon_visual').addClass('on')
        }

        if(scrollTop >= 25100){
            $('#se17_main').addClass('on')
        }

        if(scrollTop >= 28100){
            $('#se18_container').addClass('on')
        }

        if(scrollTop >= 32800){
            $('#se21_img_box').addClass('on')
        }

        if(scrollTop >= 34400){
            $('#se22_post_box').addClass('on')
        }

        if(scrollTop >= 34150){
            $('#se22_main_img').addClass('on')
        }

        if(scrollTop >= 35450){
            $('#se23_color_box').addClass('on')
        }

        if(scrollTop >= 36450){
            $('#se24_left').addClass('on')
        }

        if(scrollTop >= 36450){
            $('#se24_right').addClass('on')
        }

        if(scrollTop >= 41700){
            $('#se03_visual').addClass('on')
        }

        if(scrollTop >= 43000){
            $('#section26').addClass('on')
        }

        if(scrollTop >= 43100){
            $('#se26_right_visual').addClass('on')
        }









    });



    /*  slide,click event section */

    gsap.to('.se07_visual_01 > div', {
        x: 4126,
        ease: "none",
        duration: 30, //speed
        repeat: -1,
    });
    gsap.to('.se07_visual_02 > div', {
        x: -3609,
        ease: "none",
        duration: 30, //speed
        repeat: -1,
    });








    let sc03_text01 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc03_text01,
        trigger: "#section03",
        start: "-450px top",
        end: "bottom bottom",
        scrub: 1,
    });
    sc03_text01.to("#se03_main .se03_main_overview_title",{opacity:1, x:0},0);
    sc03_text01.to("#se03_main .se03_main_title01",{x:0,y:0},0.2);
    sc03_text01.to("#se03_main .se03_main_title02",{x:0,y:0},0.3);
    sc03_text01.to("#se03_main .se03_main_title03",{x:0,y:0},0.4);
    sc03_text01.to("#se03_main .se03_main_title_text",{opacity:1, y:0},0.55);



    let sc03_text02 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc03_text02,
        trigger: "#section03",
        start: "-200px top",
        end: "bottom bottom",
        scrub: 1,
    });
    sc03_text02.to("#se03_graph02 .se03_graph02_bar01_text img",{y:0},0);
    sc03_text02.to("#se03_graph02 .se03_graph02_bar02_text img",{y:0},0.2);
    sc03_text02.to("#se03_graph02 .se03_graph02_bar03_text img",{y:0},0.4);
    sc03_text02.to("#se03_graph02 .se03_graph02_bar04_text img",{y:0},0.6);
    sc03_text02.to("#se03_graph02 .se03_graph02_text",{opacity:1, x:0},0.7);




    let sc02 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc02,
        trigger: "#section02", //기준(해당 section)
        start: "-500px top",
        end: "1200px bottom",
        scrub: 1,
    });
    //('선택자(구동이들어갈)',{구동,구동,구동},듀레이션(0~1))
    sc02.to(".se02_main_title",{opacity:1, y:0},0);



    let sc04 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc04,
        trigger: "#section04",
        start: "-500px top",
        end: "40% bottom",
        scrub: 1,
    });
    sc04.to(".se04_main_title img",{y:0},0);




    let sc04_box = gsap.timeline();
    ScrollTrigger.create({
        animation: sc04_box,
        trigger: "#section04",
        start: "top top",
        end: "60% bottom",
        scrub: 1,
    });
    sc04_box.to("#se04_brand01 .se04_brand01_box",{opacity:1, y:0},0);
    sc04_box.to("#se04_brand02 .se04_brand02_box",{opacity:1, y:0},0);




    let sc05 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc05,
        trigger: "#section05",
        start: "-300px top",
        end: "40% bottom",
        scrub: 1,
    });
    sc05.to(".se05_main_title img",{y:0},0);
    sc05.to("#se05_contents01 .se05_contents01_icon",{opacity:1, y:0},0.5);
    sc05.to("#se05_contents01 .se05_contents01_text",{opacity:1, y:0},0.5);
    sc05.to("#se05_contents02 .se05_contents02_icon",{opacity:1, y:0},1);
    sc05.to("#se05_contents02 .se05_contents02_text",{opacity:1, y:0},1);
    sc05.to("#se05_contents03 .se05_contents03_icon",{opacity:1, y:0},1.5);
    sc05.to("#se05_contents03 .se05_contents03_text",{opacity:1, y:0},1.5);






    let sc06 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc06,
        trigger: "#section06",
        start: "-100px top",
        end: "20% bottom",
        scrub: 1,
    });
    sc06.to(".se06_main_title",{opacity:1, x:0},0);
    sc06.to("#se06_visual .se06_box01",{opacity:1, x:0 ,y:0},0.3);
    sc06.to("#se06_visual .se06_box02",{opacity:1, x:0 ,y:0},0.3);
    sc06.to("#se06_visual .se06_box03",{opacity:1, x:0 ,y:0},0.3);
    sc06.to("#se06_visual .se06_box04",{opacity:1, x:0 ,y:0},0.3);



    let sc07 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc07,
        trigger: "#section07",
        start: "-300px top",
        end: "bottom bottom",
        scrub: 1,
    });
    sc07.to(".se07_main_title img",{y:0},0);


    let sc08 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc08,
        trigger: "#section08",
        start: "-500px top",
        end: "10% bottom",
        scrub: 1,
    });
    sc08.to(".se08_main_title",{opacity:1, x:0},0);
    sc08.to("#se08_persona_01 .persona_01_character",{y:0},0.1);
    sc08.to("#se08_persona_02 .persona_02_character",{y:0},1);





    let sc09 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc09,
        trigger: "#section09",
        start: "-200px top",
        end: "20% bottom",
        scrub: 1,
    });
    sc09.to(".se09_main_title img",{y:0},0);
    sc09.to(".se09_visual",{opacity:1, x:0},0);





    let sc10 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc10,
        trigger: "#section10",
        start: "-200px top",
        end: "20% bottom",
        scrub: 1,
    });
    sc10.to("#se10_main .se10_main_title img", {y:0},0);
    sc10.to("#se10_main .se10_main_text img",{y:0},0);


    let sc10_bg = gsap.timeline();
    ScrollTrigger.create({
        animation: sc10_bg,
        trigger: "#section10",
        start: "-300px top",
        end: "10% bottom",
        scrub: 1,
    });
    sc10_bg.to("#section09 .se10_bg",{background:'#ff773b'},0);
    sc10_bg.to("#section10",{background:'#ff773b'},0);


    let sc11 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc11,
        trigger: "#section11",
        start: "-200px top",
        end: "20% bottom",
        scrub: 1,
    });
    sc11.to("#se11_main .main_title",{opacity:1, x:0},0);
    sc11.to("#se11_main .main_text",{opacity:1, x:0},0);
    sc11.to("#se11_visual .visual_paper",{opacity:1, y:0},0.5);



    let sc12 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc12,
        trigger: "#section12",
        start: "-300px top",
        end: "80% bottom",
        scrub: 1,
    });
    sc12.to("#se12_main .main_title",{opacity:1, x:0},0);
    sc12.to("#se12_main .main_text",{opacity:1, x:0},0);
    sc12.to(".se12_main_visual",{opacity:1, x:0},0);
    sc12.to(".se12_left_character",{x:0, y:0},0.5);
    sc12.to("#se12_right_character .rig_character_01",{x:0, y:0},0.4);



    let sc12_character_02 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc12_character_02,
        trigger: "#section12",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
    });
    sc12_character_02.to("#se12_right_character .rig_character_02",{y:0},0.8);



    let sc13 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc13,
        trigger: "#section13",
        start: "-300px top",
        end: "-300px bottom",
        scrub: 1,
    });
    sc13.to(".se13_main_title img",{y:0},0);


    let sc13_bg = gsap.timeline();
    ScrollTrigger.create({
        animation: sc13_bg,
        trigger: "#section13",
        start: "-350px top",
        end: "10% bottom",
        scrub: 1,
    });
    sc13_bg.to("#section12 .se13_bg",{background:'#00d39d'},0);
    sc13_bg.to("#section13",{background:'#00d39d'},0);



    let sc13_visual = gsap.timeline();
    ScrollTrigger.create({
        animation: sc13_visual,
        trigger: "#section13",
        start: "-400px top",
        end: "bottom bottom",
        scrub: 1,
    });
    sc13_visual.to("#se13_back_img .back_img_01",{opacity:1, x:0},0.2);
    sc13_visual.to("#se13_back_img .back_img_02",{opacity:1, x:0},0.4);


    let sc14_01 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc14_01,
        trigger: "#section14",
        start: "-300px top",
        end: "20% bottom",
        scrub: 1,
    });
    sc14_01.to("#se14_login_main .main_title",{opacity:1, x:0},0);
    sc14_01.to("#se14_login_main .main_text",{opacity:1, x:0},0);
    sc14_01.to(".se14_login_mobile",{opacity:1, y:0},0.2);


    let sc14_02 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc14_02,
        trigger: "#section14",
        start: "-200px top",
        end: "bottom bottom",
        scrub: 1,
    });
    sc14_02.to("#se14_checklist_main .main_title",{opacity:1, x:0},0);
    sc14_02.to("#se14_checklist_main .main_text",{opacity:1, x:0},0);



    let sc14_03 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc14_03,
        trigger: "#section14",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
    });
    sc14_03.to("#checklist_step .step_01",{opacity:1, y:0},0.6);
    sc14_03.to("#checklist_step .step_02",{opacity:1, y:0},0.8);
    sc14_03.to("#checklist_step .step_03",{opacity:1, y:0},1.0);
    sc14_03.to("#checklist_step .step_04",{opacity:1, y:0},1.2);


    let sc15_bg = gsap.timeline();
    ScrollTrigger.create({
        animation: sc15_bg,
        trigger: "#section15",
        start: "-600px top",
        end: "10% bottom",
        scrub: 1,
    });
    sc15_bg.to("#section14 .se14_bg",{background:'#86a5ff'},0);
    sc15_bg.to("#section15",{background:'#86a5ff'},0);


    let sc15_01 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc15_01,
        trigger: "#section15",
        start: "-400px top",
        end: "30% bottom",
        scrub: 1,
    });
    sc15_01.to("#se15_main .main_title",{opacity:1, x:0},0.3);
    sc15_01.to("#se15_main .main_text",{opacity:1, x:0},0.3);
    sc15_01.to("#se15_visual .main_img",{opacity:1, y:0},0.3);
    sc15_01.to("#se15_visual .main_introduce_01",{opacity:1, x:0},0.3);




    let sc15_02 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc15_02,
        trigger: "#section15",
        start: "-3500px top",
        end: "bottom bottom",
        scrub: 1,
    });
    sc15_02.to("#se15_visual .main_introduce_02",{opacity:1, x:0},0.5);
    sc15_02.to("#se15_visual .main_introduce_03",{opacity:1, x:0},0.5);
    sc15_02.to("#se15_visual .main_introduce_03_icon",{opacity:1, x:0},0.6);



    let sc15_03 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc15_03,
        trigger: "#section15",
        start: "1000px top",
        end: "bottom bottom",
        scrub: 1,
    });
    sc15_03.to("#se15_visual .main_introduce_04",{opacity:1, x:0},0);
    sc15_03.to("#se15_visual .main_introduce_05",{opacity:1, x:0},0.5);
    sc15_03.to("#se15_visual .main_introduce_05_box",{opacity:1, x:0},0.6);






    let sc16 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc16,
        trigger: "#section16",
        start: "-250px top",
        end: "10% bottom",
        scrub: 1,
    });
    sc16.to("#se16_main .main_title img",{y:0},0);
    sc16.to("#icon_visual .icon_main_box",{opacity:1, x:0},0);


    let sc17_01 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc17_01,
        trigger: "#section17",
        start: "-500px top",
        end: "20% bottom",
        scrub: 1,
    });
    sc17_01.to("#se17_main .main_title img",{y:0},0);
    sc17_01.to("#se17_main .main_text img",{y:0},0);
    sc17_01.to("#se17_left_visual .left_visual_mobile",{opacity:1, y:0},0);




    let sc17_02 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc17_02,
        trigger: "#section17",
        start: "top top",
        end: "3% bottom",
        scrub: 1,
    });
    sc17_02.to("#se17_left_visual .left_visual_img01",{opacity:1, y:0},0);
    sc17_02.to("#se17_right_visual .rig_visual_mobile",{opacity:1, y:0},0);


    let sc17_03 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc17_03,
        trigger: "#section17",
        start: "300px top",
        end: "bottom bottom",
        scrub: 1,
    });
    sc17_03.to("#se17_right_visual .rig_visual_sub_text", {opacity:1, x:0},0);
    sc17_03.to("#se17_left_visual .left_visual_sub_text_01",{opacity:1, x:0},0.2);
    sc17_03.to("#se17_left_visual .left_visual_sub_text_02",{opacity:1, x:0},0.5);


    let sc18 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc18,
        trigger: "#section18",
        start: "-400px top",
        end: "10% bottom",
        scrub: 1,
    });
    sc18.to(".se18_main_title img", {y:0},0);



    let sc19 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc19,
        trigger: "#section19",
        start: "-300px top",
        end: "bottom bottom",
        scrub: 1,
    });
    sc19.to("#se19_main .main_title", {opacity:1, x:0},0);
    sc19.to("#se19_main .main_text", {opacity:1, x:0},0);
    sc19.to("#se19_mobile_img .mobile_back_paper", {opacity:1, y:0},0);
    sc19.to("#se19_mobile_img .qa_mobile", {opacity:1, y:0},0);
    sc19.to("#character_box .yellow_character", {x:0, y:0},0.5);
    sc19.to("#character_box .yellow_character", {x:0, y:0},0.5);
    sc19.to("#character_box .green_character", {x:0, y:0},0.6);


    let sc20 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc20,
        trigger: "#section20",
        start: "-1500px top",
        end: "bottom bottom",
        scrub: 1,
    });
    sc20.to("#qa_visual_container .qa_img_01", {opacity:1, y:0},0);
    sc20.to("#qa_visual_container .qa_img_sub_text_01", {opacity:1, x:0},0);
    sc20.to("#qa_visual_container .qa_mobile", {opacity:1, y:0},0);
    sc20.to("#qa_visual_container .qa_img_02", {opacity:1, y:0},0);




    let sc21 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc21,
        trigger: "#section21",
        start: "-900px top",
        end: "bottom bottom",
        scrub: 1,
    });
    sc21.to(".se21_challenge_mobile", {opacity:1, y:0},0);
    sc21.to(".se21_main_text", {opacity:1, x:0},0);


    let sc22 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc22,
        trigger: "#section22",
        start: "-800px top",
        end: "bottom bottom",
        scrub: 1,
    });
    sc22.to(".se22_main_text", {opacity:1, x:0},0);


    let sc23 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc23,
        trigger: "#section23",
        start: "-550px top",
        end: "10% bottom",
        scrub: 1,
    });
    sc23.to("#se23_main .main_title img", {y:0},0);
    sc23.to("#se23_main .main_text img", {y:0},0);
    sc23.to(".se23_font_img", {opacity:1, x:0},0.2);


    let sc24 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc24,
        trigger: "#section24",
        start: "-300px top",
        end: "10% bottom",
        scrub: 1,
    });
    sc24.to(".se24_main_title img", {y:0},0);


    let sc25_01_title = gsap.timeline();
    ScrollTrigger.create({
        animation: sc25_01_title,
        trigger: "#section25",
        start: "top top",
        end: "10% bottom",
        scrub: 1,
    });
    sc25_01_title.to("#se25_se01_main .main_title img", {y:0},0.2);
    sc25_01_title.to("#my_page_right .my_page_img_01", {opacity:1, y:0},0.2);
    sc25_01_title.to("#my_page_right .sub_text_01", {opacity:1, y:0},0.4);




    let sc25_01_visual = gsap.timeline();
    ScrollTrigger.create({
        animation: sc25_01_visual,
        trigger: "#section25",
        start: "-4300px top",
        end: "bottom bottom",
        scrub: 1,
    });
    sc25_01_visual.to("#my_page_mobile_box .my_page_mobile", {opacity:1, y:0},0.8);
    sc25_01_visual.to("#my_page_mobile_box .my_page_img_02", {opacity:1, y:0},0.6);
    sc25_01_visual.to("#my_page_mobile_box .sub_text_02", {opacity:1, x:0},0.6);


    let sc25_02 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc25_02,
        trigger: "#section25",
        start: "-2600px top",
        end: "10px bottom",
        scrub: 1,
    });
    sc25_02.to("#se25_se02_box_01 .my_page_mobile_02", {opacity:1, x:0},0);
    sc25_02.to("#se25_se02_box_02 .box_01", {opacity:1, x:0},0.2);
    sc25_02.to("#se25_se02_box_03 .box_02", {opacity:1, x:0},0.4);


    let sc25_03 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc25_03,
        trigger: "#section25",
        start: "-3000px top",
        end: "bottom bottom",
        scrub: 1,
    });
    sc25_03.to("#se25_se03 .se25_se03_main_title img", {y:0},0);




    let sc26 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc26,
        trigger: "#section26",
        start: "-300px top",
        end: "10% bottom",
        scrub: 1,
    });
    sc26.to("#se26_left_box .left_text_01", {opacity:1, x:0},0);
    sc26.to("#se26_left_box .left_text_02 img", {y:0},0);
    sc26.to(".right_text", {opacity:1, x:0},0);











})


