$(document).ready(function() {
  /*  $('.menu a').on('click', function(e)  {
        var currentAttrValue = $(this).text();
 
        // Show/Hide Tabs
        $('.wrap .hidden').addClass(currentAttrValue).removeClass('hidden');
 		$('.wrap .hidden h1').text(currentAttrValue);
        // Change/remove current tab to active
        //$(this).parent('li').addClass('active').siblings().removeClass('active');
 		
        e.preventDefault();
    });*/
	$(".home").click(function() {
		$(".data").text("home");
	});
	$(".cseI").click(function() {
    	$(".data").text("cseI");
    });
    $(".cseII").click(function() {
    	$(".data").text("cseII");
    });
    $(".cseIII").click(function() {
    	$(".data").text("cseIII");
    });
    $(".cseIV").click(function() {
    	$(".data").text("cseIV");
    });
    $(".cse").click(function() {
    	$(".data").text("cse");
    });
    $(".eceI").click(function() {
        $(".data").text("eceI");
    });
    $(".eceII").click(function() {
        $(".data").text("eceII");
    });
    $(".eceIII").click(function() {
        $(".data").text("eceIII");
    });
    $(".eceIV").click(function() {
        $(".data").text("eceIV");
    });  
    $(".ece").click(function() {
  		$(".data").text("ece");
    });
    $(".departments").click(function() {
		$(".data").text("departments");
	});
    $(".delta").click(function() {
        $(".data").text("delta");
    });
    $(".spider").click(function() {
        $(".data").text("spider");
    });
    $(".clubs").click(function() {
        $(".data").text("clubs");
    });
    $(".pragyan").click(function() {
        $(".data").text("pragyan");
    });
    $(".festember").click(function() {
        $(".data").text("festember");
    }); 
    $(".fests").click(function() {
        $(".data").text("fests");
    });
    $(".about").click(function() {
        $(".data").text("about");
    });
    $(".contact").click(function() {
        $(".data").text("contact");
    });
});