app = angular.module('mainApp',[]);
app.controller('TodoController',['$scope',function($scope) {

    // задание асинхронного режима
    chrome.storage.sync.get('todolist',function(value){
        // в связи с обработкой события не из angular
        // необходимо применять $apply
        $scope.$apply(function(){
            $scope.load(value);
        })
    });
    // выполнить инициализацию данных
    $scope.load = function(value){
        if (value && value.todolist){
            $scope.todos = value.todolist;
        }else{
            $scope.todos = [
                {text:'learn angular', done:true},
                {text:'build an angular app', done:false}];
        }
    }
    // сохранить в хранилище данные
    $scope.save = function(){
        chrome.storage.sync.set({'todolist':$scope.todos});
    };


    $scope.addTodo = function() {
        $scope.todos.push({text:$scope.todoText, done:false});
        $scope.todoText = '';
    };
    // количество выполненных задач
    $scope.remaining = function() {
        var count = 0;
        angular.forEach($scope.todos, function(todo) {
            count += todo.done ? 0 : 1;
        });
        return count;
    };

    $scope.archive = function() {
        var oldTodos = $scope.todos;
        $scope.todos = [];
        angular.forEach(oldTodos, function(todo) {
            if (!todo.done) $scope.todos.push(todo);
        });
    };
}
]);