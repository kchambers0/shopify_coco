// Layout.
var startPos = 0;
var currentPos = 0;
var endPos = 0;
var selected = 0;

function touchStart(e){
	startPos = e.changedTouches[0].pageX;
}
function touchMove(e){
	currentPos = startPos - e.changedTouches[0].pageX;
	var offsetLeft = (endPos + (currentPos*-1))
	if(offsetLeft >= 0){
		offsetLeft = offsetLeft/4
	}else if(offsetLeft <= window.innerWidth*-4){
		offsetLeft = (window.innerWidth*-4) + (currentPos/-4);
	}
	document.querySelector('.content-container').style.marginLeft=offsetLeft+'px';
	document.querySelector('.selector').style.left=offsetLeft/-5+'px';
}
function touchEnd(e){
	if(currentPos >= (window.innerWidth)/3){
		//Select up
		if(selected >=4){
			selected=4
		}else{
			selected++;
		}
	}else if(currentPos <= (window.innerWidth)/-3){
		//Select down
		if(selected <= 0){
			selected=0;
		}else{
			selected--;
		}
	}

	move();
}
function move(){
	document.querySelector('.content-container').style.transition="margin .4s";
	document.querySelector('.selector').style.transition="left .4s";
	document.querySelector('.content-container').style.marginLeft=(window.innerWidth*selected*-1)+'px';
	document.querySelector('.selector').style.left=(window.innerWidth*selected)/5+'px';
	endPos=(window.innerWidth*selected*-1)


	setTimeout(function(){
		document.querySelector('.content-container').style.transition="";
		document.querySelector('.selector').style.transition="";
	},400)
}
function select(num){
	selected=num;
	move();
}

if(document.querySelector('.selector')){
	document.querySelector('.viewport').addEventListener('touchstart',touchStart);
	document.querySelector('.viewport').addEventListener('touchmove',touchMove);
	document.querySelector('.viewport').addEventListener('touchend',touchEnd);
	document.querySelector('.viewport').addEventListener('touchcancel',touchEnd);

	document.querySelector('.selector').addEventListener('touchstart',touchStart);
	document.querySelector('.selector').addEventListener('touchmove',touchMove);
	document.querySelector('.selector').addEventListener('touchend',touchEnd);
	document.querySelector('.selector').addEventListener('touchcancel',touchEnd);
}

for(var i = 1; i <= 5; i++){
	document.querySelector('#icon-'+i).addEventListener('click',function(e){
		select(parseInt(this.id.substr(-1,1))-1)
	});
}

//Intercept cart addition
// var forms = document.querySelectorAll('form');
// forms.forEach(function(form){
// 	form.onsubmit = submit
// })

// function submit(event){
// 	event.preventDefault();
// 	console.log(event)
// 	var f_data = new FormData(this);
// 	debugger;
// }


// fetch('/collections/frontpage').then(function(res){
// 	return res.text()
// }).then(function(html){
// 	console.log(html);
// 	debugger;
// })