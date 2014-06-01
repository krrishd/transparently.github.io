var app = angular.module('transparently', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'views/home.html',
			controller: homeCtrl
		})

		.state('question', {
			url: '/question/:id',
			templateUrl: 'views/question.html',
			controller: questionCtrl
		})

		.state('person', {
			url: '/p/:person',
			templateUrl: 'views/person.html',
			controller: personCtrl
		})

		.state('newPerson', {
			url: '/new',
			templateUrl: 'views/new-person.html',
			controller: newPersonCtrl
		});
	
	$urlRouterProvider.otherwise('/');
});
