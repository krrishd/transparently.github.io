function newPersonCtrl($scope, $http) {
	$scope.newPolitician = function() {
		function finalTwitter(username) {
			if(username.search('@') == -1) {
				return username;
			} else {
				var newname = username.split('@')[1];
				return newname;
			}
		}
		var payload = {
			name: $scope.name,
			position: $scope.position,
			twitter: finalTwitter($scope.twitter)
		};

		$http.post('http://transparently.herokuapp.com/api/person/new', payload)
			.success(function(data) {
				window.location.hash = '#/p/' + data._id;
			});
	}
}
