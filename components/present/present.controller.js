'use strict';
/*jshint esnext: true */

function PresentController(person){
	var present = this;

	_.extend(present, {
		person: person
	});
}

angular.module('present')
	.controller('PresentController', PresentController);