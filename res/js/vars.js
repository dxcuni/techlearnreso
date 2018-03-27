 var url_home = "https://rawgit.com/dxcuni/techlearnreso/itg";
 var url_image = "https://raw.githubusercontent.com/dxcuni/techlearnreso/itg/res/images/";
 var url_mode2 = "https://rawgit.com/dxcuni/techlearnreso/itg/pages/mode2page/modetwopage.html?page=";
 var mode2Image = "browseall.jpg";
    

var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {    
    $scope.url_home = "https://rawgit.com/dxcuni/techlearnreso/itg";
    $scope.url_image =  "https://raw.githubusercontent.com/dxcuni/techlearnreso/itg/res/images/";
    $scope.url_mode2 = "https://rawgit.com/dxcuni/techlearnreso/itg/pages/mode2page/modetwopage.html?page=";
    
    $scope.location = function (page) {
        var pages = JSON.parse(conf);
        return pages[page].name;
    };
    $scope.mode2conf = function () {
        var pages = JSON.parse(mode2conf);
        return pages[0].name;
    };
});


