function personCtrl($scope, $http, $stateParams) {
	var personID = $stateParams.person;
	$http.get('http://transparently.herokuapp.com/api/person/' + personID)
		.success(function(data) {
			$scope.person = data[0];
		})
		.error(function(error) {
			console.log('Something went wrong');
		});
	
	$http.get('http://transparently.herokuapp.com/api/questions/' + personID)
		.success(function(data) {
			$scope.questions = data.reverse();
		})
		.error(function(error) {
			console.log('Something went wrong');
		});

	$scope.newQuestion = function() {
		var payload = {
			title: $scope.title,
			extended: $scope.extended,
			email: $scope.email
		};
		
		console.log(payload);

		$http.post('http://transparently.herokuapp.com/api/questions/' + $scope.person._id + '/new', payload)
			.success(function(data) {
				$scope.response = data;
				console.log(data);
				alert("Question posted!");
				window.location.hash = '#/question/' + data._id;
			})
			.error(function(error) {
				console.log("Something went wrong");
			});
	}

	var askClick = function(e) {
		e.preventDefault();
		document.querySelector('textarea').focus();
	}
	document.querySelector(".ask.btn").addEventListener('click', askClick);
}
