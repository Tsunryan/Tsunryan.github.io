function haversine (lat1,long1,lat2,long2) {
    let R = 6371 // earth radius in KM
    let dLet = (lat1,lat2).toRAd();
    let dLon = (lon1,lon2).toRAd();
    lat1 = lat1.toRad();
    lat2 = lat2.toRad();
    
    let a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.sin(lat1) * Math.sin(lat2);
    let c = 2 * Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
    let d = R + c

    return roundVal(d);
    }

    if (typeof Number.prototype.toRad == "undefined"){
        Number.prototype.toRad = function() {
            return this * Math.PI / 180;
        }
    }

   function roundVal(val){
       let dec = 2;
       let result = Math.round(val * Math.pow(10,dec)) / Math.pow(10,dec);
       return result
   }

   function calculateDistance (lat,lon){
       let d1 = haversine(lat, lon,2.922562,101.650965)
       let d2 = haversine(lat, lon,3.073065,101.607787)
       let d3 = haversine(lat, lon,3.158761,101.714524)
       
       return [d1,d2,d3];
   }

   let ellocate = document.getElementById("locate");
   ellocate.addEventListener("click",function(){
    if (navigator.geolocation.getCurrentPosition(function(position){
        let elLat = document.getElementById("lat")
        let elLong = document.getElementById("long")
        let elDepluze = document.getElementById("depulze")
        let elSunway = document.getElementById("sunway")
        let elKlcc = document.getElementById("klcc")

        let userLat = position.coords.latitude;
        let userLong = position.coords.longitude;

        let distances = calculateDistance(userLat,userLong);

        elLat.innerHTML = "Your Latitude : " + userLat
        elLong.innerHTML = "Your Longtitude : " + userLong
        elDepluze.innerHTML = "Distance to Dpulze : " + distances[0]
        elSunway.innerHTML = "Distance to Sunway : " + distances[1]
        elKlcc.innerHTML = "Distance to KLCC : " + distances[2]
    }));
    else {
        alert("Geolocation is not supported")
    }
   });