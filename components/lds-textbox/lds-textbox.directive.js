'use strict';
/*jshint esnext: true */

function LDSTextboxDirective(){
	return {
		restrict: 'E',
		templateUrl: 'components/lds-textbox/lds-textbox.html',
		controller: 'LDSTextboxController',
		controllerAs: 'ldsText',
		scope: {
			model: '=',
			label: '@'
		},
		bindToController: true
	}
}

angular.module('ldstextbox')
	.directive('ldsTextbox', LDSTextboxDirective);