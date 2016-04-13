var app = angular.module('twitterGenerator', []);

app.controller('MainController',['$scope', '$http', function($scope, $http){
  $scope.handleList = [];

  $http.get('/nouns').then(function(response){
    $scope.nounList = response.data;
  })

  $http.get('/adjectives').then(function(response){
    $scope.adjectiveList = response.data;
  })

  $scope.suggest = function() {
    var proposedAdjective = shuffle($scope.adjectiveList).pop();
    var proposedNoun = shuffle($scope.nounList).pop();
    $scope.proposedHandle = proposedAdjective + proposedNoun;
    var handleObject = {name: $scope.proposedHandle, available : ''};
    $scope.handleList.unshift(handleObject);
  }
}])

// The Fisher-Yates shuffle
function shuffle(array) {

  var tempArr = array;
  var m = tempArr.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = tempArr[m];
    tempArr[m] = tempArr[i];
    tempArr[i] = t;
  }

  return tempArr;
}
