//your JS code here. If required.
let btn = document.getElementById("btn");
let key = "f7292c79a58b639b384ff864b070a450";
async function handleClick(){
	let response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=19.07&lon=72.87&appid=f7292c79a58b639b384ff864b070a450")
	let data = response.json();
	return data;
}

btn.addEventListener("click",()=>{
	handleClick()
		.then((e)=>{
			console.log(e.weather[0].main);
			// ler result = e.
			// let div=document.getElementById("weatherData")
			// div.innerHTML="Current weather in Mumbai: "+result
		})

});

