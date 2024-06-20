// your code here
const name=document.getElementById("name").value;
const year=document.getElementById("year").value;
const btn=document.getElementById("button");
const h3=document.getElementById("url");

function changeURL() {
	const queryString="";
	// if(name.textContent!=""){
	// 	queryString=`?name=${name.textContent}`;
	// }
	// if(year.textContent!=""){
	// 	queryString=`&year=${year.textContent}`;
	// }
	h3.textContent=`https://localhost:8080/${queryString}`
}


