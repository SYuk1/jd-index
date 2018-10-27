$(function () {

	initbanner();

	function initbanner() {
		new Swiper('.swiper-container', {
              direction: 'horizontal', // 垂直切换选项
              loop: true, // 循环模式选项

              // 如果需要分页器
              pagination: {
                el: '.swiper-pagination',
              },

              autoplay: {
                delay: 900,

                stopOnLastSlide: false,

                disableOnInteraction: false
              },

              // 如果需要前进后退按钮
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },

              // 如果需要滚动条
              scrollbar: {
                el: '.swiper-scrollbar',
              },
            })
	}
   
	//header背景   
	var h = 30;
	var opacity = 0;
	$(document).on('scroll', function() {

		var scrollTop = $(this).scrollTop();

		// console.log(scrollTop);

		if (scrollTop >= h) {
			if(opacity == 1) {
				// console.log('aaa');
				return;
			} else {

			opacity = 1;

			$('#header').css({'background-color': 'rgba(228,57,60,' + opacity +')'});
			} 
		} else {
			opacity = 0;
			// console.log('bbb');
			$('#header').css({'background-color': 'rgba(228,57,60,' + opacity +')'});
		}
	
	})

	// 京东快报轮播
	newsCarouser();

	function newsCarouser() {
		var $news = $('#news');

		var $lis = $news.find('li');

		var height = $lis.eq(0).height();

		var index = 0;
		var duration = 1000;

		setInterval(function () {
			if (index >= $lis.length - 1) {
				index  = 0;
				$news.css({top: -index * height + 'px'});
			} else {
				index ++;
			}

			if (index == 0) {
				index = 1;
			}
			$news.animate({top : -index * height + 'px'}, 500)
		}, duration)
	}
	//秒杀计时器
	rushTime(3);

	function rushTime(h) {
		// var d = new Date();
		// // console.log('d ==>', d);
		// var time = d.getTime();
		// console.log('time ==>', time);
		var time = h * 1000 * 60 * 60;
		console.log(time);
		setInterval(function() {
			time -= 1000;
			var hours = Math.floor(time / 1000 / 60 / 60 % 24);
			hours = hours >= 10 ? hours : '0' + hours;

			var mins = Math.floor(time / 1000 / 60 % 60);
			mins = mins >= 10 ? mins : '0' + mins;

			var secs = Math.floor(time / 1000 % 60);
			secs = secs >= 10 ? secs : '0' +mins;
			$('#hours').text(hours);
			$('#mins').text(mins);
			$('#secs').text(secs);
		}, 1000)
	}

})


