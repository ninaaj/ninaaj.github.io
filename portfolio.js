$(document).ready(function() {
    
	setHeight($('#edu'), $('#skills'));
    setHeight($('#art-text'), $('#art-pic'));

    $(window).on(resize, function() {
		setHeight($('#edu'), $('#skills'));
		setHeight($('#art-text'), $('#art-pic'));
    });
        
});
$(window).scroll(
    {
        prev_top: 0
    }, 
    function () {
    
		var bar_limit = 438;
		var cur_top = $(window).scrollTop();
		var list_limit = 196;
    
		changeName();
		cur_top > bar_limit ?  changeBar(1): changeBar(0); 
		cur_top > list_limit ?  changeList(1): changeList(0); 
	
		function changeBar(show){
			var bar = document.getElementById("menu");
			if(show){
				bar.style.backgroundColor = 'rgba(237,148,113,1.0)';
				bar.style.boxShadow = '0 8px 6px -6px rgba(0,0,0,0.2)';
			}
			else{
				bar.style.backgroundColor = 'rgba(237,148,113,0.0)';
				bar.style.boxShadow = '0 0 0 0 rgba(0,0,0,0.2)';
			}
		}
	
		function changeName(){
			var top_limit = 30;
			var name = document.getElementById("name");
			if(cur_top>top_limit && cur_top<bar_limit)name.style.opacity = 0.0;
			else name.style.opacity = 0.75;
		}

		function changeList(show){
			var list = document.getElementById("list");
			if(show){
				list.style.backgroundColor = 'rgba(237,148,113,1.0)';
				list.style.boxShadow = '0 4px 6px 0px rgba(0,0,0,0.2)';
			}
			else{
				list.style.backgroundColor = 'rgba(255,255,255,0.0)';
				list.style.boxShadow = '0 0 0 0 rgba(0,0,0,0.0)';
			}
		}

		if (cur_top < this.prev_top) $(".menu-bar").show();
	
		else $(".menu-bar").hide();
    	
		this.prev_top = cur_top;
});
function setHeight(a, b) {
	var height = 0;
	a.height() > b.height() ?  height = a.height(): height = b.height(); 
	a.css('height', height); 
	b.css('height', height); 
}