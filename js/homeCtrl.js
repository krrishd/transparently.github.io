function homeCtrl($scope, $http) {
	$http.get('http://transparently.herokuapp.com/api/people')
		.success(function(data) {
			console.log('People loaded');
			$scope.people = data.reverse();
		})
		.error(function(error) {
			alert('Oops, something went wrong. Refresh the page and try again');
			console.log(error);
		});
}
