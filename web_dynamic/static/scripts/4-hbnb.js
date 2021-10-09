$(document).ready(function () {

//task 2
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

  
//task 3
    const url = "http://" + window.location.hostname + ":5001/api/v1/status/";
    $.get(url,function (response){
      if (response.status === 'OK'){
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    });


//task 4
    ajaxUrl = 'http://' + window.location.hostname + ':5001/api/v1/places_search/';
    let htmlString = "";
    $.ajax( {
    url: ajaxUrl,
    method: 'POST',
    contentType: 'application/json',
    data: '{}',
    success: function (response) {
      for (i = 0; i < response.length; i++) {
        htmlString += "<article><div class='title_box'><h2>" + response[i].name + "</h2><div class='price_by_night'>$" + response[i].price_by_night + "</div></div><div class='information'><div class='max_guest'>" + response[i].max_guest + "</div><div class='number_rooms'>" + response[i].number_rooms + "</div><div class='number_bathrooms'>" + response[i].number_bathrooms + "</div></div><div class='description'>" + response[i].description + "</div></article>";
            }
        $('section.places').append(htmlString);
        }
    });

    
//task 5
    $('button').click( function(){
      console.log(amenities);
      $.ajax({
        url: ajaxUrl,
        type: 'POST',
        data: JSON.stringify({'amenities': Object.keys(amenities)}),
        dataType: 'json',
        contentType: 'application/json',
        
        success: repopulatePage
      });
    });
    

    function repopulatePage (data) {
      //clear the entire section
      $('.places').empty();
      // iterate across the data with map
      $('.places').append(data.map(place => {
      console.log(place);
      return `<article>
        <div class='title_box'>
            <h2>${place.name}</h2>
            <div class='price_by_night'>
               $${place.price_by_night}
            </div>
        </div>
        <div class='information'>
            <div class="max_guest">
                ${place.max_guest} Guests
            </div>
            <div class="number_rooms">
                ${place.number_rooms} Bedrooms
            </div>
            <div class="number_bathrooms">
                ${place.number_bathrooms} Bathrooms
            </div>
        </div>
        <div class="description">
            ${place.description}
        </div>
        </article>`
    }));
  }
    
  
});
