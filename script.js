//your JS code here. If required.
let btn = document.getElementById("btn");
let key = "f7292c79a58b639b384ff864b070a450";
function handleClick(){
	fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=f7292c79a58b639b384ff864b070a450")
		.then((e)=>{
			console.log(e);
		})
}

btn.addEventListener("click",handleClick);

