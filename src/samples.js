$(document).ready(function () {
	
	$(".samples-detail.carpet").remove(); // on load remove any sample
	
	//$(".samples-detail.trim").appendTo( $(".samples-detail-wrapper") );
	
	var swatchURL;
	var samplesCount;
	var theFeel;
	var theColor;
	var theSwatch;
	var sampleItem;
	var samplesLeft;
	
	var runFirst = true;
	var sampleArray = [];
	
	var alertMaxCount = "Only 5 samples per order allowed!";
	
	countSamples();
	
	function countSamples() {
		
		samplesCount = $(".samples-detail-wrapper .samples-detail").length;
		//console.log("samplesCount = " + samplesCount);
		
		$(".samples-tab .samples-tab-count").text(samplesCount);
		
		samplesLeft = 5 - samplesCount;
		$(".samples-text.count .count-val").text(samplesLeft);
		
		if(samplesCount > 0) {
			
			$(".remove-notice").addClass("hide");
			
			$(".samples-tab").css("display","flex");
			
			$(".samples-cta-wrapper").removeClass("disable");
			$(".samples-cta-wrapper .button").css("pointer-events", "auto");
			
		} else {
			
			sampleArray = [];
			
			$(".remove-notice").removeClass("hide");
			
			$(".samples-tab").css("display","none");
			
			$(".samples-cta-wrapper").addClass("disable");
			$(".samples-cta-wrapper .button").css("pointer-events", "none");
			
		}
	}
	
	function addSamples(){
		
		if(runFirst == true){
			
			$(".samples-detail.trim").appendTo( $(".samples-detail-wrapper") );
			$(".samples-detail.trim .add-trim-samples").css("display", "none");
			$(".samples-detail.trim").find(".carpet-type").text("Edging Pack");
			
			runFirst = false;
		}
		
		countSamples();
		
		if(samplesCount < 5) {
			
			if (jQuery.inArray(sampleID, sampleArray) >= 0) {
			
				alert(theFeel + " " + theColor + " has already been added.");
				
			} else {
				
				$(".samples-detail-wrapper").prepend(sampleItem);
				sampleArray.push(sampleID); // Add to sampleArray
				console.log("sampleArray = " + sampleArray);
			}
			
		} else {
			
			alert(alertMaxCount);
			
		}
		
		countSamples();
	}
	
	$("#sampleButton").click(function() {
			
		theFeel = $(":input[data-feel]:checked").val();
		console.log("theFeel = " + theFeel);

		// if theFeel = 'Pattern' then thePattern = $(":input[data-pattern]:checked").val(); then add to theFeel " / 'thePattern'"
		if (theFeel == 'Pattern') {
			thePattern = $(":input[data-pattern]:checked").val();
			console.log("thePattern = " + thePattern);
			theFeel = theFeel + " / " + thePattern;
		}
		
		theColor = $(":input[data-colour]:checked").val();
		console.log("theColor = " + theColor);
		
		theSwatch = $(":input[data-colour]:checked").siblings().children().attr("src"); //(".swatch-wrapper img").attr("src");
		console.log("theSwatch = " + theSwatch);
						
		sampleItem = "<div class='samples-detail carpet'><div class='samples-image-wrapper'><img src='" + theSwatch + "' class='samples-image' alt=''></div><div class='samples-name-wrapper'><div class='samples-name'><div class='carpet-type'>" + theFeel + "</div><div class='carpet-colour'>" + theColor + "</div></div><div class='remove-samples'><div class='remove-icon'><div class='icon-bar'></div></div></div></div></div>";	
		
		theFeelID = theFeel.replace(/ /g, '').toLowerCase();
		theColorID = theColor.replace(/ /g, '').toLowerCase();
		sampleID = theFeelID + "-" + theColorID;
		
		console.log("Pre sampleID : " + sampleID);
		console.log("Pre sampleArray : " + sampleArray);
		
		addSamples();
		
		countSamples();
		
		$(".samples-tab").click();
		$(".samples-tab").css("display","flex");
		
	});
	
	$(".samples-detail.trim").on('click', '.remove-samples', function() { // Remove Trim
		
		$(this).css("display","none");
		$(this).parent(".samples-detail.trim").find(".add-trim-samples").css("display","flex");
		$(this).parent(".samples-detail.trim").prependTo( $(".trim-garage") );
		
		$(this).parent(".samples-detail.trim").find(".carpet-type").text("Add Edging Pack");
		
		countSamples();
		
	});
	
	$(".samples-detail.trim").on('click', '.add-trim-samples', function() { // Add Trim
		
		countSamples();
		
		if(samplesCount < 5) {
			
			$(this).css("display","none");
			$(this).parent(".samples-detail.trim").find(".remove-samples").css("display","flex");
			$(this).parent(".samples-detail.trim").appendTo( $(".samples-detail-wrapper") );
			
			$(this).parent(".samples-detail.trim").find(".carpet-type").text("Edging Pack");
			
			countSamples();
			
		} else {
			
			alert(alertMaxCount);
			
		}
		
	});
	
	$(".samples-detail-wrapper").on('click', '.samples-detail.carpet .samples-name-wrapper .remove-samples', function() { // Remove Carpet
		
		console.clear();
		
		console.log("Remove clicked");
		
		removeFeel = $(this).parents(".samples-name-wrapper").find(".carpet-type").text();
		console.log("removeFeel = " + removeFeel);
		
		removeColor = $(this).parents(".samples-name-wrapper").find(".carpet-colour").text();
		console.log("removeColor = " + removeColor);
		
		removeFeelID = removeFeel.replace(/ /g, '').toLowerCase();
		removeColorID = removeColor.replace(/ /g, '').toLowerCase();
		
		removeID = removeFeelID + "-" + removeColorID;
		
		console.log("removeID = " + removeID);
		
		sampleArray = jQuery.grep(sampleArray, function(value) {
			return value != removeID;
		});
		
		console.log("Updated sampleArray = " + sampleArray)
				
		$(this).parents(".samples-detail-wrapper .samples-detail.carpet").fadeOut(200, function() {
			
			$(this).remove();
						
			countSamples();
			
		});
		
		countSamples();
		
	});

});

