function formValidate() {
	$('form').submit(function(e) {

		const email = /[a-zA-Z0-9._+-]+\@[a-zA-Z0-9]+\.[a-z]{2,3}/;
		const creditCard = /^\d{13,16}$/;
		const zipCode = /^\d{5}$/;
		const cvv = /^\d{3}$/;
		const activities = $('.activities').children().children();
		let checkedActivities = 0;

		// Name Validation
		if ($('#name').val() === '') {
			e.preventDefault();
			$('#name').addClass('alert');
			if (!$('.nameAlert').length) {
				$('<p class="nameAlert">Name is required</p>').insertBefore($('#name'));
			}
		} else {
			$('#name').removeClass('alert');
			$('.nameAlert').remove();
		}

		// Email validation
		if ($('#mail').val() === '') {
			e.preventDefault();
			$('#mail').addClass('alert');
			$('.invalidAlert').remove();
			if (!$('.mailAlert').length) {
				$('<p class="mailAlert">Email is required</p>').insertBefore($('#mail'));
			}
		} else if (!email.test($('#mail').val())) {
			$('#mail').addClass('alert');
			$('.mailAlert').remove();
			if (!$('invalidAlert').length) {
				$('<p class="invalidAlert">Must be a valid email address. Example: johndoe@gmail.com</p>').insertBefore($('#mail'));
			}
		} else {
			$('#mail').removeClass('alert');
			$('.mailAlert').remove();
			$('.invalidAlert').remove();
		}

		// Activities validation
		for (let i = 0; i < activities.length; i++) {
			if (activities[i].checked) {
				checkedActivities++;
			}
		}
		
		if (checkedActivities === 0) {
			e.preventDefault();
			$('.activities').addClass('alert');
			$('.activitiesAlert').remove();
			if (!$('activitiesAlert').length) {
				$('<p class="activitiesAlert">Must select at least one activity</p>').insertAfter($('.activities'));
			}
		} else {
			$('.activities').removeClass('alert');
			$('.activitiesAlert').remove();
		}

		// Credit Card number validation
		if ($('#credit-card')[0].style.display !== 'none') {
			// Number validation
			if ($('#cc-num').val() === '') {
				e.preventDefault();
				$('#cc-num').addClass('alert');
				$('.invalidNum-Alert').remove();
				if (!$('.noNum-Alert').length) {
				$('<p class="noNum-Alert">Please type a Credit Card number</p>').insertAfter($('#cc-num'));
				}
			} else if (!creditCard.test($('#cc-num').val())) {
				e.preventDefault();
				$('#cc-num').addClass('alert');
				$('.noNum-Alert').remove();
				if (!$('.invalidNum-Alert').length) {
				$('<p class="invalidNum-Alert">Credit Card Number must be between 13 and 16 digits</p>').insertAfter($('#cc-num'));
				}
			} else {
				$('#cc-num').removeClass('alert');
				$('.noNum-Alert').remove();
				$('.invalidNum-Alert').remove();
			}

			// Zipcode validation 
			if ($('#zip').val() === '' || !zipCode.test($('#zip').val())) {
				e.preventDefault();
				$('#zip').addClass('alert');
				if (!$('.zipAlert').length) {
				$('<p class="zipAlert">Zipcode must be 5 digits</p>').insertAfter($('#zip'));
				}
			} else {
				$('#zip').removeClass('alert');
				$('.zipAlert').remove();
			}

			// CVV validation
			if ($('#cvv').val() === '' || !cvv.test($('#cvv').val())) {
				e.preventDefault();
				$('#cvv').addClass('alert');
				if (!$('.cvvAlert').length) {
				$('<p class="cvvAlert">CVV must be 3 digits</p>').insertAfter($('#cvv'));
				}
			} else {
				$('#cvv').removeClass('alert');
				$('.cvvAlert').remove();
			}
		}

	})
}

$(document).ready(function() {
	formValidate();
})