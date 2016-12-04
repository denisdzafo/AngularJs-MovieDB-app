
(function(){
    
    var app=angular.module("app")
    
  

    app.controller("searchCtrl", searchCtrl)
    
    
    
    function searchCtrl($scope,$http){
       
        
        
        
        
        var movieLink='https://api.themoviedb.org/3/movie/top_rated?api_key=dd5cab5ddd838f3f46891ecde52389ef';
        var showLink='https://api.themoviedb.org/3/tv/top_rated?api_key=dd5cab5ddd838f3f46891ecde52389ef';
        var searchMovies='https://api.themoviedb.org/3/search/movie?api_key=dd5cab5ddd838f3f46891ecde52389ef&query=';
        var searchShows='https://api.themoviedb.org/3/search/tv?api_key=dd5cab5ddd838f3f46891ecde52389ef&query=';
        $scope.SITE_PATH="http://image.tmdb.org/t/p/w500/"
       
       
        $scope.moviesLoaded=false;
        $scope.showsLoaded=false;
        $scope.moviesSearch=false;
        $scope.provjera=false;
        $scope.pomocni=false;

        
        $scope.getMovies=function(){
            var promise=$http.get(movieLink);
            promise.then(successCallBack, failureCallback)
            
            function successCallBack(result){
                console.log("successCallBack",result.data.results)
                $scope.movies=result.data.results;
                
                
            }
            
            function failureCallback(result){
                console.log("failureCallback",result)
            }
        }
        
        $scope.getShows=function(){
            var promise=$http.get(showLink);
            promise.then(successCallBack, failureCallback)
            
            function successCallBack(result){
                console.log("successCallBack",result.data.results)
                $scope.shows=result.data.results;
            }
            
            function failureCallback(result){
                console.log("failureCallback",result)
            }
        }
        
         $scope.getSearchMovies=function(){
             
            var promise=$http.get(searchMovies+$scope.SearchMovies);
            promise.then(successCallBack, failureCallback)
            
            function successCallBack(result){
                console.log("successCallBack",result.data.results)
                $scope.movies=result.data.results;
                $scope.moviesLoaded=true;
            
            }
            
            function failureCallback(result){
                console.log("failureCallback",result)
            }
        }
         
         $scope.getSearchShows=function(){
             
            var promise=$http.get(searchShows+$scope.SearchShows);
            promise.then(successCallBack, failureCallback)
            
            function successCallBack(result){
                console.log("successCallBack",result.data.results)
                $scope.shows=result.data.results;
                $scope.showsLoaded=true;
            }
            
            function failureCallback(result){
                console.log("failureCallback",result)
            }
        }
        
         $scope.getMoviesByClick=function(title, picture, description){
            $scope.naslov=title;
             $scope.slika=picture;
             $scope.opis=description;
             $scope.provjera=true;
                 
             
        }
         $scope.getShowsByClick=function(title, picture, description){
            $scope.naslovShow=title;
             $scope.slikaShow=picture;
             $scope.opisShow=description;
             $scope.pomocni=true;
                 
             
        }
       
       $scope.doTheBack = function() {
             window.location.reload();
       };
                       
      
       
    }
})();