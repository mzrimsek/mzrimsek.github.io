function isVisible(i){var e=$(i).offset().top+$(i).outerHeight()/3,n=$(window).scrollTop()+$(window).innerHeight();return n>e}function fadeIn(i){$(i).each(function(){isVisible($(this))&&"0"==$(this).css("opacity")&&$(this).animate({opacity:"1"},300)})}function determineNavToShow(){var i=window.location.hash.substring(1);i||(i="resume",window.location.href=window.location.href+"#"+i),$(".main").hide(),$("#"+i).show(),$(".nav").find(".active").removeClass("active");var e=$(".nav").children("#"+i+"Nav");e.addClass("active")}function isValidZip(i){return/^\d{5}(-\d{4})?$/.test(i)}$(document).ready(function(){determineNavToShow(),$(".nav a").on("click",function(){$(".nav").find(".active").removeClass("active");var i=$(this).parent();i.addClass("active"),$(this).hasClass("dropdown-toggle")||$(".navbar-collapse").collapse("hide")}),$(window).on("hashchange",function(){determineNavToShow()}),$("#resume .section").each(function(){$(this).css("opacity","0")}),fadeIn("#resume .section"),$(window).scroll(function(){fadeIn("#resume .section")}),$(".input-group input").on("keyup",function(i){13===i.keyCode&&$(".input-group button").click()}),$(document).on("click",".todo-item",function(){$(this).children(".todo-checked").click()}),$(".weather-query input").on("input",function(){isValidZip($(this).val())?$(".weather-query button").prop("disabled",!1):$(".weather-query button").prop("disabled",!0)}),$(".weather-query button").on("click",function(){var i=$(".weather-query input");i.val(""),$(this).prop("disabled",!0)})});