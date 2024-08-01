// your code here
const name=document.getElementById("name");
const year=document.getElementById("year");
const btn=document.getElementById("button");
const url=document.getElementById("url");

btn.addEventListener('click',function(){
	url.innerHTML = url.innerHTML + `?name= ${name.value}&year= ${year.value}`
})


