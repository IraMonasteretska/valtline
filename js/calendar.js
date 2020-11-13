$(document).ready(function(){

    $.fn.datepicker.language['en'] = {
        days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        months: ['January','February','March','April','May','June', 'July','August','September','October','November','December'],
        monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        today: 'Today',
        clear: 'Clear',
        dateFormat: 'mm/dd/yyyy',
        timeFormat: 'hh:ii aa',
        firstDay: 1
    }
    $('#dateArrive').datepicker({
        language: 'en',
        navTitles: {
            days: 'MM yyyy'
        }
    });

    $('#dateBack').datepicker({
        language: 'en',
        navTitles: {
            days: 'MM yyyy'
        }
    });

    /* google maps */

    function initMap() {
        var element = document.getElementById("map");
        var image = 'img/valtline/marker.svg';
		var pos = {lat: 46.465421, lng: 10.371305};
		var	opt = {
			center: pos,
            zoom: 15,
            styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}]};
        var myMap = new google.maps.Map(element, opt);
          
		var marker1 = new google.maps.Marker({
			position: {lat: 46.464936, lng: 10.377425},
			map: myMap,
			icon: image
		});

		var marker2 = new google.maps.Marker({
			position: {lat: 46.465996, lng: 10.368219},
			map: myMap,
            icon: image      
        });

        var marker3 = new google.maps.Marker({
			position: {lat: 46.465421, lng: 10.371305},
			map: myMap,
            icon: image      
        });

        var marker4 = new google.maps.Marker({
			position: {lat: 46.463201, lng: 10.372281},
			map: myMap,
            icon: image      
        });

        var marker5 = new google.maps.Marker({
			position: {lat: 46.464597, lng: 10.373120},
			map: myMap,
            icon: image      
        });

        const hotel1 = ['casa','appartamenti','Casa BETTY',' 4,7 (38) '];
        const hotel2 = ['baita','hotel','BAITA CLEMENTI',' 4,5 (334) '];
        const hotel3 = ['bianca','meuble', 'CIMA BIANCA', ' 4,5 (98) '];
        const hotel4 = ['alu','hotel', 'Alù Bormio', ' 4,5 (140) '];
        const hotel5 = ['eden','hotel', 'Eden Hotel', ' 4,8 (109) '];

        var star = '<img src="img/valtline/star.svg" alt="star">';

        const contentString1 = '<div class="map__item">' + '<a href="#" class="map__item--link">' + '<img src="img/valtline/' + hotel1[0] + '.jpg" class="map__img" alt="hotel">' +'</a>' +'<div class="map__content">' + '<div class="space-between">' + '<div class="map__cat">' + hotel1[1] +'</div>' + '<div class="d-flex hotels-list__stars">' + star + star + star + star +  '</div>' + '</div>' + '<h5 class="map__title">' + hotel1[2] +'</h5>' + '<p class="map__text">' + 'punteggio' + '<span class="map__text--span">' + hotel1[3] +'</span>' + 'su 5' + '</p>' + '<a href="#" class="map__btn">' + 'Di Più' + '</a>' + "</div>";
        const contentString2 = '<div class="map__item">' + '<a href="#" class="map__item--link">' + '<img src="img/valtline/' + hotel2[0] + '.jpg" class="map__img" alt="hotel">' +'</a>' +'<div class="map__content">' + '<div class="space-between">' + '<div class="map__cat">' + hotel2[1] +'</div>' + '<div class="d-flex hotels-list__stars">' + star + star + star + star +  '</div>' + '</div>' + '<h5 class="map__title">' + hotel2[2] +'</h5>' + '<p class="map__text">' + 'punteggio' + '<span class="map__text--span">' + hotel2[3] +'</span>' + 'su 5' + '</p>' + '<a href="#" class="map__btn">' + 'Di Più' + '</a>' + "</div>";
        const contentString3 = '<div class="map__item">' + '<a href="#" class="map__item--link">' + '<img src="img/valtline/' + hotel3[0] + '.jpg" class="map__img" alt="hotel">' +'</a>' +'<div class="map__content">' + '<div class="space-between">' + '<div class="map__cat">' + hotel3[1] +'</div>' + '<div class="d-flex hotels-list__stars">' + star + star + star + star +  '</div>' + '</div>' + '<h5 class="map__title">' + hotel3[2] +'</h5>' + '<p class="map__text">' + 'punteggio' + '<span class="map__text--span">' + hotel3[3] +'</span>' + 'su 5' + '</p>' + '<a href="#" class="map__btn">' + 'Di Più' + '</a>' + "</div>";
        const contentString4 = '<div class="map__item">' + '<a href="#" class="map__item--link">' + '<img src="img/valtline/' + hotel4[0] + '.jpg" class="map__img" alt="hotel">' +'</a>' +'<div class="map__content">' + '<div class="space-between">' + '<div class="map__cat">' + hotel4[1] +'</div>' + '<div class="d-flex hotels-list__stars">' + star + star + star + star +  '</div>' + '</div>' + '<h5 class="map__title">' + hotel4[2] +'</h5>' + '<p class="map__text">' + 'punteggio' + '<span class="map__text--span">' + hotel4[3] +'</span>' + 'su 5' + '</p>' + '<a href="#" class="map__btn">' + 'Di Più' + '</a>' + "</div>";
        const contentString5 = '<div class="map__item">' + '<a href="#" class="map__item--link">' + '<img src="img/valtline/' + hotel5[0] + '.jpg" class="map__img" alt="hotel">' +'</a>' +'<div class="map__content">' + '<div class="space-between">' + '<div class="map__cat">' + hotel5[1] +'</div>' + '<div class="d-flex hotels-list__stars">' + star + star + star + star + star + '</div>' + '</div>' + '<h5 class="map__title">' + hotel5[2] +'</h5>' + '<p class="map__text">' + 'punteggio' + '<span class="map__text--span">' + hotel5[3] +'</span>' + 'su 5' + '</p>' + '<a href="#" class="map__btn">' + 'Di Più' + '</a>' + "</div>";
        
        var InfoWindow1 = new google.maps.InfoWindow({
            content: contentString1
        });

		var InfoWindow2 = new google.maps.InfoWindow({           
            content: contentString2
        });

        var InfoWindow3 = new google.maps.InfoWindow({           
            content: contentString3
        });

        var InfoWindow4 = new google.maps.InfoWindow({           
            content: contentString4
        });

        var InfoWindow5 = new google.maps.InfoWindow({           
            content: contentString5
        });

        closeInfoWindow = function() {
            InfoWindow1.close();
            InfoWindow2.close();
            InfoWindow3.close();
            InfoWindow4.close();
            InfoWindow5.close();
        };
        
        google.maps.event.addListener(myMap, 'click', closeInfoWindow);

		marker1.addListener('click', function(){
            InfoWindow2.close();
            InfoWindow3.close();
            InfoWindow4.close();
            InfoWindow5.close();
			InfoWindow1.open(myMap, marker1);
        })
        
        marker2.addListener('click', function(){
            InfoWindow1.close();
            InfoWindow3.close();
            InfoWindow4.close();
            InfoWindow5.close();
			InfoWindow2.open(myMap, marker2);
        })
        
        marker3.addListener('click', function(){
            InfoWindow1.close();
            InfoWindow2.close();
            InfoWindow4.close();
            InfoWindow5.close();
			InfoWindow3.open(myMap, marker3);
        })
        
        marker4.addListener('click', function(){
            InfoWindow1.close();
            InfoWindow2.close();
            InfoWindow3.close();
            InfoWindow5.close();
			InfoWindow4.open(myMap, marker4);
        })

        marker5.addListener('click', function(){
            InfoWindow1.close();
            InfoWindow2.close();
            InfoWindow3.close();
            InfoWindow4.close();
			InfoWindow5.open(myMap, marker5);
        })
        
        
    }
    
    initMap();


    
});