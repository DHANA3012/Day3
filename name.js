// Question 3:
// Print all rest countries names, regions, subregion and population


var request= new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data)
    for(let i=0;i<data.length;i++){
        console.log(data[i].name.common);
        console.log(data[i].region);
        console.log(data[i].subregion);
        console.log(data[i].population)
    }
}