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

    function initMap() {alert("ok");}

    function initMap() {
		var element = document.getElementById("map");
		var pos = {lat: 46.463217, lng: 10.373464};
		var	opt = {
			center: pos,
            zoom: 15,
            styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}]
			};
        var myMap = new google.maps.Map(element, opt);
        
        

		var marker = new google.maps.Marker({
			position: pos,
			map: myMap,
			icon: '../img/valtline/marker.svg'
		});

		var marker = new google.maps.Marker({
			position: {lat: 46.464937, lng: 10.377374},
			map: myMap,
			icon: '../img/valtline/marker.svg'
		});

		var InfoWindow = new google.maps.InfoWindow({
			content: '<div class="hotel"><img src="../../../img/valtline/map-1.jpg"></div>'
		});

		InfoWindow.open(myMap, marker);

		marker.addListener('click', function(){
			InfoWindow.open(myMap, marker);
		})
    }
    
    initMap();


    
});