'use strict';
/*jshint esnext: true */

function LDSTextboxController(){
	var ldsText = this;

	_.extend(ldsText, {
		placeholder: ldsText.label,
		blur: Blur,
		focus: Focus,
		showLabel: ShowLabel,
		isEditing: true
	});

	function ShowLabel(){
		return ldsText.model != '' || ldsText.isEditing;
	}

	function Blur(){
		ldsText.placeholder = ldsText.label;
		ldsText.isEditing = false;
	}

	function Focus(){
		ldsText.placeholder = '';
		ldsText.isEditing = true;
	}
}

angular.module('ldstextbox')
	.controller('LDSTextboxController', LDSTextboxController);