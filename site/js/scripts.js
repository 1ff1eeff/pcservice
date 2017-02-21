$(document).ready(function(){
  $("#sticker").sticky({topSpacing:0});
  $("#sticker").sticky({bottomSpacing:0});
  $('#sticker').on('sticky-start', function() {
      document.getElementById('mini-logo').style.visibility = 'visible'; 
      document.getElementById('mini-caption').style.visibility = 'visible';
      document.getElementById('mini-phone').style.visibility = 'visible'
    } );


$('#sticker').on('sticky-end', function() {
    document.getElementById('mini-logo').style.visibility = 'hidden'; 
    document.getElementById('mini-caption').style.visibility = 'hidden';
    document.getElementById('mini-phone').style.visibility = 'hidden';
} );
});



function initMap() {
  var myLatLng = {lat: 54.191236, lng: 37.616218};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 15
  });
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Компьютерная помощь'
  });  
}