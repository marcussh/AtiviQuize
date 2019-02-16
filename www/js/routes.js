angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('quizes', {
    url: '/page1',
    templateUrl: 'templates/quizes.html',
    controller: 'quizesCtrl'
  })

  .state('quizesRealizados', {
    url: '/page19',
    templateUrl: 'templates/quizesRealizados.html',
    controller: 'quizesRealizadosCtrl'
  })

  .state('login', {
    url: '/page2',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('ranking', {
    url: '/page10',
    templateUrl: 'templates/ranking.html',
    controller: 'rankingCtrl'
  })

  .state('quizQuMica', {
    url: '/page3',
    templateUrl: 'templates/quizQuMica.html',
    controller: 'quizQuMicaCtrl'
  })

  .state('quizHistRia', {
    url: '/page18',
    templateUrl: 'templates/quizHistRia.html',
    controller: 'quizHistRiaCtrl'
  })

  .state('1', {
    url: '/page4',
    templateUrl: 'templates/1.html',
    controller: '1Ctrl'
  })

  .state('2', {
    url: '/page14',
    templateUrl: 'templates/2.html',
    controller: '2Ctrl'
  })

  .state('1ResultadoX', {
    url: '/page13',
    templateUrl: 'templates/1ResultadoX.html',
    controller: '1ResultadoXCtrl'
  })

  .state('1Resultado', {
    url: '/page11',
    templateUrl: 'templates/1Resultado.html',
    controller: '1ResultadoCtrl'
  })

  .state('2Resultado', {
    url: '/page15',
    templateUrl: 'templates/2Resultado.html',
    controller: '2ResultadoCtrl'
  })

  .state('2ResultadoX', {
    url: '/page16',
    templateUrl: 'templates/2ResultadoX.html',
    controller: '2ResultadoXCtrl'
  })

  .state('quiz1MODEL', {
    url: '/page12',
    templateUrl: 'templates/quiz1MODEL.html',
    controller: 'quiz1MODELCtrl'
  })

  .state('quiz2', {
    url: '/page8',
    templateUrl: 'templates/quiz2.html',
    controller: 'quiz2Ctrl'
  })

  .state('prXimasTarefas', {
    url: '/page5',
    templateUrl: 'templates/prXimasTarefas.html',
    controller: 'prXimasTarefasCtrl'
  })

  .state('tarefas', {
    url: '/page9',
    templateUrl: 'templates/tarefas.html',
    controller: 'tarefasCtrl'
  })

  .state('resultado', {
    url: '/page6',
    templateUrl: 'templates/resultado.html',
    controller: 'resultadoCtrl'
  })

  .state('menu', {
    url: '/page20',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('pontuaO', {
    url: '/page22',
    templateUrl: 'templates/pontuaO.html',
    controller: 'pontuaOCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});