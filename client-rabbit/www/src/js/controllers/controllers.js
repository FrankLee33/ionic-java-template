angular.module('starter.controllers', [])

.controller('DashCtrl', function($socket,$hprose,$scope,$ionicLoading,$cordovaImagePicker) {
	$socket.setEvent('open',function(e){
		console.log('open2...');
	});

	$socket.addHandler('hasMsg',function(e){
		console.log('hasMsg1...');
	});
	$socket.addHandler('hasMsg',function(e){
		console.log('hasMsg2...');
	});
	
	$scope.sendMsg=function(){
		$hprose.call('schoolUser.sendMsg',[],function(rs){
	      	$ionicLoading.show({ template: '发送数据成功',duration:2000});
      	});	
	};
	$scope.enterSchool=function(){
		$hprose.call('schoolUser.enterSchool',[1],function(rs){
	      	$ionicLoading.show({ template: '进入学校',duration:2000});
      	});
		
		
	};

	$scope.userLogin=function(){
		$hprose.call('schoolUser.login',['s0001','123456',''],function(rs){
	      	$ionicLoading.show({ template: '用户登录',duration:2000});
      	});
	};

	$scope.connRoom=function(){
		$socket.open();
	};







 // Form data for the login modal
    $scope.loginData = {};
    $scope.imgSrc = "";
    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });
    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
        $scope.modal.hide();
    };
    // Open the login modal
    $scope.login = function () {
        $scope.modal.show();
    };
    //image picker
    $scope.pickImage = function () {
        console.log("haha");
        var options = {
            maximumImagesCount: 1,
            width: 800,
            height: 800,
            quality: 80
        };
        $cordovaImagePicker.getPictures(options)
            .then(function (results) {
                console.log(results);
                $scope.imgSrc = results[0];
            }, function (error) {
                // error getting photos
            });
    }
	
})