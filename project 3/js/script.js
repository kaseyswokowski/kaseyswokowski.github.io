// Will do the things needed when page loads
$(document).ready(function() {
    // Focuses on first text field
    $('#name').focus();
    // Hides other title text field on load
    $('#other-title').hide();
    //Hides Color selector on load 
    $('#colors-js-puns').hide();
    // Hides paypal payment info
    $('#paypal').hide();
    //hides bitcoin payment info
    $('#bitcoin').hide();
    // Calls all functions when page is loaded
    otherJobTitle();
    tShirtInfo();
    activityRegister();
    paymentInfo();

})

// Display the 'other title' text feild if other is selected
function otherJobTitle () {
    const title = $('#title');
    title.change(function () {
    if (title.val() === 'other') {
       $('#other-title').show();
    }else {
       $('#other-title').hide();
    }  
 })   
}

// T Shirt section
function tShirtInfo() {
	const design = $('#design');
	const color = $('#color');
	const colorChildren = color.children();

	design.change(function() {
		$('#delete').remove();
		const designVal = design.val()
		$('#colors-js-puns').show();
		if (designVal === 'js puns') {
			colorChildren.show();
			color[0].selectedIndex = 0;
			for (let i = 4; i < colorChildren.length; i++) {
				colorChildren.eq(i).hide();
			}
		} else if (designVal === 'heart js') {
			colorChildren.show();
			color[0].selectedIndex = 3;
			for (let i = 0; i < 4; i++) {
				colorChildren.eq(i).hide();
			}
		} else {
			colorChildren.show();
			color[0].selectedIndex = 1;
		}
	});
}


// Register for activities section
function activityRegister() {
    const activities = $('.activities').children().children();

    let total = 0;
    let totalHTML = $('<label></label>');

    activities.on('change', function(e){
        //Main Conference
        if (e.target.checked && e.target.name === 'all') {
            total +- 200;
        } else if (!e.target.checked && e.target.name === 'all') {
            total -= 200;
        }
        // js-frameworks
        if (e.target.checked && e.target.name === 'js-frameworks') {
            total += 100;
            //disable express 
            $('#express').addClass('strike');
            $('[name="express"]').attr('disabled', true);
        } else if (!e.target.checked && e.target.name === 'js-frameworks') {
            total -= 100;
            // enable express
            $('#express').removeClass('strike');
            $('[name="express"]').attr('disabled', false);
        }

        //js-libs 
        if (e.target.checked && e.target.name === 'js-libs') {
			total += 100;
			// disable express
			$('#node').addClass('strike');
			$('[name="node"]').attr('disabled', true);
		} else if (!e.target.checked && e.target.name === 'js-libs') {
			total -= 100;
			// enable express
			$('#node').removeClass('strike');
			$('[name="node"]').attr('disabled', false);
		}
        // express 
        if (e.target.checked && e.target.name === 'express') {
			total += 100;
			// disable express
			$('#js-frameworks').addClass('strike');
			$('[name="js-frameworks"]').attr('disabled', true);
		} else if (!e.target.checked && e.target.name === 'express') {
			total -= 100;
			// enable express
			$('#js-frameworks').removeClass('strike');
			$('[name="js-frameworks"]').attr('disabled', false);
		}

		// node
		if (e.target.checked && e.target.name === 'node') {
			total += 100;
			// disable express
			$('#js-libs').addClass('strike');
			$('[name="js-libs"]').attr('disabled', true);
		} else if (!e.target.checked && e.target.name === 'node') {
			total -= 100;
			// enable express
			$('#js-libs').removeClass('strike');
			$('[name="js-libs"]').attr('disabled', false);
		}

		// build-tools
		if (e.target.checked && e.target.name === 'build-tools') {
			total += 100;
		} else if (!e.target.checked && e.target.name === 'build-tools') {
			total -= 100;
		}

		// npm
		if (e.target.checked && e.target.name === 'npm') {
			total += 100;
		} else if (!e.target.checked && e.target.name === 'npm') {
			total -= 100;
		}

		totalHTML.text('Total: $' + total);
		$('.activities').append(totalHTML);
    })
}

// Payment Section

function paymentInfo() {
    const paymentSelect = $('#payment');
    paymentSelect.change(function() {
        if (paymentSelect.val() === 'credit card') {
            $('#credit-card').show();
            $('#paypal').hide();
            $('#bitcoin').hide();
        } else if (paymentSelect.val() === 'paypal') {
            $('#credit-card').hide();
			$('#paypal').show();
			$('#bitcoin').hide();
			$('#cc-num').removeClass('alert');
			$('#zip').removeClass('alert');
			$('#cvv').removeClass('alert');
			$('.noNum-Alert').remove();
			$('.invalidNum-Alert').remove();
			$('.zipAlert').remove();
			$('.cvvAlert').remove();
        } else if (paymentSelect.val() === 'bitcoin') {
            $('#credit-card').hide();
			$('#paypal').hide();
			$('#bitcoin').show();
			$('#cc-num').removeClass('alert');
			$('#zip').removeClass('alert');
			$('#cvv').removeClass('alert');
			$('.noNum-Alert').remove();
			$('.invalidNum-Alert').remove();
			$('.zipAlert').remove();
			$('.cvvAlert').remove();
        }
    });
}