;
(function() {
	function getTop(clsName, index) {
		var obj = document.getElementsByClassName(clsName)[index];
		return obj.getBoundingClientRect().top;
	}

	function getDom(clsName, index) {
		var obj = document.getElementsByClassName(clsName)[index];
		return obj;
	}

	function fadeleft(obj) {
		obj.classList.add('fadeInLeft');
	}

	function animated(obj) {
		obj.classList.add('animated');
	}

	function faderight(obj) {
		obj.classList.add('fadeInRight');
	}
	function paperN(index){
		if(getTop('paper', index) < 430) {
			animated(getDom('paper', index))
			fadeleft(getDom('paper', index))
		}
	}
	window.onload = function() {
		/*第二页动画的触发*/
		paperN(0);
		if(getTop('midi1', 0) < 610) {
			animated(getDom('midi1', 0))
			faderight(getDom('midi1', 0))

		}

	}

	window.addEventListener('scroll', function() {
		var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
		/*第三页动画的触发*/

		paperN(1);
		if(getTop('stepDiv', 0) < 400) {
			animated(getDom('stepDiv', 0))
			fadeleft(getDom('stepDiv', 0))
		}
		if(getTop('midi2', 0) < 400) {
			animated(getDom('midi2', 0))
			faderight(getDom('midi2', 0))
		}


		/*第四页动画的触发*/

		paperN(2);
		if(getTop('midi3', 0) < 400) {
			animated(getDom('midi3', 0))
			faderight(getDom('midi3', 0))
		}


		/*第五页的动画*/

		paperN(3);
		if(getTop('midi4', 0) < 400) {
			animated(getDom('midi4', 0))
			faderight(getDom('midi4', 0))
		}


		/*第五页的动画*/

		paperN(4);
		if(getTop('midi5', 0) < 400) {
			animated(getDom('midi5', 0))
			faderight(getDom('midi5', 0))
		}


	}, false)
	
	$('.asideR>div').hover(function() {
				$('.ze').eq($(this).index()).css('display','block');
			}, function() {
				$('.ze').eq($(this).index()).css('display','none');
			});
})()