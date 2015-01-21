var app = angular.module('quoteBook');

app.controller('MainController', function($scope, dataService) {
	
	$scope.data = function() {
		$scope.list = dataService.getData();
}
	$scope.data();

	$scope.addData = function() {
		var obj = {
			text: $scope.addQuote,
			author: $scope.addAuthor
		}
		dataService.addData(obj);
}
	
	$scope.removeData = function() {
		var txt = $scope.removeQuote;
		dataService.removeData(txt);
}

	$scope.filterFunc = function() {
		if ($scope.filter) {
			$scope.filter = $scope.filterText
		}
		else { 
			$scope.filterText = "";
		}
		$scope.filter = "";
		
}



});