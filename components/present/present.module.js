'use strict';
/*jshint esnext: true */

function PresentConfig($urlRouterProvider, $stateProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('present', {
		abstract: true,
		template: '<ui-view></ui-view>',
		resolve: {
			//Put app data initialization code here
		}
	})
	.state('present.home', {
		url: '/',
		templateUrl: 'components/present/present.html',
		controller: 'PresentController',
		controllerAs: 'present',
		resolve: {
			person: GetPerson
		}
	});
}

function GetPerson($http){
	return $http.get('./data.json').then(function(response){
		return response.data;
	});
}

angular.module('present', [
	'ui.router',
	'ldstextbox'
	])
.config(PresentConfig);