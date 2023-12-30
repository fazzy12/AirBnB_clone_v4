$(document).ready(function () {
  const selectedAmenities = {};

  $('.amenity-checkbox').change(function () {
    const amenityId = $(this).closest('li').data('id');
    const amenityName = $(this).closest('li').data('name');

    if ($(this).is(':checked')) {
      selectedAmenities[amenityId] = amenityName;
    } else {
      delete selectedAmenities[amenityId];
    }

    // Update the h4 tag with the list of selected amenities
    const amenitiesList = Object.values(selectedAmenities).join(', ');
    $('div#Amenities h4').text(amenitiesList);
  });
});
