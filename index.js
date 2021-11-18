function updateMap() {
   fetch('/data.json')
  .then(response => response.json())
  .then(data => {console.log(data.data)
        data.data.forEach(element => {
            latitude = element.latitude;
            longitude = element.longitude;

            cases = element.infected

                if(cases>=1000){
                    color = "rgb(255, 0, 0)";
                    console.log( color, cases)
                }else if (cases>=750 && cases <=1000){
                    color = "rgb(255, 51, 0)";
                }else if (cases>=500 && cases <=750){
                    color = "rgb(255, 204, 0)";
                }else
                {
                    color = "rgb(0, 153, 51)";
                    // color = `rgb(${cases}, 0, 0)`;
                }

            //mark on map

            new mapboxgl.Marker({
                draggable: false,
                color: color
                })
                .setLngLat([longitude, latitude])
                .addTo(map);
        });

  });

}

let interval = 2000;
setInterval(updateMap, interval);
