var app=angular.module("joke",[]);
app.controller("search",function search($scope,$http){
    $scope.showJoke=function(){
        const url='https://v2.jokeapi.dev/joke/Any'

        $http.get(url).then(onUserComplete,onError)
        
       


    }
    var onUserComplete=function(response){
        var data=response.data
        if(data.type=="single"){
            $scope.output=data.joke;

        }
        else{
            $scope.output=data.setup+"\n"+data.delivery;

        }
        console.log(data);

    }
    var onError=function(reason){
        $scope.output="ERROR404";


    }



})