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
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
});
