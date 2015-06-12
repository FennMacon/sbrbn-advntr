
$(document).ready(function(){
	$("#imgbaja").hide();
	$("#imgbelo").hide();
	$("#imgchill").hide();
	$("#imgclark").hide();
	$("#imgconcord").hide();
	$("#imgfin").hide();
	$("#imggreta").hide();
	$("#imghome").hide();
	$("#imgleaftype").hide();
	$("#imgmonks").hide();
	$("#imgnachurch").hide();
	$("#imgrlbh").hide();
	$("#imgtight").hide();
	$("#imgtravelone").hide();
	$("#imgworcester").hide();
		$("#lconcord").hide();
		$("#lhome").hide();
		$("#lmonks").hide();
		$("#lbaja").hide();
		$("#lnah").hide();
		$("#lworcester").hide();
		$("#lgreta").hide();
		$("#lchill").hide();
		$("#lclark").hide();
		$("#ltravel").hide();
		$("#lbajatwo").hide();
		$("#lwootwo").hide();


	$("#lna").click(function(){
 		$("#imgtitle").hide();
 		$("#imgnachurch").fadeIn();
 		$("#text").text("You're in North Andover . . .");
 		$("#lna").hide();
 		$("#lconcord").fadeIn();
 		$("#lhome").fadeIn();
 	});
	 	$("#lconcord").click(function(){
	 		$("#imgnachurch").hide();
	 		$("#imggreta").hide();
	 		$("#imgconcord").fadeIn();
	 		$("#text").text("You're in Concord . . .");
	 		$("#lconcord").hide();
	 		$("#lchill").hide();
	 		$("#lhome").hide();
	 		$("#lmonks").fadeIn();
	 		$("#lworcester").fadeIn();
	 	});
			$("#lmonks").click(function(){
		 		$("#imgconcord").hide();
		 		$("#imgmonks").fadeIn();
		 		$("#text").text("Wanna get high?");
		 		$("#lmonks").hide();
		 		$("#lworcester").hide();
		 		$("#lbaja").fadeIn();
		 		$("#lnah").fadeIn();			
			});
				$("#lbaja").click(function(){
			 		$("#imgmonks").hide();
			 		$("#imgbaja").hide();
			 		$("#imgbaja").fadeIn();
			 		$("#text").text("OH FUCK! A TROPICAL LIME STORM!");
			 		$("#lbaja").hide();
			 		$("#lnah").hide();
			 		$("#lwootwo").fadeIn();
			 		$("#lbajatwo").fadeIn();			
				});
					$("#lbajatwo").click(function(){
				 		$("#imgbaja").hide();
				 		$("#imgbaja").fadeIn();
				 		$("#text").text("OH SHIT! IT'S ANOTHER ONE!");
				 		$("#lwootwo").hide();
				 		$("#lbajatwo").hide();
				 		$("#lworcester").fadeIn();			
					});
				$("#lnah").click(function(){
			 		$("#imgconcord").hide();
			 		$("#imgmonks").fadeIn();
			 		$("#text").text("Wanna get high?");
			 		$("#lmonks").hide();
			 		$("#lworcester").hide();
			 		$("#lbaja").fadeIn();
			 		$("#lnah").fadeIn();			
				});
			$("#lworcester").click(function(){
		 		$("#imgconcord").hide();
		 		$("#imgbaja").hide();
		 		$("#imgworcester").fadeIn();
		 		$("#text").text("You're in Worcester . . .");
		 		$("#lmonks").hide();
		 		$("#lworcester").hide();
		 		$("#lclark").fadeIn();
		 		$("#ltravel").fadeIn();				
			});
	 	$("#lhome").click(function(){
	 		$("#imgnachurch").hide();
	 		$("#imghome").fadeIn();
	 		$("#text").text("You're home . . .");
	 		$("#lconcord").hide();
	 		$("#lhome").hide();
	 		$("#lgreta").fadeIn();
	 		$("#lchill").fadeIn();				
		});
			$("#lgreta").click(function(){
		 		$("#imghome").hide();
		 		$("#imgchill").hide();
		 		$("#imggreta").fadeIn();
		 		$("#text").text("Arf!");
		 		$("#lgreta").hide();
		 		$("#lchill").hide();
		 		$("#lconcord").fadeIn();
		 		$("#lchill").fadeIn();				
			});
			$("#lchill").click(function(){
		 		$("#imghome").hide();
		 		$("#imggreta").hide();
		 		$("#imgchill").fadeIn();
		 		$("#text").text("You are smoking . . .");
		 		$("#lgreta").hide();
		 		$("#lchill").hide();
		 		$("#lconcord").hide();
		 		$("#lgreta").fadeIn();				
			});
});