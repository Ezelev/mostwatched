var visitedElements = [];
window.onload = function() {

	var mostWatched = [];
	var timer;
	var secondsHovered;
	var found = false;
	for (var i = 0; i < document.body.childNodes.length; i++) {
	
	    document.body.childNodes[i].onmouseover=function(e) {

			var e = e || window.event, el = e.target || el.srcElement;
			
			if(el.id) {
				timer = Date.now();

				for (var i = 0; i < visitedElements.length; i++){
				  if (visitedElements[i].id == el.id){
					found = true;
				  }
				}
				
				if(!found) {
					visitedElements.push({ id: el.id , time: 0 });
				}
				//console.log(visitedElements);
			}
			
		};

		document.body.childNodes[i].onmouseout=function(e) {
			var e = e || window.event, el = e.target || el.srcElement;
			
			if(el.id) {
				timer = Date.now() - timer;  
				secondsHovered = parseFloat(timer/1000);
				
				for (var i = 0; i < visitedElements.length; i++){
				  if (visitedElements[i].id == el.id){
					visitedElements[i].time = visitedElements[i].time + secondsHovered;
				  }
				}
				
			}
			
			visitedElements = visitedElements.sort(function(a,b) {
				return b.time - a.time;
			});

		};

		
    }
			
	<!-- for (var i = 0; i < visitedElements.length; i++){ -->
		<!-- mostWatched.push(visitedElements[i].id); -->
	<!-- } -->
		
	<!-- console.log(mostWatched); -->

};
