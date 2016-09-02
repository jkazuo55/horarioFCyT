angular
	.module('starter.controllers',['ionic'])
	.controller('AppCtrl',appCtrl);
	function appCtrl($ionicSideMenuDelegate){
		this.toggleLeft= function(){
			$ionicSideMenuDelegate.toggleLeft();
		}
	}
