//your JS code here. If required.
let btn = document.getElementById("btn");
let key = "f7292c79a58b639b384ff864b070a450";
async function handleClick(){
	let response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=51.30&lon=0.7&appid=f7292c79a58b639b384ff864b070a450")
	let data = response.json();
	return data;
}

btn.addEventListener("click",()=>{
	handleClick()
		.then((e)=>{
			let result = e.weather[0].main
			let div=document.getElementById("weatherData")
			div.innerHTML="Current weather in London: "+result;
		})

});

