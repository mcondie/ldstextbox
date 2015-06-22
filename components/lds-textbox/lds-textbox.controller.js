'use strict';
/*jshint esnext: true */

function LDSTextboxController(){
	var ldsText = this;

	_.extend(ldsText, {
		blur: Blur,
		focus: Focus,
		placeholder: ldsText.label
	});

	function Blur(){
		ldsText.placeholder = ldsText.label;
	}

	function Focus(){
		ldsText.placeholder = "";
	}
}

angular.module('ldstextbox')
	.controller('LDSTextboxController', LDSTextboxController);