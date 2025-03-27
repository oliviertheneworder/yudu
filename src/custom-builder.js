var price_west = 185;
var price_soft = 135;
var price_ultra_soft = 280;
var price_textured = 100;
var price_extra_textured = 105;
var price_pattern = 155;

var price_overlocking = 35;
var price_overlocking_round = 90;
var price_ribbon = 155;

var price_handeling = 0;
var price_handeling_square = 300;
var price_handeling_round = 390;

var vat_percentage = 1.15;

var area_m2 = 0;
var perimeter_m = 0;
var price_trim = 0;
var price_m2 = 0;
var price_perimeter = 0;
var price_shipping = 0;
var width_cm = 0;
var length_cm = 0;
var diameter_cm = 0;

var colour;
var edging;

var antiSlipExVat;
var antiSlipSqm;
var antiSlipTotal;
var antiSlipUI;

var p_overlay_opacity = 0;
var minimat_overlay_opacity = 0;

var pattern = null;

var firstSoft = false;
var firstUltraSoft = false;
var firstTextured = false;
var firstPattern = false;

var stylvolCode = 'STYLVOL';

$(function () {

	$("#add_to_cart_wrapper").hide();

	// Adding the 'hide-this' class to multiple elements
	$(".note, .renders, .meta-block, .meta-grid-shape, .meta-grid-feel, .meta-grid-pattern, .meta-grid-colour, .meta-grid-edging, .meta-grid-size, .meta-grid-antislip, .invoice-buttons").addClass("hide-this");

	// Disabling elements and adding 'disabled' class
	$(".html-anti-slip, .html-buy-button, .shopify-buy__btn").addClass("disabled");
	$("#anti-slip").attr("disabled", true);

	// Use setTimeout to change classes after 2 seconds
	setTimeout(() => {
		$(".html-buy-button").removeClass("disabled");
		$(".shopify-buy__btn").addClass("disabled");
	}, 2000);

	$("#carpet_width").val(200);
	$("#carpet_length").val(300);
	$("#carpet_diameter").val(200);

	// STYLEVOL DISCOUNT

	// Cache selectors
	var $discountCode = $('#discount-code');
	var $discountGrid = $('.discount-grid');
	var $discountSuccess = $('.discount-success');

	// Function to apply discount
	function applyDiscount() {
		var inputValue = $discountCode.val().toUpperCase();
		var isValidCode = inputValue === stylvolCode; // Assuming stylvolCode is defined elsewhere

		$discountGrid.toggle(!isValidCode);
		$discountSuccess.toggle(isValidCode);

		$discountCode.attr('data-discount', isValidCode ? 'true' : 'false');

		if (!isValidCode) {
			// Consider adding this message to a dedicated error message element on the page
			console.log("Discount code is not valid!"); // Using console.log for demonstration; replace with page element update
		}
	}

	// Bind click event
	$('#apply-discount').click(applyDiscount);


	// INPUT CHANGE EVENT

	$("input").change(function () {

		// SETUP

		console.clear();

		// SHOW/HIDE STYLEVOL DISCOUNT

		// Determine if rectangle or round is checked and accordingly adjust curvy feel selections and styles
		if ($("#rectangle").is(":checked") || $("#round").is(":checked")) {
			// Uncheck all curvy feel options and remove the redirected-checked class
			// $(":input[data-feel^='curvy']").prop("checked", false).siblings().removeClass("w--redirected-checked");

			// Adjust display styles for discount elements
			$('.discount-grid').css('display', 'grid');
			$('.discount-success').css('display', 'none');
			$('#discount-code').attr('data-discount', 'false');
		}

		// Check for any curvy selections and adjust display and discount attributes accordingly
		var isCurvySelected = $(":input[data-feel^='curvy']").is(":checked");
		$('#discount-box').css('display', isCurvySelected ? 'block' : 'none');
		$('#discount-code').attr('data-discount', isCurvySelected && $('#discount-code').val() === stylvolCode ? 'true' : 'false');

		// CONTINUE

		// Hide all renders
		$(".renders img").addClass("render hide-this");

		if (firstSoft === false) {
			if ($(":input[data-feel='soft']").is(":checked")) {
				$(":input[data-soft]").first().prop("checked", true);
				$(":input[data-soft]").siblings().removeClass("w--redirected-checked");
				$(":input[data-soft]").first().siblings().addClass("w--redirected-checked");
				firstSoft = true;
			}
		}
		if (firstUltraSoft === false) {
			if ($(":input[data-feel='ultra-soft']").is(":checked")) {
				$(":input[data-ultra-soft]").first().prop("checked", true);
				$(":input[data-ultra-soft]").siblings().removeClass("w--redirected-checked");
				$(":input[data-ultra-soft]").first().siblings().addClass("w--redirected-checked");
				firstUltraSoft = true;
			}
		}
		if (firstTextured === false) {
			if ($(":input[data-feel='textured']").is(":checked")) {
				$(":input[data-textured]").first().prop("checked", true);
				$(":input[data-textured]").siblings().removeClass("w--redirected-checked");
				$(":input[data-textured]").first().siblings().addClass("w--redirected-checked");
				firstTextured = true;
			}
		}
		if (firstPattern === false) {
			if ($(":input[data-feel='pattern']").is(":checked")) {
				$(":input[data-pattern]").first().prop("checked", true);
				$(":input[data-pattern]").siblings().removeClass("w--redirected-checked");
				$(":input[data-pattern]").first().siblings().addClass("w--redirected-checked");
				$(":input[data-pattern-colour]").first().prop("checked", true);
				$(":input[data-pattern-colour]").siblings().removeClass("w--redirected-checked");
				$(":input[data-pattern-colour]").first().siblings().addClass("w--redirected-checked");
				firstPattern = true;
			}
		}

		// if #soft is clicked then set firstUltraSoft, firstTextured, firstPattern to false
		if ($("#soft").is(":checked")) {
			firstUltraSoft = false;
			firstTextured = false;
			firstPattern = false;
		} else if ($("#ultra-soft").is(":checked")) {
			firstSoft = false;
			firstTextured = false;
			firstPattern = false;
		} else if ($("#textured").is(":checked")) {
			firstSoft = false;
			firstUltraSoft = false;
			firstPattern = false;
		} else if ($("#pattern").is(":checked")) {
			firstSoft = false;
			firstUltraSoft = false;
			firstTextured = false;
		}

		width_cm = document.getElementById("carpet_width").value;
		length_cm = document.getElementById("carpet_length").value;
		diameter_cm = document.getElementById("carpet_diameter").value;

		// Width, Length and Diameter checks
		function validateAndSetDimension(type, currentValue, min, max) {
			var message = type.charAt(0).toUpperCase() + type.slice(1) + " must be between " + min + "cm and " + max + "cm";
			if (currentValue > max) {
				$("#carpet_" + type).val(max);
				alert(message);
				return max;
			} else if (currentValue < min) {
				$("#carpet_" + type).val(min);
				alert(message);
				return min;
			}
			return currentValue;
		}

		width_cm = validateAndSetDimension("width", width_cm, 80, 400);
		length_cm = validateAndSetDimension("length", length_cm, 100, 1000);
		diameter_cm = validateAndSetDimension("diameter", diameter_cm, 100, 400);

		// Meta Details
		$("#meta-width").html(width_cm + " cm");
		$("#meta-length").html(length_cm + " cm");
		$("#meta-diameter").html("⌀ " + diameter_cm + " cm");

		// Convert cm to meters
		width_m = width_cm / 100;
		length_m = length_cm / 100;

		// Determine the short and long sides
		var shortSide = Math.min(width_m, length_m);
		var longSide = Math.max(width_m, length_m);

		// Logic for setting width and length based on size criteria
		width_m = shortSide;
		length_m = longSide;
		
		if (longSide <= 2 && shortSide <= 2) {
			width_m = longSide;
			length_m = shortSide;
		}

		console.log("Short side: " + shortSide + "m, Long side: " + longSide + "m");

		// Patterned exception

		// if #Chevron, #Cubed, #Mesh, #Relic, #Scales, #Swirl, #Tulle is checked set .pattern-colours display: block
		if ($("#Chevron").is(":checked") || $("#Cubed").is(":checked") || $("#Mesh").is(":checked") || $("#Relic").is(":checked") || $("#Scales").is(":checked") || $("#Swirl").is(":checked") || $("#Tulle").is(":checked")) {
			$(".pattern-colours, .patter-colour .colour").css("display", "block");
		} else {
			$(".pattern-colours, .patter-colour .colour").css("display", "none");
		}

		console.log('SHORT - ', shortSide)
		console.log('LONG - ', longSide)
		console.log('Pattern - ', pattern);

		if ($("#pattern").is(":checked")) {

			width_m = shortSide;
			length_m = longSide;

			console.log("This is Pattern");
		}

		if (width_m <= 2) {
			var required_width = 2;
		} else {
			var required_width = 4;
		};

		required_length = length_m + 0.2;

		console.log("Required Width: " + required_width);
		console.log("Required Length: " + required_length);

		var diameter_m = diameter_cm / 100;
		var required_diameter = diameter_cm / 100 + 0.2;

		console.log("Diameter: " + diameter_m);
		console.log("Cut Diameter: " + diameter_m + " width + " + required_diameter + " length");

		area_m2 = width_m * required_length;
		var required_area = required_width * required_length;

		console.log("Area: " + area_m2);
		console.log("Required Area: " + required_area);

		// BUILDER FLOW
		if ($("#rectangle").is(":checked")) {

			$(".feel").show();
			$(".radio-button-field.trim").show();
			$(".trim").show();
			$(".trim-swatches").show();

		} else if ($("#round").is(":checked")) {

			$(".feel").show();
			$(".radio-button-field.trim").hide();
			//$(".radio-button-field.overlock").show();
			$(".trim-swatches").show();

		} else if ($("#curvy").is(":checked")) {

			$(".radio-button-field.trim").show();

		}

		// Check if any radio button with a 'data-colour' attribute is checked
		if ($('input[type="radio"][data-colour]:checked').length > 0) {
			$('.trim-colours').show();
		} else {
			$('.trim-colours').hide();
		}
		if ($('input[type="radio"][data-trim]:checked').length > 0) {
			$('.size').show();
		} else {
			$('.size').hide();
		}

		// Change meta FEEL on checked radio button

		if ($("#soft").is(":checked")) {

			$('.soft-colours').show();
			$('.ultra-soft-colours').hide();
			$('.textured-colours').hide();
			$('.choose-pattern').hide();
			$('.pattern-colours').hide();

			var feel = "Soft";
			price_m2 = price_west;

			console.log("Carpet: Soft");

			$(".meta-grid-feel").removeClass("hide-this");
			$("#meta-feel").html(feel);

			// Check the first next-step by default
			// $(":input[data-soft]").first().prop("checked", true);
			// $(":input[data-soft]").first().siblings().addClass("w--redirected-checked");

			//
		} else if ($("#ultra-soft").is(":checked")) {

			$('.soft-colours').hide();
			$('.ultra-soft-colours').show();
			$('.textured-colours').hide();
			$('.choose-pattern').hide();
			$('.pattern-colours').hide();

			var feel = "Ultra Soft";
			price_m2 = price_ultra_soft;

			console.log("Carpet: Ultra Soft");

			$(".meta-grid-feel").removeClass("hide-this");
			$("#meta-feel").html(feel);

			// Check the first next-step by default
			// $(":input[data-ultra-soft]").first().prop("checked", true);
			// $(":input[data-ultra-soft]").first().siblings().addClass("w--redirected-checked");

		} else if ($("#textured").is(":checked")) {

			$('.soft-colours').hide();
			$('.ultra-soft-colours').hide();
			$('.textured-colours').show();
			$('.choose-pattern').hide();
			$('.pattern-colours').hide();

			var feel = "Textured";
			price_m2 = price_textured;
			console.log("Carpet: Textured");

			$(".meta-grid-feel").removeClass("hide-this");
			$("#meta-feel").html(feel);

			// Check the first next-step by default
			// $(":input[data-textured]").first().prop("checked", true);
			// $(":input[data-textured]").first().siblings().addClass("w--redirected-checked");

		} else if ($("#pattern").is(":checked")) {

			$('.soft-colours').hide();
			$('.ultra-soft-colours').hide();
			$('.textured-colours').hide();
			$('.choose-pattern').show();
			$('.pattern-colours').show();

			var feel = "Pattern";
			price_m2 = price_pattern;
			console.log("Carpet: Patterned");

			$(".meta-grid-feel").removeClass("hide-this");
			$("#meta-feel").html(feel);

			// Check the first itnext-stepem by default
			// $(":input[data-pattern]").first().prop("checked", true);
			// $(":input[data-pattern]").first().siblings().addClass("w--redirected-checked");

		};

		// Change meta PATTERN on checked radio button

		if ($("#Chevron").is(":checked") && $("#pattern").is(":checked")) {

			pattern = "Chevron";
			$("#meta-pattern").html(pattern);
			$(".meta-grid-pattern").removeClass("hide-this");

		} else if ($("#Cubed").is(":checked") && $("#pattern").is(":checked")) {

			pattern = "Cubed";
			$("#meta-pattern").html(pattern);
			$(".meta-grid-pattern").removeClass("hide-this");

		} else if ($("#Mesh").is(":checked") && $("#pattern").is(":checked")) {

			pattern = "Mesh";
			$("#meta-pattern").html(pattern);
			$(".meta-grid-pattern").removeClass("hide-this");

		} else if ($("#Relic").is(":checked") && $("#pattern").is(":checked")) {

			pattern = "Relic";
			$("#meta-pattern").html(pattern);
			$(".meta-grid-pattern").removeClass("hide-this");

		} else if ($("#Scales").is(":checked") && $("#pattern").is(":checked")) {

			pattern = "Scales";
			$("#meta-pattern").html(pattern);
			$(".meta-grid-pattern").removeClass("hide-this");

		} else if ($("#Swirl").is(":checked") && $("#pattern").is(":checked")) {

			pattern = "Swirl";
			$("#meta-pattern").html(pattern);
			$(".meta-grid-pattern").removeClass("hide-this");

		} else if ($("#Tulle").is(":checked") && $("#pattern").is(":checked")) {

			pattern = "Tulle";
			$("#meta-pattern").html(pattern);
			$(".meta-grid-pattern").removeClass("hide-this");

		} else if ($("#curvy").is(":checked")) {
			$(".meta-grid-pattern").addClass("hide-this");
		}

		// if #pattern is not checked
		if (!$("#pattern").is(":checked")) {
			$("#meta-pattern").html("");
			$(".meta-grid-pattern").addClass("hide-this");
			// deselect att data-pattern
			$(":input[data-pattern]").prop("checked", false);
		}

		console.log("Carpet Price / m2: " + price_m2);

		if ($(":input[data-trim='overlocking']").is(":checked")) {

			price_trim = price_overlocking;

			edging = "Overlocking";

			$("#meta-edging").html(edging);

		} else if ($(":input[data-trim='trim']").is(":checked")) {

			price_trim = price_ribbon;

			var trimColours = ['chai', 'veld', 'moss', 'shade', 'sable', 'slate', 'mallow', 'blaze', 'frost', 'reef', 'jet', 'coco'];

			$.each(trimColours, function (index, colour) {
				if ($(":input[data-trim-colour='" + colour + "']").is(":checked")) {
					edging = colour.charAt(0).toUpperCase() + colour.slice(1); // Convert first character to uppercase and concat with the rest of the string
					$("." + colour).removeClass("hide-this");
					$("#meta-edging").html(edging); // Update edging meta for each checked colour
					return false; // Break the loop after finding the first checked colour
				}
			});

		};

		// Check shape selections for 
		if ($("#round").is(":checked")) {

			var shape = "Round";

			price_handeling = price_handeling_round;

			width_m = diameter_m;
			length_m = diameter_m;
			shortSide = diameter_m;

			console.log("Round Width: " + width_m);
			console.log("Round Length: " + length_m);

			if (width_m <= 2) {
				required_width = 2;
			} else {
				required_width = 4;
			};

			var required_length = length_m + 0.2;

			console.log("Round Required Width (round): " + required_width);
			console.log("Round Required Length (round): " + required_length);

			perimeter_m = 2 * Math.PI * (diameter_m / 2);
			price_perimeter = perimeter_m * price_overlocking_round;

			console.log("price_perimeter: " + price_perimeter);

			area_m2 = Math.PI * (diameter_m / 2) * (diameter_m / 2);
			required_area = required_width * required_length;

			console.log("Round Area: " + area_m2);
			console.log("Round Required Area: " + required_area);

			$(":input[data-trim='trim']").prop("checked", false);
			$(":input[data-trim='trim']").siblings().removeClass("w--redirected-checked");

			$(":input[data-trim='overlocking']").prop("checked", true);
			$(":input[data-trim='overlocking']").siblings().addClass("w--redirected-checked");

			edging = "Overlocking";

			$("#meta-edging").html(edging);

			console.log("Shape: Round");
			console.log("Trim Price: " + price_overlocking_round);

			$("#meta-shape").html(shape);

			$("#meta-size").css("display", "none");
			$("#meta-diameter").css("display", "block");

			$(".trim-swatches").addClass("hide-this");
			$(".width-wrapper").addClass("hide-this");
			$(".length-wrapper").addClass("hide-this");
			$(".diameter-wrapper").removeClass("hide-this");

			var actual_cut_cost = required_area * price_m2;
			var purchase_area_markup = width_m * required_length * price_m2 * 1.8;
			var carpet_cost = actual_cut_cost + purchase_area_markup;

			console.log("Carpet Cost: " + carpet_cost);

		} else if ($("#rectangle").is(":checked")) {

			var shape = "Rectangle";

			price_handeling = price_handeling_square;

			perimeter_m = (width_m + length_m) * 2;

			price_perimeter = perimeter_m * price_trim;

			console.log("Shape: Rectangle");
			console.log("Trim Price: " + price_trim);

			$("#meta-shape").html(shape);

			$("#meta-size").css("display", "flex");
			$("#meta-diameter").css("display", "none");

			$(".trim-swatches").removeClass("hide-this");
			$(".width-wrapper").removeClass("hide-this");
			$(".length-wrapper").removeClass("hide-this");
			$(".diameter-wrapper").addClass("hide-this");

			var actual_cut_cost = required_area * price_m2;
			var purchase_area_markup;
			// Pattern
			if ($("#pattern").is(":checked")) {
				purchase_area_markup = width_m * required_length * price_m2 * 2;
			} else {
				purchase_area_markup = width_m * required_length * price_m2 * 1.5;
			}
			var carpet_cost = actual_cut_cost + purchase_area_markup;

			console.log("Carpet Cost: " + carpet_cost);

		};

		console.log("Perimeter m: " + perimeter_m);
		console.log("Perimeter Price: " + price_perimeter);
		console.log("Handeling Fee: " + price_handeling);

		// Shape show relevant render block
		if ($("#round").is(":checked")) {

			// Hiding all renders
			$(".s-renders").addClass("hide-this");
			$(".t-renders").addClass("hide-this");
			$(".et-renders").addClass("hide-this");
			$(".p-renders").addClass("hide-this");

			$(".s-renders-round").addClass("hide-this");
			$(".t-renders-round").addClass("hide-this");
			$(".et-renders-round").addClass("hide-this");
			$(".p-renders-round").addClass("hide-this");

			$(".minimat-renders").addClass("hide-this");

			// Hiding and Showing images based on Feel
			if ($("#soft").is(":checked")) {

				$(".s-renders-round").removeClass("hide-this");
				p_overlay_opacity = 0;
				p_overlay_toggle();

			} else if ($("#ultra-soft").is(":checked")) {

				$(".s-renders-round").removeClass("hide-this");
				p_overlay_opacity = 0;
				p_overlay_toggle();

			} else if ($("#textured").is(":checked")) {

				// show .textured-colours .colour
				$(".textured-colours .colour").css("display", "block");

				$(".t-renders-round").removeClass("hide-this");
				p_overlay_opacity = 0;
				p_overlay_toggle();

			} else if ($("#extra_textured").is(":checked")) {

				$(".et-renders-round").removeClass("hide-this");
				p_overlay_opacity = 0;
				p_overlay_toggle();

			} else if ($("#pattern").is(":checked")) {

				$(".p-renders-round").removeClass("hide-this");
				p_overlay_opacity = 1;
				p_overlay_toggle();

			}

			// Rectangle show relevant render block
		} else if ($("#rectangle").is(":checked")) {

			$(".s-renders").addClass("hide-this");
			$(".t-renders").addClass("hide-this");
			$(".et-renders").addClass("hide-this");
			$(".p-renders").addClass("hide-this");

			$(".s-renders-round").addClass("hide-this");
			$(".t-renders-round").addClass("hide-this");
			$(".et-renders-round").addClass("hide-this");
			$(".p-renders-round").addClass("hide-this");

			$(".minimat-renders").addClass("hide-this");

			// Shows the render container NOT the image on radio click
			if ($("#soft").is(":checked")) {

				$(".s-renders").removeClass("hide-this");
				p_overlay_opacity = 0;
				p_overlay_toggle();

			} else if ($("#ultra-soft").is(":checked")) {

				$(".s-renders").removeClass("hide-this");
				p_overlay_opacity = 0;
				p_overlay_toggle();

			} else if ($("#textured").is(":checked")) {

				$(".t-renders").removeClass("hide-this");
				p_overlay_opacity = 0;
				p_overlay_toggle();

			} else if ($("#extra_textured").is(":checked")) {

				$(".et-renders").removeClass("hide-this");
				p_overlay_opacity = 0;
				p_overlay_toggle();

			} else if ($("#pattern").is(":checked")) {

				$(".p-renders").removeClass("hide-this");
				p_overlay_opacity = 1;
				p_overlay_toggle();
			}

		} else if ($("#curvy").is(":checked")) {

			// Show . 

			// Hiding all renders
			$(".s-renders").addClass("hide-this");
			$(".t-renders").addClass("hide-this");
			$(".et-renders").addClass("hide-this");
			$(".p-renders").addClass("hide-this");

			$(".s-renders-round").addClass("hide-this");
			$(".t-renders-round").addClass("hide-this");
			$(".et-renders-round").addClass("hide-this");
			$(".p-renders-round").addClass("hide-this");

		};

		// Show preview box when shape is checked
		if ($("#round").is(":checked") || $("#rectangle").is(":checked") || $("#curvy").is(":checked")) {

			$(".preview-message").addClass("hide-this");
			$(".meta-block").removeClass("hide-this");
			$(".meta-grid-shape").removeClass("hide-this");

		};

		// When colour is selected
		if ($(":input[data-colour]").is(":checked")) {

			$(".renders").removeClass("hide-this");
			$(".meta-grid-colour").removeClass("hide-this");
			$(".note").removeClass("hide-this");

		};

		// When rectangle colour is not selected
		if ($("#rectangle").is(":checked") && !$(":input[data-colour]").is(":checked")) {

			$(".p-renders").addClass("hide-this");

			// When round colour is not selected  
		} else if ($("#round").is(":checked") && !($(":input[data-colour]").is(":checked"))) {

			$(".p-renders-round").addClass("hide-this");

		}

		// When trim is selected
		if ($(":input[data-trim]").is(":checked")) {

			$(".meta-grid-edging").removeClass("hide-this");
			$(".meta-grid-size").removeClass("hide-this");

		};

		// Show size at the end of the flow
		if ($("#round").is(":checked") && $(":input[data-colour]").is(":checked") && $(":input[data-trim]").is(":checked")) {

			$(".size").css({ "display": "grid", "opacity": "1" });

		};

		// Function to remove "hide-this" class based on data attribute and value
		function revealBasedOnAttribute(attribute, valuePrefix, classPrefix) {
			$(":input[" + attribute + "]").each(function () {
				var value = $(this).data(attribute.replace('data-', ''));
				if ($(this).is(":checked")) {
					$("." + valuePrefix + value).removeClass("hide-this");
					colour = value.charAt(0).toUpperCase() + value.slice(1); // Update colour variable
				}
			});
		}

		// Function to handle pattern colours and set background colour
		function handlePatternColours() {
			var colourMap = {
				"charcoal": "#222",
				"silver": "#565656",
				"mustard": "#b4a240",
				"bronze": "#b48645",
				"metal": "#92a19b",
				"earthy": "#b5a184",
				"dove": "#ccc3b5"
				// Add more colours and their corresponding hex codes as needed
			};

			$(":input[data-colour]").each(function () {
				var colourValue = $(this).data('colour');
				if ($(this).is(":checked")) {
					colour = colourValue.charAt(0).toUpperCase() + colourValue.slice(1); // Capitalize the first letter
					var hexCode = colourMap[colourValue];
					if (hexCode) {
						$(".p-colour-overlay").css("background-color", hexCode);
					}
					$(".s-" + colourValue + ", .t-" + colourValue + ", .et-" + colourValue).removeClass("hide-this");
				}
			});
		}

		// Execute for patterns
		revealBasedOnAttribute('data-pattern', 'p-', '');

		// Execute for colours (this will include pattern colours as well)
		handlePatternColours();

		// if #rectangle or #round is checked set color the the value of data-soft or data-ultra-soft or data-textured or data-pattern
		// if ($("#rectangle").is(":checked") || $("#round").is(":checked")) {
		// 	// Check for soft, ultra-soft, textured, pattern
		// 	revealBasedOnAttribute('data-soft', 's-', '');
		// 	revealBasedOnAttribute('data-ultra-soft', 's-', '');
		// 	revealBasedOnAttribute('data-textured', 't-', '');
		// 	revealBasedOnAttribute('data-pattern', 'p-', '');
		// }

		// if data-feel=soft is checked set colour to the value of data-soft that is checked
		// if ($(":input[data-feel='soft']").is(":checked")) {
		// 	var updateColour = $(":input[data-soft]:checked").data('soft');
		// 	$("#meta-colour").html(updateColour.charAt(0).toUpperCase() + updateColour.slice(1)); // Update colour meta
		// } else if ($(":input[data-feel='ultra-soft']").is(":checked")) {
		// 	var updateColour = $(":input[data-ultra-soft]:checked").data('ultra-soft');
		// 	$("#meta-colour").html(updateColour.charAt(0).toUpperCase() + updateColour.slice(1)); // Update colour meta
		// } else if ($(":input[data-feel='textured']").is(":checked")) {
		// 	var updateColour = $(":input[data-textured]:checked").data('textured');
		// 	$("#meta-colour").html(updateColour.charAt(0).toUpperCase() + updateColour.slice(1)); // Update colour meta
		// } else if ($(":input[data-feel='pattern']").is(":checked")) {
		// 	var updateColour = $(":input[data-pattern-colour]:checked").data('pattern-colour');
		// 	$("#meta-colour").html(updateColour.charAt(0).toUpperCase() + updateColour.slice(1)); // Update colour meta
		// }

		console.clear();

		// console.log('updateColour: ', updateColour);

		console.log('Colour: ', colour);

		$("#handlePatternColours").html(colour);

		if (shortSide <= 1.2) {
			price_shipping = 326.09;
		} else if (shortSide <= 1.6) {
			price_shipping = 434.78;
		} else if (shortSide <= 2) {
			price_shipping = 543.48;
		} else if (shortSide <= 3) {
			price_shipping = 652.17;
		} else {
			price_shipping = 817.39;
		};

		console.log("Shipping: " + price_shipping);

		// TOTALS

		// Anti-Slip Mat = R70sqm (VAT inclusive)

		antiSlipSqm = width_m * length_m;
		antiSlipExVat = 70 / 1.15;
		antiSlipTotal = antiSlipSqm * antiSlipExVat;

		if ($('#anti-slip').is(':checked')) {
			// Include 'antiSlipTotal' in SUM
			var total = carpet_cost + price_perimeter + antiSlipTotal + price_handeling + price_shipping;
			$(".meta-grid-antislip").removeClass("hide-this");
		} else {
			// Exclude 'antiSlipTotal' in SUM
			var total = carpet_cost + price_perimeter + price_handeling + price_shipping;
			$(".meta-grid-antislip").addClass("hide-this");
		}

		// Add VAT to display price in the UI

		antiSlipUI = antiSlipTotal * vat_percentage;
		antiSlipUI = Math.ceil(antiSlipUI);

		$(".anti-slip-price").text("R " + antiSlipUI);

		var totalVat = total * vat_percentage;
		var totalVatCeil = Math.ceil(totalVat);

		console.log("Total + VAT: " + totalVat);
		console.log("Grand Total Rounded: " + totalVatCeil);

		//=================
		//	DO CURVY
		//=================

		if ($("#curvy").is(":checked")) {

			$(".form-curvy").css("display", "block");
			$(".form-main").css("display", "none");

			$(".renders-main").css("display", "none");
			$(".renders-curvy").css("display", "block");

			$("#curvy-sizes").css("display", "flex");

		} else {

			$(".form-curvy").css("display", "none");
			$(".form-main").css("display", "block");

			$(".renders-main").css("display", "block");
			$(".renders-curvy").css("display", "none");
		}

		$("#meta-colour").html(colour);

		if ($("#curvy").is(":checked")) {

			$(".anti-slip-price").text("");

			price_shipping = 1;

			console.log("Shipping: " + price_shipping);

			$(".meta-grid-feel").removeClass("hide-this");

			$("#meta-shape").html("Curvy");

			$("#meta-feel").html("Curvy Soft");
			$("#meta-colour").html("");
			$("#meta-edging").html("");

			$("#meta-size").css("display", "flex");
			$("#meta-diameter").css("display", "none");
			$("#meta-length").html("");
			$("#meta-width").html("");

			// CURVY PRICING
			if ($(":input[data-feel='curvy_small']").is(":checked")) {

				$(".meta-grid-size").removeClass("hide-this");

				$("#meta-shape").html("Curvy Small");
				$("#meta-size").css("display", "flex");
				$("#meta-width").html("120 cm");
				$("#meta-length").html("160 cm");

				totalVatCeil = 2300;
				totalVat = 2300;
				total = 2300;

				let floatPrice = total / 4;
				let floatPriceRounded = floatPrice.toFixed(2);
				$('.float-price').text("R " + floatPriceRounded);

				$("#total_amount").text("R 2300");

				antiSlipSqm = 1.2 * 1.6;
				antiSlipTotal = antiSlipSqm * antiSlipExVat;

				antiSlipUI = antiSlipTotal * vat_percentage;
				antiSlipUI = Math.ceil(antiSlipUI);
				$(".anti-slip-price").text("R " + antiSlipUI);

				if ($('#anti-slip').is(':checked')) {

					totalVatCeil = Math.ceil(total + (antiSlipTotal * vat_percentage));
					totalVat = totalVatCeil;
					total = totalVatCeil;

					$("#total_amount").text("R " + total);

					let floatPrice = total / 4;
					let floatPriceRounded = floatPrice.toFixed(2);
					$('.float-price').text("R " + floatPriceRounded);

				}

			} else if ($(":input[data-feel='curvy_medium']").is(":checked")) {

				$(".meta-grid-size").removeClass("hide-this");

				$("#meta-shape").html("Curvy Medium");
				$("#meta-size").css("display", "flex");
				$("#meta-width").html("200 cm");
				$("#meta-length").html("300 cm");

				totalVatCeil = 4800;
				totalVat = 4800;
				total = 4800;

				let floatPrice = total / 4;
				let floatPriceRounded = floatPrice.toFixed(2);
				$('.float-price').text("R " + floatPriceRounded);

				$("#total_amount").text("R " + total);

				antiSlipSqm = 2 * 3;
				antiSlipTotal = antiSlipSqm * antiSlipExVat;

				antiSlipUI = antiSlipTotal * vat_percentage;
				antiSlipUI = Math.ceil(antiSlipUI);
				$(".anti-slip-price").text("R " + antiSlipUI);

				if ($('#anti-slip').is(':checked')) {

					totalVatCeil = Math.ceil(total + (antiSlipTotal * vat_percentage));
					totalVat = totalVatCeil;
					total = totalVatCeil;

					$("#total_amount").text("R " + total);

					let floatPrice = total / 4;
					let floatPriceRounded = floatPrice.toFixed(2);
					$('.float-price').text("R " + floatPriceRounded);

				}

			} else if ($(":input[data-feel='curvy_large']").is(":checked")) {

				$(".meta-grid-size").removeClass("hide-this");

				$("#meta-shape").html("Curvy Large");
				$("#meta-size").css("display", "flex");
				$("#meta-width").html("300 cm");
				$("#meta-length").html("350 cm");

				totalVatCeil = 7900;
				totalVat = 7900;
				total = 7900;

				let floatPrice = total / 4;
				let floatPriceRounded = floatPrice.toFixed(2);
				$('.float-price').text("R " + floatPriceRounded);

				$("#total_amount").text("R " + total);

				antiSlipSqm = 3 * 3.5;
				antiSlipTotal = antiSlipSqm * antiSlipExVat;

				antiSlipUI = antiSlipTotal * vat_percentage;
				antiSlipUI = Math.ceil(antiSlipUI);
				$(".anti-slip-price").text("R " + antiSlipUI);

				if ($('#anti-slip').is(':checked')) {

					totalVatCeil = Math.ceil(total + (antiSlipTotal * vat_percentage));
					totalVat = totalVatCeil;
					total = totalVatCeil;

					$("#total_amount").text("R " + total);

					let floatPrice = total / 4;
					let floatPriceRounded = floatPrice.toFixed(2);
					$('.float-price').text("R " + floatPriceRounded);

				}

			} else if ($(":input[data-feel='curvy_mini_mat_small']").is(":checked")) {

				$(".meta-grid-size").removeClass("hide-this");

				$("#meta-shape").html("Curvy Mini Mat Small ");
				$("#meta-size").css("display", "flex");
				$("#meta-width").html("50 cm");
				$("#meta-length").html("80 cm");

				totalVatCeil = 700;
				totalVat = 700;
				total = 700;

				let floatPrice = total / 4;
				let floatPriceRounded = floatPrice.toFixed(2);
				$('.float-price').text("R " + floatPriceRounded);

				$("#total_amount").text("R " + total);

				antiSlipSqm = 3 * 3.5;
				antiSlipTotal = antiSlipSqm * antiSlipExVat;

				antiSlipUI = antiSlipTotal * vat_percentage;
				antiSlipUI = Math.ceil(antiSlipUI);
				$(".anti-slip-price").text("R " + antiSlipUI);

				if ($('#anti-slip').is(':checked')) {

					totalVatCeil = Math.ceil(total + (antiSlipTotal * vat_percentage));
					totalVat = totalVatCeil;
					total = totalVatCeil;

					$("#total_amount").text("R " + total);

					let floatPrice = total / 4;
					let floatPriceRounded = floatPrice.toFixed(2);
					$('.float-price').text("R " + floatPriceRounded);

				}

			} else if ($(":input[data-feel='curvy_mini_mat_large']").is(":checked")) {

				$(".meta-grid-size").removeClass("hide-this");

				$("#meta-shape").html("Curvy Mini Mat Large ");
				$("#meta-size").css("display", "flex");
				$("#meta-width").html("60 cm");
				$("#meta-length").html("100 cm");

				totalVatCeil = 900;
				totalVat = 900;
				total = 900;

				let floatPrice = total / 4;
				let floatPriceRounded = floatPrice.toFixed(2);
				$('.float-price').text("R " + floatPriceRounded);

				$("#total_amount").text("R " + total);

				antiSlipSqm = 3 * 3.5;
				antiSlipTotal = antiSlipSqm * antiSlipExVat;

				antiSlipUI = antiSlipTotal * vat_percentage;
				antiSlipUI = Math.ceil(antiSlipUI);
				$(".anti-slip-price").text("R " + antiSlipUI);

				if ($('#anti-slip').is(':checked')) {

					totalVatCeil = Math.ceil(total + (antiSlipTotal * vat_percentage));
					totalVat = totalVatCeil;
					total = totalVatCeil;

					$("#total_amount").text("R " + total);

					let floatPrice = total / 4;
					let floatPriceRounded = floatPrice.toFixed(2);
					$('.float-price').text("R " + floatPriceRounded);

				}

			}

			if ($(":input[data-feel-curvy]").is(":checked")) {

				$("#curvy-colours").css("display", "grid");

				if ($(":input[curvy-colour]").is(":checked")) {
					$("#curvy-trims").css("display", "grid");
				} else {
					$("#curvy-trims").css("display", "none");
				}

			} else {
				$("#curvy-colours").css("display", "none");
				$("#curvy-trims").css("display", "none");
			}

			// Curvy Colours

			if ($(":input[data-colour='chartreuse']").is(":checked")) { colour = "Chartreuse"; $(".close-chartreuse").removeClass("hide-this"); };
			if ($(":input[data-colour='blush']").is(":checked")) { colour = "Blush"; $(".close-blush").removeClass("hide-this"); };
			if ($(":input[data-colour='peach']").is(":checked")) { colour = "Peach"; $(".close-peach").removeClass("hide-this"); };
			if ($(":input[data-colour='brick']").is(":checked")) { colour = "Brick"; $(".close-brick").removeClass("hide-this"); };
			if ($(":input[data-colour='moss']").is(":checked")) { colour = "Moss"; $(".close-moss").removeClass("hide-this"); };
			if ($(":input[data-colour='stormy-sea']").is(":checked")) { colour = "Stormy Sea"; $(".close-stormy-sea").removeClass("hide-this"); };
			if ($(":input[data-colour='navy']").is(":checked")) { colour = "Navy"; $(".close-navy").removeClass("hide-this"); };

			// Curvy Mini Mat Small & Large

			if ($(":input[data-feel='curvy_mini_mat_small']").is(":checked") || $(":input[data-feel='curvy_mini_mat_large']").is(":checked")) {
				$(".minimat-renders").removeClass("hide-this");
			}

			// ============================

			if (($(":input[data-feel='curvy_mini_mat_small']").is(":checked") || $(":input[data-feel='curvy_mini_mat_large']").is(":checked")) && $(":input[data-colour='chartreuse']").is(":checked")) {

				$(".minimat-overlay").css("background-color", "#8d7b01");
				$(".minimat-grey-image").removeClass("hide-this");

			};

			if (($(":input[data-feel='curvy_mini_mat_small']").is(":checked") || $(":input[data-feel='curvy_mini_mat_large']").is(":checked")) && $(":input[data-colour='blush']").is(":checked")) {

				$(".minimat-overlay").css("background-color", "#b0999b");
				$(".minimat-grey-image").removeClass("hide-this");

			};

			if (($(":input[data-feel='curvy_mini_mat_small']").is(":checked") || $(":input[data-feel='curvy_mini_mat_large']").is(":checked")) && $(":input[data-colour='peach']").is(":checked")) {

				$(".minimat-overlay").css("background-color", "#8b5e4d");
				$(".minimat-grey-image").removeClass("hide-this");

			};

			if (($(":input[data-feel='curvy_mini_mat_small']").is(":checked") || $(":input[data-feel='curvy_mini_mat_large']").is(":checked")) && $(":input[data-colour='brick']").is(":checked")) {

				$(".minimat-overlay").css("background-color", "#5f362e");
				$(".minimat-grey-image").removeClass("hide-this");

			};

			if (($(":input[data-feel='curvy_mini_mat_small']").is(":checked") || $(":input[data-feel='curvy_mini_mat_large']").is(":checked")) && $(":input[data-colour='moss']").is(":checked")) {

				$(".minimat-overlay").css("background-color", "#736d4a");
				$(".minimat-grey-image").removeClass("hide-this");

			};

			if (($(":input[data-feel='curvy_mini_mat_small']").is(":checked") || $(":input[data-feel='curvy_mini_mat_large']").is(":checked")) && $(":input[data-colour='stormy-sea']").is(":checked")) {

				$(".minimat-overlay").css("background-color", "#4c5d5e");
				$(".minimat-grey-image").removeClass("hide-this");

			};

			if (($(":input[data-feel='curvy_mini_mat_small']").is(":checked") || $(":input[data-feel='curvy_mini_mat_large']").is(":checked")) && $(":input[data-colour='navy']").is(":checked")) {

				$(".minimat-overlay").css("background-color", "#313740");
				$(".minimat-grey-image").removeClass("hide-this");

			};


			// Curvy Small + Colours

			if ($(":input[data-feel='curvy_small']").is(":checked") && $(":input[data-colour='chartreuse']").is(":checked")) { $(".cs-chartreuse").removeClass("hide-this"); };
			if ($(":input[data-feel='curvy_small']").is(":checked") && $(":input[data-colour='blush']").is(":checked")) { $(".cs-blush").removeClass("hide-this"); };
			if ($(":input[data-feel='curvy_small']").is(":checked") && $(":input[data-colour='peach']").is(":checked")) { $(".cs-peach").removeClass("hide-this"); };
			if ($(":input[data-feel='curvy_small']").is(":checked") && $(":input[data-colour='brick']").is(":checked")) { $(".cs-brick").removeClass("hide-this"); };
			if ($(":input[data-feel='curvy_small']").is(":checked") && $(":input[data-colour='moss']").is(":checked")) { $(".cs-moss").removeClass("hide-this"); };
			if ($(":input[data-feel='curvy_small']").is(":checked") && $(":input[data-colour='stormy-sea']").is(":checked")) { $(".cs-stormy-sea").removeClass("hide-this"); };
			if ($(":input[data-feel='curvy_small']").is(":checked") && $(":input[data-colour='navy']").is(":checked")) { $(".cs-navy").removeClass("hide-this"); };

			// Curvy Medium + Colours

			if ($(":input[data-feel='curvy_medium']").is(":checked") && $(":input[data-colour='chartreuse']").is(":checked")) { $(".cm-chartreuse").removeClass("hide-this"); };
			if ($(":input[data-feel='curvy_medium']").is(":checked") && $(":input[data-colour='blush']").is(":checked")) { $(".cm-blush").removeClass("hide-this"); };
			if ($(":input[data-feel='curvy_medium']").is(":checked") && $(":input[data-colour='peach']").is(":checked")) { $(".cm-peach").removeClass("hide-this"); };
			if ($(":input[data-feel='curvy_medium']").is(":checked") && $(":input[data-colour='brick']").is(":checked")) { $(".cm-brick").removeClass("hide-this"); };
			if ($(":input[data-feel='curvy_medium']").is(":checked") && $(":input[data-colour='moss']").is(":checked")) { $(".cm-moss").removeClass("hide-this"); };
			if ($(":input[data-feel='curvy_medium']").is(":checked") && $(":input[data-colour='stormy-sea']").is(":checked")) { $(".cm-stormy-sea").removeClass("hide-this"); };
			if ($(":input[data-feel='curvy_medium']").is(":checked") && $(":input[data-colour='navy']").is(":checked")) { $(".cm-navy").removeClass("hide-this"); };

			// Curvy Large + Colours

			if ($(":input[data-feel='curvy_large']").is(":checked") && $(":input[data-colour='chartreuse']").is(":checked")) { $(".cl-chartreuse").removeClass("hide-this"); };
			if ($(":input[data-feel='curvy_large']").is(":checked") && $(":input[data-colour='blush']").is(":checked")) { $(".cl-blush").removeClass("hide-this"); };
			if ($(":input[data-feel='curvy_large']").is(":checked") && $(":input[data-colour='peach']").is(":checked")) { $(".cl-peach").removeClass("hide-this"); };
			if ($(":input[data-feel='curvy_large']").is(":checked") && $(":input[data-colour='brick']").is(":checked")) { $(".cl-brick").removeClass("hide-this"); };
			if ($(":input[data-feel='curvy_large']").is(":checked") && $(":input[data-colour='moss']").is(":checked")) { $(".cl-moss").removeClass("hide-this"); };
			if ($(":input[data-feel='curvy_large']").is(":checked") && $(":input[data-colour='stormy-sea']").is(":checked")) { $(".cl-stormy-sea").removeClass("hide-this"); };
			if ($(":input[data-feel='curvy_large']").is(":checked") && $(":input[data-colour='navy']").is(":checked")) { $(".cl-navy").removeClass("hide-this"); };

			// Curvy Trim

			if ($(":input[data-trim='curvy']").is(":checked")) {
				$(".meta-grid-edging").removeClass("hide-this");
			};

			if ($(":input[data-trim-colour='chartreuse']").is(":checked")) { edging = "Chartreuse Edge"; $(".close-chartreuse-trim").removeClass("hide-this"); };
			if ($(":input[data-trim-colour='blush']").is(":checked")) { edging = "Blush Edge"; $(".close-blush-trim").removeClass("hide-this"); };
			if ($(":input[data-trim-colour='peach']").is(":checked")) { edging = "Peach Edge"; $(".close-peach-trim").removeClass("hide-this"); };
			if ($(":input[data-trim-colour='brick']").is(":checked")) { edging = "Brick Edge"; $(".close-brick-trim").removeClass("hide-this"); };
			if ($(":input[data-trim-colour='moss']").is(":checked")) { edging = "Moss Edge"; $(".close-moss-trim").removeClass("hide-this"); };
			if ($(":input[data-trim-colour='stormy-sea']").is(":checked")) { edging = "Stormy Sea Edge"; $(".close-stormy-sea-trim").removeClass("hide-this"); };
			if ($(":input[data-trim-colour='navy']").is(":checked")) { edging = "Navy Edge"; $(".close-navy-trim").removeClass("hide-this"); };

			// CURVY LARGE TRIM/EDGE
			if ($(":input[data-feel='curvy_large']").is(":checked")) {

				$(".minimat-renders").addClass("hide-this");

				if ($(":input[data-trim-colour='chartreuse']").is(":checked")) { $(".large-chartreuse").removeClass("hide-this"); };
				if ($(":input[data-trim-colour='blush']").is(":checked")) { $(".large-blush").removeClass("hide-this"); };
				if ($(":input[data-trim-colour='peach']").is(":checked")) { $(".large-peach").removeClass("hide-this"); };
				if ($(":input[data-trim-colour='brick']").is(":checked")) { $(".large-brick").removeClass("hide-this"); };
				if ($(":input[data-trim-colour='moss']").is(":checked")) { $(".large-moss").removeClass("hide-this"); };
				if ($(":input[data-trim-colour='stormy-sea']").is(":checked")) { $(".large-stormy-sea").removeClass("hide-this"); };
				if ($(":input[data-trim-colour='navy']").is(":checked")) { $(".large-navy").removeClass("hide-this"); };

				// CURVY MEDIUM TRIM/EDGE
			} else if ($(":input[data-feel='curvy_medium']").is(":checked")) {

				$(".minimat-renders").addClass("hide-this");

				if ($(":input[data-trim-colour='chartreuse']").is(":checked")) { $(".medium-chartreuse").removeClass("hide-this"); };
				if ($(":input[data-trim-colour='blush']").is(":checked")) { $(".medium-blush").removeClass("hide-this"); };
				if ($(":input[data-trim-colour='peach']").is(":checked")) { $(".medium-peach").removeClass("hide-this"); };
				if ($(":input[data-trim-colour='brick']").is(":checked")) { $(".medium-brick").removeClass("hide-this"); };
				if ($(":input[data-trim-colour='moss']").is(":checked")) { $(".medium-moss").removeClass("hide-this"); };
				if ($(":input[data-trim-colour='stormy-sea']").is(":checked")) { $(".medium-stormy-sea").removeClass("hide-this"); };
				if ($(":input[data-trim-colour='navy']").is(":checked")) { $(".medium-navy").removeClass("hide-this"); };

				// CURVY SMALL TRIM/EDGE
			} else if ($(":input[data-feel='curvy_small']").is(":checked")) {

				$(".minimat-renders").addClass("hide-this");

				if ($(":input[data-trim-colour='chartreuse']").is(":checked")) { $(".small-chartreuse").removeClass("hide-this"); };
				if ($(":input[data-trim-colour='blush']").is(":checked")) { $(".small-blush").removeClass("hide-this"); };
				if ($(":input[data-trim-colour='peach']").is(":checked")) { $(".small-peach").removeClass("hide-this"); };
				if ($(":input[data-trim-colour='brick']").is(":checked")) { $(".small-brick").removeClass("hide-this"); };
				if ($(":input[data-trim-colour='moss']").is(":checked")) { $(".small-moss").removeClass("hide-this"); };
				if ($(":input[data-trim-colour='stormy-sea']").is(":checked")) { $(".small-stormy-sea").removeClass("hide-this"); };
				if ($(":input[data-trim-colour='navy']").is(":checked")) { $(".small-navy").removeClass("hide-this"); };

			}

			// Show trim colour over Minmat when clicking back to carpet colour
			if ($(":input[data-minimat]").is(":checked")) {
				if ($(":input[data-trim-colour='chartreuse']").is(":checked")) {
					$(".minimat-chartreuse").removeClass("hide-this");
				} else if ($(":input[data-trim-colour='blush']").is(":checked")) {
					$(".minimat-blush").removeClass("hide-this");
				} else if ($(":input[data-trim-colour='peach']").is(":checked")) {
					$(".minimat-peach").removeClass("hide-this");
				} else if ($(":input[data-trim-colour='brick']").is(":checked")) {
					$(".minimat-brick").removeClass("hide-this");
				} else if ($(":input[data-trim-colour='moss']").is(":checked")) {
					$(".minimat-moss").removeClass("hide-this");
				} else if ($(":input[data-trim-colour='stormy-sea']").is(":checked")) {
					$(".minimat-stormy-sea").removeClass("hide-this");
				} else if ($(":input[data-trim-colour='navy']").is(":checked")) {
					$(".minimat-navy").removeClass("hide-this");
				};
			} else {
				$(".trim-minimat img").addClass("hide-this");
			}

			var curvyColour = $(":input[curvy-colour]:checked").data('curvy-colour');

			$("#meta-colour").html(curvyColour);
			$("#meta-edging").html(edging);

			// LOG CURVY TOTALS

			console.log("Total: " + total);
			console.log("Total + VAT: " + totalVat);
			console.log("Grand Total Rounded: " + totalVatCeil);

		}

		// CURVY CLOSEUP SHOW & HIDE

		$(":input[curvy-colour]").click(function () {

			$(".renders-curvy").removeClass("hide-this");
			$(".renders-closeup").addClass("hide-this");
			$(".note").html("&nbsp;");

		});

		$(":input[data-trim='curvy']").click(function () {

			$(".renders-curvy").addClass("hide-this");
			$(".renders-closeup").removeClass("hide-this");
			$(".renders-closeup").css("display", "block");
			$(".note").html("Close up");

		});

		// CART BUTTON + FLOAT

		if ($(":input[data-colour]").is(":checked") && $(":input[data-trim]").is(":checked")) {

			$(".add-to-cart-replacement").addClass("hide");

			$(".html-anti-slip").removeClass("disabled");
			$("#anti-slip").removeAttr("disabled");

			$(".html-buy-button, .shopify-buy__btn").removeClass("disabled");
			$(".html-buy-button").removeClass("hide");

			$(".invoice-buttons").removeClass("hide");

			$("#total_amount").html("R " + totalVatCeil);

			let floatPrice = totalVatCeil / 4;
			let floatPriceRounded = floatPrice.toFixed(2);
			$('.float-price').text("R " + floatPriceRounded);

		};

		// if data-shape, data-feel, data-colour, data-trim is checked then show the add to cart button
		if ($(":input[data-shape='rectangle'], :input[data-shape='round']").is(":checked") && $(":input[data-feel]").is(":checked") && $(":input[data-colour]").is(":checked") && $(":input[data-trim]").is(":checked")) {
			$("#add_to_cart_wrapper").show();
			// Check Pattern
		} else if ($(":input[data-shape]").is(":checked") && $(":input[data-feel='pattern']").is(":checked") && $(":input[data-pattern]").is(":checked") && $(":input[data-colour]").is(":checked") && $(":input[data-trim]").is(":checked")) {
			$("#add_to_cart_wrapper").show();
			// Check Curvy
		} else if ($(":input[data-shape='curvy']").is(":checked") && $(":input[data-feel-curvy]").is(":checked") && $(":input[curvy-colour]").is(":checked") && $(":input[data-trim='curvy']").is(":checked")) {
			$("#add_to_cart_wrapper").show();
		} else {
			$("#add_to_cart_wrapper").hide();
		}

		// const uncheckAllPatterns = () => { $(this).prop('checked', false); }

		if ($("#curvy").is(":checked")) {
			$(".discount-grid").show();
		} else {
			$(".discount-grid").hide();
		}



	}); // END - CLICK

	// ADD TO INVOICE

	// Remove PDF line item and used for CSS styling
	$('.pdf-line-item').remove();

	$(document).on('click', '.item-remove', function () {
		$(this).parent().remove();
		if ($('.pdf-line-item').length == 0) {
			$('.invoice, .get-invoice').addClass('hide');
		} else {
			updateTotals();
		}
	});

	// UPDATE PDF TOTALS

	function updateTotals() {
		var theTotal = 0;

		$('.price-interger').each(function () {
			theTotal += parseInt($(this).text());

			var vatTotal = theTotal * 0.15;
			var vatTotalFixed = Math.ceil(vatTotal);

			console.log('The Total - ', theTotal);
			console.log('Data Type - ', typeof theTotal);
			console.log('Vat Total Fixed - ', vatTotalFixed);
			console.log('Data type - ', typeof vatTotalFixed);

			var theSub = "<span>R </span>" + theTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			var theVat = "<span>R </span>" + vatTotalFixed.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

			$("#pdf-sub-total").html(theSub);
			$("#pdf-vat-total").html(theVat);
			$("#pdf-total-due").html(theSub);

			$(".button-wrapper").removeClass("hide");
			$(".get-invoice").removeClass("hide");
		});
	}

	$("#add-to-invoice-text, #add-to-invoice").off().click(function () {

		$(".invoice").removeClass("hide");
		$(".get-invoice").removeClass("hide");

		var itemShape = $("#meta-shape").text();
		var itemFeel = $("#meta-feel").text();
		var itemColour = $("#meta-colour").text();
		var itemEdging = $("#meta-edging").text();
		var itemPattern = $("#meta-pattern").text();
		if (itemPattern != null) { itemPattern = " " + itemPattern; } else { itemPattern = ""; }

		if ($("#round").is(":checked")) {
			var itemSize = $("#meta-diameter").text();
		} else {
			var itemSize = $("#meta-size").text();
		}

		var itemTotal = $("#total_amount").text();
		var itemPrice = itemTotal.substring(2);
		var itemPriceComma = itemPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

		var itemDescription = "Shape:&nbsp;" + itemShape + " / Feel:&nbsp;" + itemFeel + itemPattern + " / Colour:&nbsp;" + itemColour + " / Edging:&nbsp;" + itemEdging + " / Size:&nbsp;" + itemSize;
		var newItem = "<div class='w-layout-grid pdf-line-item'><div class='item-detail'>" + itemDescription + "</div><div class='item-price' data-price='" + itemPrice + "' >R&nbsp;" + itemPriceComma + "<span class='price-interger' style='display:none;'>" + itemPrice + "</span></div><div class='item-remove'><div class='remove-bar'></div><div class='remove-bar flip'></div></div></div>";

		$("#pdf-items").append(newItem);

		// Add to hidden form field for email

		var newField = "<input type='hidden' id='" + itemPrice + "' name='Line Item' value='" + itemDescription + " / Price: R&nbsp;" + itemPrice + "'>";

		$("#form-fields").append(newField);

		updateTotals();

		// var newLine = "\r\n"
		// var msg = "Success!"
		// msg += newLine;
		// msg += "The Custom Rug has been added to your pro forma invoice below.";
		// msg += newLine;
		// msg += "You can add more rugs to your pro forma invoice.";
		// alert(msg);

		// MAKE PDF

		$("#download-invoice").click(function () {

			var pdfCompany = $("#invoiceCompany").val();
			var pdfContact = $("#invoiceName").val();
			var pdfPhone = $("#invoicePhone").val();
			var pdfEmail = $("#invoiceEmail").val();
			var pdfVat = $("#invoiceVat").val();
			var pdfAddress = $("#invoiceAddress").val();

			var timeStamp = Math.round(new Date().getTime() / 1000);

			$("#pdf-number").replaceWith("# " + timeStamp);

			$("#pdf-company").replaceWith(pdfCompany);
			$("#pdf-contact").replaceWith(pdfContact);
			$("#pdf-phone").replaceWith(pdfPhone);
			$("#pdf-email").replaceWith(pdfEmail);
			$("#pdf-vat").replaceWith(pdfVat);
			$("#pdf-address").replaceWith(pdfAddress);

			if (pdfCompany == "") {
				$(".pdf-company, #pdf-company").remove();
			}
			if (pdfPhone == "") {
				$(".pdf-phone, #pdf-phone").remove();
			}
			if (pdfVat == "") {
				$(".pdf-vat, #pdf-vat").remove();
			}
			if (pdfAddress == "") {
				$(".pdf-address, #pdf-address").remove();
			}

			if (pdfContact != "" && pdfEmail != "") {

				var pdf = new jsPDF();

				pdf.addHTML(
					$("#pdf-invoice").css({ "width": "29.7cm", "height": "42cm" }),
					$('#pdf-invoice')[0],
					function () {
						pdf.save("yudu-pro-forma-invoice-" + timeStamp + ".pdf");
						var invoiceGenerated = true;
					}
				);

			}

			$('#pdf-invoice').css({ 'width': 'auto', 'height': 'auto' });

		});
	}); // END - ADD TO INVOICE

	const p_overlay_toggle = () => {
		if (p_overlay_opacity) {
			$(".p-colour-overlay").css("opacity", "1");
		} else {
			$(".p-colour-overlay").css("opacity", "0");
		}
	}

	const minimat_overlay_toggle = () => {
		if (minimat_overlay_opacity) {
			$(".minimat-overlay").css("opacity", "1");
		} else {
			$(".minimat-overlay").css("opacity", "0");
		}
	}


}); // END - DOCUMENT READY