$(document).ready(function () {
  const amenitiesId = {};
   $('INPUT[type="checkbox"]').click(function () {
     if ($(this).prop('checked')) {
      amenitiesId[$(this).attr('data-id')] = $(this).attr('data-name');
     } else {
       delete amenitiesId[$(this).attr('data-id')];
     }
     $('.amenities h4').text(Object.values(amenitiesId).join(', '));
   });

// Get API status 
$.getJSON('http://0.0.0.0:5001/api/v1/status/', (data) => {
  if (data.status === "OK") {
    $('div#api_status').addClass('available');
  } else {
    $('div#api_status').removeClass('available');
  }
});
});

// Fetch data about places
$.post({
	url: `${HOST}/api/v1/places_search`,
	data: JSON.stringify({}),
	headers: {
		"Content-Type": "application/json",
		},
	success: (data) => {
		data.forEach((place) =>
			$("section.places").append(
				`<article>
		<div class="title_box">
		<h2>${place.name}</h2>
		<div class="price_by_night">$${place.price_by_night}</div>
		</div>
		<div class="information">
		<div class="max_guest">${place.max_guest} Guest${
				place.max_guest !== 1 ? "s" : ""
			}</div>
		<div class="number_rooms">${place.number_rooms} Bedroom${
				place.number_rooms !== 1 ? "s" : ""
			}</div>
		<div class="number_bathrooms">${place.number_bathrooms} Bathroom${
				place.number_bathrooms !== 1 ? "s" : ""
				}</div>
		</div>
		<div class="description">
		${place.description}
		</div>
			</article>`
				)
			);
		},
		dataType: "json",
	});
	// Search places
	$('.filters button').bind('click', searchPlaces);
	searchPlaces();
});

