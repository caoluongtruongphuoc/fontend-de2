$(function(){
    // dùng để tạo ra kiểu select option có ảnh
    $('.language-item input').change(function(){
        var value = $('.language-item input:checked').val();
        var src = "";
        var name = "";
        if(value==1){
            src = 'assets/images/header/Flag.svg';
            name = "Tiếng Việt";
        }
        else{
            src = 'assets/images/header/Flag.svg';
            name = "English";
        }
        $('.language__show--img img').attr({'src':src});
        $('.language__show--name').text(name);
    });
    // nút toggle header bot
    $('.button-collapse').click(function(){
        $('.header__bot').slideToggle();
    });
    // header bot : xóa style="display: none"; nếu thay đổi width > 767px 
    $(window).resize(function(){
        var windowWidth = $(window).width();
        if(windowWidth > 767){
            $('.header__bot').removeAttr('style');
        }
    });
    // slider 
    $('.main__slider').slick({
        lazyLoad: 'ondemand',
        slidesToShow:  1,
        slidesToScroll: 1,
        prevArrow: '<div class="main__slider--prev-box"><div class="main__slider--prev-bg"></div><div class="icon-chevron-thin-left main__slider--prev-icon"></div></div>',
        nextArrow: '<div class="main__slider--next-box"><div class="main__slider--next-bg"></div><div class="icon-chevron-thin-right main__slider--next-icon"></div>',
    });
    // product slider
    $('.top-selling').slick({
        rows: 2,
        slidesToShow:  4,
        slidesToScroll: 2,
        prevArrow: '<div class="main__product--prev-hidden"></div>',
        nextArrow: '<div class="main__product--next-hidden"></div>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2           
                }
           },
           {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, 
                    slidesToScroll: 1,           
                }
            },
        ] 
    });
    $('.main__product--prev-show').click(function(){
        $('.main__product--prev-hidden').click();
    });
    $('.main__product--next-show').click(function(){
        $('.main__product--next-hidden').click();
    });
    // đếm ngược banner
    var startTime = new Date().getTime();
    var deadline = startTime + 231*24*3600*1000; // tổng giây 231 ngày
    // cập nhật mỗi giây
    var x = setInterval(function(){
        var currentTime = new Date().getTime();
        var totalSeconds = (deadline-currentTime)/1000;
        //tính
        var days = Math.floor(totalSeconds/(3600*24));
        var hours = Math.floor((totalSeconds%(3600*24))/3600);
        var minutes = Math.floor((totalSeconds%3600)/60);
        var seconds = Math.floor(totalSeconds%60);
        // gán
        $('.days').text(days);
        $('.hours').text(hours);
        $('.minutes').text(minutes);
        $('.seconds').text(seconds);
        // clear
        if(totalSeconds<0) clearInterval(x);
    },1000);
    
});