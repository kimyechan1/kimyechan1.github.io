
	// function aname(vars){
	// 	alert(vars+ "이름출력")
	// }
	// aname(김예찬)

	$(document).ready(function(){
		// alert("콜백함수 실행")
		$(".openMOgnb").click(function(){
			// alert();
			// $(".header_cont").css("display", "block");
			// header 아이디영역 백그라운드 추가
			$(".header_cont").slideDown("slow");
			$("#header").addClass("on");
		});
		$(".closePop").click(function(){
			// $(".header_cont").css("display","none");
			$(".header_cont").slideUp("fast");
			$("#header").removeClass("on")
		});
		
	});