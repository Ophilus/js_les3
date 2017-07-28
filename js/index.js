// var body = document.getElementsByTagName('body')[0];
// //console.log(h1);//з тегом
// console.dir(body);//без тегу
//   for (var i = 0; i < 10; i++) {
//     body.innerHTML += `<h1>${i}</h1>`;
// }

var clientData = ['John', 'James', 'Jakobs'];


var $clientData = document.getElementById('client-data');

clientData.forEach(function(el){
   $clientData.innerHTML += `<li>${el}</li>`;
});

var h1 = document.getElementsByTagName('h1')[0];
//h1.hidden = true;
//h1.style.visibility = 'hidden';
h1.style.display = 'none';