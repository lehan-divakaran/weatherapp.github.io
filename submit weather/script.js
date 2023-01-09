const options = {
	method: 'Get',
	headers: {
		'X-RapidAPI-Key': 'b0f74f6dc9msh36215ffb966adb2p1febe1jsnb974f57a60c6',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{
    document.getElementById('cityname').innerText = 'Weather for '+ city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) =>{
        

        console.log(response)
        temp.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        temp.innerHTML = response.temp
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
	.catch(err => console.error(err));
    // .catch(()=>{
    //     alert("city not found");
    // });
}


function func(){


    let cities=["Chennai","Boston","Kolkata","Kochi","Vijayawada","Sydney"]

    let table=document.getElementById("city-data-table")
    for(let j=0;j<cities.length;j++){
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + cities[j], options)
        .then(res=>res.json())
        .then((response)=>{
            let row= document.createElement("tr")
            let city=document.createElement("th")
            city.innerText=cities[j];
            row.appendChild(city)
            let coumns= ["feels_like","humidity","max_temp","min_temp","sunrise","sunset","temp","wind_degrees","wind_speed"];
            for(let i=0;i<coumns.length;i++){
                let cell=document.createElement("td");
                if(coumns[i]=="sunrise" || coumns[i]=="sunset"){
                    let time=new Date(response[coumns[i]])
                    cell.innerText= time.getHours()+":"+time.getMinutes()       

                }else{
                    cell.innerText=response[coumns[i]];
                }
                row.appendChild(cell)
            }
            table.appendChild(row)
        })
    }

    

}

func();

getWeather("Delhi")




const handleSubmit=(e)=>{
    e.preventDefault()
    getWeather(e.target.city.value)
}