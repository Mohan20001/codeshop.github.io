var btn0=document.getElementById('exitBtn');
						var btn1=document.getElementById('navBar');
						var navC=document.getElementById('navCon');
						btn1.onclick=function() {
										navC.style.display="block";
						}
						btn0.onclick=function() {
						navC.style.display="none";
										
						}
						
						
						//text script.22222222222.
						$(document).ready(function() {
						$('#tutorial')	.click(function() {
								$('#subTt').toggle();	
						});	
					});
					
					
					
					
					//next script.333333333.
					$(document).ready(function() {
									$('#Html').click(
													function () {
																	$('#htmlSub'). toggle();
													});
				
					
					$('#css').click(
													function () {
																	$('#cssSub'). toggle();
													});
													
													$('#js').click(
													function () {
																	$('#jsSub'). toggle();
													});
													
				});
