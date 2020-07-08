// slider functions

// The querySelector() method only returns the first element that matches the specified selectors. To return all the matches, use the querySelectorAll() method instead.

document.querySelector('.right').addEventListener('click', function() {

	rightSlider()

});
document.querySelector('.left').addEventListener('click', function() {

	leftSlider()

});


function rightSlider() {
// "classList"=This property is useful to add, remove and toggle CSS classes on an element.
	document.querySelector('.welcome-part').classList.add('forward');
	document.querySelector('.welcome-part').classList.remove('back');
	document.querySelector('.about').classList.remove('not-visible');
	document.querySelector('.about').classList.add('back');
	document.querySelector('.about').classList.remove('forward');

	document.querySelector('.right').classList.add('colored');
	document.querySelector('.left').classList.remove('colored');

}

function leftSlider() {

	document.querySelector('.welcome-part').classList.toggle('forward');/*bujhtesi na*/
	document.querySelector('.welcome-part').classList.toggle('back'); /*welcome part er forward movement*/


	document.querySelector('.about').classList.toggle('forward'); /*welcome part er forward movement*/
	document.querySelector('.about').classList.toggle('back'); /* bujhtesi na .back fixed hye jay*/

	document.querySelector('.right').classList.toggle('colored');
	document.querySelector('.left').classList.toggle('colored');

}

//add function to showMore btn

if (window.matchMedia("(max-width: 500px)").matches) {

	$(".show-link").click(function() {


//	$(".project-2").css("margin-left", "0px");

	for(var i = 3; i < 7; i++) {

		if(document.querySelector(".project-" + i).style.display === "none") {

			document.querySelector(".project-" + i).style.display = "block";

			document.querySelector(".project-2").style.marginRight = "0px";

			$(".more").addClass("toggle"); /*to disappear showmore button when it clicked*/

			$(".less").removeClass("toggle");


		} else {

			document.querySelector(".project-" + i).style.display = "none";
//			document.querySelector(".project-2").style.marginRight = "90px";


			$(".more").removeClass("toggle");
			$(".less").addClass("toggle");


		}

}
	});

	} else {

		$(".show-link").click(function() {


	for(var i = 3; i < 7; i++) {

		if(document.querySelector(".project-" + i).style.display === "none") {

			document.querySelector(".project-" + i).style.display = "block";

			document.querySelector(".project-2").style.marginLeft = "0px";

			$(".more").addClass("toggle");

			$(".less").removeClass("toggle");


		} else {

			document.querySelector(".project-" + i).style.display = "none";

						document.querySelector(".project-2").style.marginLeft = "90px";

			$(".more").removeClass("toggle");
			$(".less").addClass("toggle");

		}




	}
});

}

// add function to mobile nav icons

document.querySelector('.nav-icon').addEventListener('click', function()  {

	document.querySelector('.menu').classList.add('opened'); /*css open class*/
	document.querySelector('.menu').classList.remove('closed');

	document.querySelector('.close').style.display = 'block';

});

document.querySelector('.close').addEventListener('click', function() {

	document.querySelector('.menu').classList.remove('opened');
	document.querySelector('.menu').classList.add('closed');

	document.querySelector('.close').style.display = 'none';


})
