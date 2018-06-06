$(".ftoollist li").hover(function(){

    var $this = $(this);

    $this.addClass("on").siblings().removeClass("on");

    var $preNumber = $this.index();

    $(".fimglist li").removeClass("onpre");

    $(".fimglist li:eq($preNumber)").addClass("onpre");

    var distance = 780;

    distance = distance * $preNumber;

    distance = distance * -1;

    $(".fimglist").stop().animate({left: distance + "px"}, {duration: 500});


});
