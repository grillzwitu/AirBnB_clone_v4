$(document).ready(function () {

  const amenities = {};

  function setAmenities (dataId, dataName) {
    amenities[dataId] = dataName;
  }

  function delAmenity (dataId) {
    delete amenities[dataId];
  }

  $('.amenities .popover ul li input').on('click', function () {
    let dataId, dataName;
    if ($(this).prop('checked') === true) {
      dataId = $(this).attr('data-id');
      dataName = $(this).attr('data-name');
      setAmenities(dataId, dataName);
    } else {
      dataId = $(this).attr('data-id');
      delAmenity(dataId);
    }
    $('.amenities h4').text($.map(amenities, (val) => val).join(', '));
  });
  

    const url = "http://" + window.location.hostname + ":5001/api/v1/status/";
    $.get(url,function (response){
      if (response.status === 'OK'){
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    });
});
