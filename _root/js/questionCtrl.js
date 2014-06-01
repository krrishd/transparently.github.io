function questionCtrl($scope, $http, $stateParams) {
	var qid = $stateParams.id;
	var url = {
		link: document.URL
	};	
	$http.get('http://transparently.herokuapp.com/api/question/' + qid)
		.success(function(data) {
			$scope.question = data[0];
			var pid = $scope.question.person;
			$http.get('http://transparently.herokuapp.com/api/person/' + pid)
				.success(function(data){
					$scope.person = data[0];
					$http.post('http://transparently.herokuapp.com/api/link', url)
						.success(function(data) {
							$scope.shortURL = data.url;
							$scope.tweetLink = "https://twitter.com/intent/tweet?original_referer=" + $scope.shortURL + "&text=. @" + $scope.person.twitter + " - " + $scope.question.title + "&url=" + $scope.shortURL + "&via=transparenly";
						}); 
				});
		})
}
