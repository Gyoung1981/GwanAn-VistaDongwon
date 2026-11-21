$(function(){


	jQuery(document).ready(function($) {
		var isTouchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints;

		if (isTouchDevice) {
			$(window).load(function(){
				checkMobile();    
			 });   
			 
			 var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기

			function checkMobile(){
				
		 
				if ( varUA.indexOf('android') > -1) {
					$('body').addClass('android');
					//안드로이드
					return "android";
				} else if ( varUA.indexOf("iphone") > -1||varUA.indexOf("ipad") > -1||varUA.indexOf("ipod") > -1 ) {
					$('body').addClass('ios');
					return "ios";
				}
			}
			
			var userAgent = window.navigator.userAgent;
			var isChromeMobile = userAgent.indexOf('CriOS');
			
			if(isChromeMobile > -1) {
				//alert('po');
				$('body').addClass('chrome');
			}

			if(isChromeMobile > -1 && varUA.indexOf("iphone") > -1||varUA.indexOf("ipad") > -1||varUA.indexOf("ipod") > -1) {
				//$('#fullpage').removeAttr('id');
				//alert('po');
			}

		}//isTouchDevice
		else {
			$(window).load(function(){
				checkBroswer();    
			 }) ;    


			function checkBroswer(){

				var agent = navigator.userAgent.toLowerCase(),
					name = navigator.appName,
					browser = '';
			  
				// MS 계열 브라우저를 구분
				if(name === 'Microsoft Internet Explorer' || agent.indexOf('trident') > -1 || agent.indexOf('edge/') > -1) {
					browser = 'ie';
					if(name === 'Microsoft Internet Explorer') { // IE old version (IE 10 or Lower)
						agent = /msie ([0-9]{1,}[\.0-9]{0,})/.exec(agent);
						browser += parseInt(agent[1]);
						
					} else { // IE 11+
						if(agent.indexOf('trident') > -1) { // IE 11
							browser += 11;
							
						} else if(agent.indexOf('edge/') > -1) { // Edge
						   browser = 'edge';
						   
						}
					}
					$('body').addClass('ie');

				} else if(agent.indexOf('safari') > -1) { // Chrome or Safari
						
					if(agent.indexOf('opr') > -1) { // Opera
						browser = 'opera';
					} else if(agent.indexOf('chrome') > -1) { // Chrome
						browser = 'chrome';
						$('body').addClass('chrome');
					} else { // Safari
						browser = 'safari';

						 function isMac(){ 
							 var filter = "mac|macintel"; 
							 if (navigator.platform ) { 
								 if (filter.indexOf(navigator.platform.toLowerCase()) < 0) { 
									 return true; 
								} else { 
									return false; 
								} 
							} 
							return false; 
						}

						if(isMac()){
							alert('사용하시는 브라우저는 지원하지 않는 브라우저입니다. 다른 브라우저로 접속 바랍니다.');
							window.location = "./ierow.html";
						} 


						
						
					}
				} else if(agent.indexOf('firefox') > -1) { // Firefox
					browser = 'firefox';
					
				}
			$('body').addClass(browser);
			//alert(browser);

			}
		}

});//ready

	
});