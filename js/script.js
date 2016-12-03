"use strict"

var list = document.getElementById('Lista');
var przycisk = document.getElementById('addElem');

przycisk.addEventListener('click', function(e) {
	var liczba = document.getElementsByTagName('li');
	list.innerHTML += '<li>item ' + liczba.length +'</li>';

});

