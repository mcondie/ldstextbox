'use strict';
/*jshint esnext: true */

function PresentConfig($urlRouterProvider, $stateProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('present', {
		abstract: true,
		template: '<ui-view></ui-view>',
		resolve: {

		}
	})
	.state('present.home', {
		url: '/',
		templateUrl: 'components/present/present.html',
		controller: 'PresentController',
		controllerAs: 'present',
		resolve: {

		}
	});
}

angular.module('present', [
	'ui.router',
	'ldstextbox'
	])
	.config(PresentConfig);