function resetSamples() {
	
	setTimeout(function() {
		
		//$("#sampleButton").remove();

		$(".samples-detail.carpet").remove();
  
		$(".field-label").css("opacity", "1");
		$("#checkoutButton").text("Order for R150");
  
		$(".remove-notice").removeClass("hide");
		//$(".remove-notice").css({"background-color":"#8ae68a","color":"#000"});
		//$(".remove-notice").text("Your sample order is being processed.");
  
		//$(".samples-cta-wrapper").remove();
		$(".samples-cart .samples-close").click(); // Close cart
		$(".samples-tab").css("display", "none");
  
		$(".samples-cta-wrapper").addClass("disable");
		$(".samples-cta-wrapper .button").css("pointer-events", "none");
  
		sampleArray = [];
  
	}, 3000); // Reduced timeout to 3 seconds after successful checkout
}

// Initializing a client to return content in the store's primary language

const client = ShopifyBuy.buildClient({
	domain: 'yudu2020.myshopify.com',
	storefrontAccessToken: '4a0e78fe19caee70a369f98925b4a317'
});

const checkoutButton = document.querySelector('#checkoutButton');

checkoutButton.addEventListener('click', event => {

	// Change button text to indicate processing
	checkoutButton.textContent = "Please wait...";

	client.checkout.create().then(async (checkout) => {
	
		const requestURL = 'https://yudu-server.herokuapp.com/yudu-sample-rug-api';
		const nodes = document.querySelectorAll('.samples-detail-wrapper .samples-detail');
		const price = '150';
	
		if (nodes.length > 0) { // Check if there are actually samples selected
	
			let variantString = '';
	
			nodes.forEach((el) => {
	
				const range = el.children[1].children[0].children[0].innerHTML;
				const colour = el.children[1].children[0].children[1].innerHTML;
	
				if (variantString.length < 1) {
					variantString = range + ' / ' + colour;
				} else {
					variantString += ' / ' + range + ' / ' + colour;
				}
	
			});
	
			// Create our data object with the required data
			const body = { variantString, price };
	
			// Send a POST request to our endpoint with the required data
			const options = {
				method: 'POST',
				body: JSON.stringify(body),
				headers: {
					'Content-Type': 'Application/JSON'
				}
			}
	
			try {
				// Request to server with all necessary data
				const data = await fetch(requestURL, options)
					.then((res) => {
						if (!res.ok) {
							throw new Error(`HTTP error! status: ${res.status}`);
						}
						return res.json();
					});
	
				const lineItemsToAdd = [
					{
						variantId: data.id,
						quantity: 1
					}
				];
	
				// Add an item to the checkout
				client.checkout.addLineItems(checkout.id, lineItemsToAdd).then((checkout) => {
	
					// Successfully created checkout, now open it
					window.open(checkout.webUrl);
					
					// Only reset samples after successful checkout
					resetSamples();
	
				}).catch((error) => {
					console.error('Error adding items to checkout:', error);
					// Reset button text on error
					checkoutButton.textContent = "Order for R150";
					alert('There was an error processing your order. Please try again.');
				});
				
			} catch (error) {
				console.error('Error creating sample product:', error);
				// Reset button text on error
				checkoutButton.textContent = "Order for R150";
				alert('There was an error processing your order. Please try again.');
			}
	
		} else {
			// No samples selected
			checkoutButton.textContent = "Order for R150";
			alert('Please select at least one sample before checking out.');
		}
	
	}).catch((error) => {
		console.error('Error creating checkout:', error);
		// Reset button text on error
		checkoutButton.textContent = "Order for R150";
		alert('There was an error processing your order. Please try again.');
	});

});