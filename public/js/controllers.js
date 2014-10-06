'use strict';

var beehiveApp = angular.module('beehiveApp', ['ngRoute']);


beehiveApp.controller('myController', function ($scope, $http) {

	$scope.eventSelected=99;


	$scope.getEvents=function(){
		$http.get('/event/nearby?lat='+getLat()+'&long='+getLong()).
		success(function(data, status, headers, config) {
			console.log("get worked!")
			$scope.eventData=data;
			console.log(data);


			if(data!="[]"){
				for(var i=0; i<$scope.eventData.length; i++){
					L.marker([$scope.eventData[i].location.latitude, $scope.eventData[i].location.longitude], {icon: plainIcon}).addTo(map)
					.bindPopup($scope.eventData[i].description).openPopup();
				}



				map.setView([$scope.eventData[0].location.latitude, $scope.eventData[0].location.longitude], 13);
			}

			else
				map.setView([getLat(), getLong()], 13);
		}).
		error(function(data, status, headers, config) {
			console.log("get failed!")
		});

	}

	$scope.getEvents();

	$scope.makeEvent=function(newEvent){




		$http.post('/event/create', newEvent).success(function(){
			console.log("event post worked!!");
			// $scope.getEvents();

		});




		$('#new-event').modal('hide')
	}



	$scope.select= function(index) {
		$scope.selected = index; 
	};

	$scope.selectEvent=function(index){
		$scope.eventSelected=index;
	}





});
