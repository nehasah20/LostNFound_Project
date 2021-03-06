// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services' ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider ) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    cache: false,
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      cache: false,
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      cache: false,
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

     .state('homepage', {
      url: '/homepage',
      templateUrl: 'templates/homepage.html',
      controller: 'HomepageCtrl'
     
  }) 
    .state('frontpage', {
      url: '/frontpage',
      templateUrl: 'templates/frontpage.html',
      controller: 'frontpageCtrl'
  })


     .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
  })

       .state('found', {
      url: '/found',
      templateUrl: 'templates/found.html',
      controller: 'foundCtrl'
  })

       .state('NewlostItem', {
      cache: false,
      url: '/NewlostItem',
      templateUrl: 'templates/NewlostItem.html',
      controller: 'NewlostItemCtrl'
  })

     .state('lost1', {
      url: '/lost1',
      templateUrl: 'templates/lost1.html',
      controller: 'LostCtrl',
      cache: false
  }) 

      .state('add', {
      url: '/add',
      templateUrl: 'templates/add.html',
      controller: 'addCtrl',
      cache: false
  })  
    .state('dummy', {
     url: '/dummy',
    templateUrl: 'templates/dummy.html',
    //controller: 'SignUpCtrl'
  })
    .state('dummy1', {
     url: '/dummy1',
    templateUrl: 'templates/dummy1.html',
    //controller: 'SignUpCtrl'
  })

   .state('signup', {
     url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'SignUpCtrl'
  })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });
  $urlRouterProvider.otherwise('/frontpage');

  // if none of the above states are matched, use this as the fallback
  /*if (starter.services.UserSession.getUser== null) {
  $urlRouterProvider.otherwise('/login');
    }
    else{
        $urlRouterProvider.otherwise('/lost1');
      }*/
});
