angular.module("restaurantApp", [])
.controller('mainCtrl', function($scope) {

	$scope.appetizers = [

		{
			 "item": "Frites",
			 "price": 6
		},
		{
			 "item": "Escargot",
			 "price": 9
		},
		{
			 "item": "Pate",
			 "price": 7
		}
	]

	$scope.entrees = [

		{
			 "item": "Steak Au Poivre",
			 "price": 23
		},
		{
			 "item": "Poached Salmon",
			 "price": 17
		},
		{
			 "item": "Duck l'Orange",
			 "price": 20
		}
	]

	$scope.desserts = [

		{
			 "item": "Creme Brulee",
			 "price": 8
		},
		{
			 "item": "Profiteroles",
			 "price": 6
		},
		{
			 "item": "Gelato",
			 "price": 5
		}
	]

	$scope.sparkling = [

		{
			"item": "Brut, Antoine de Clairvoy, Champagne",
			"pricePerGlass": 10,
			"pricePerBottle": 48
		}
	]

	$scope.whites = [

		{
			"item": "Sauvignon Blanc, Masson-Blondelet, 2014, Sancerre",
			"pricePerGlass": 14,
			"pricePerBottle": 56
		},
		{
			"item": "Petit Chablis, Garnier & Fils, 2012, Bourgogne",
			"pricePerGlass": 10,
			"pricePerBottle": 38
		},
		{
			"item": "Viognier, Domaine de Montfaucon, 2014",
			"pricePerGlass": 11,
			"pricePerBottle": 42
		}
	]

	$scope.reds = [
	
		{
			"item": "Pinot Noir, Le Charmel, 2014, Pays d'Oc",
			"pricePerGlass": 9,
			"pricePerBottle": 35
		},
		{
			"item": "Bordeaux, Chateau de Clairvoy, 2005, Bordeaux",
			"pricePerGlass": 10,
			"pricePerBottle": 40
		},
		{
			"item": "Cotes du Rhone Villages, Famille Perrin, 2012, Rhone",
			"pricePerGlass": 11,
			"pricePerBottle": 42
		}
	]
});