function initMap() {
  const loc = {lat: 12.171010, lng: 4.645960 };
  //Centered map on location
  const map = new google.maps.maps(document.querySelector('.map'),{
    zoom: 14,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({position: loc, map:map});
}

//Smooth Scrolling 

$('#navbar a, .btn').on('Click', function(event){
  if(this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top -100
      },
      800
    );
  }
});
