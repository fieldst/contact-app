var myApp = angular.module('myApp', ['ngRoute'])

//ng-route config
.config(function ($routeProvider, $locationProvider){
  $routeProvider
    .when('/home', {
      templateUrl: 'default.html',
    })
    .when('/contact-info/:contact_index', {
      templateUrl: 'contact_info.html',
      controller: 'contactInfoCtrl'
    })
    .when('/add', {
      templateUrl: 'contact_form.html',
      controller: 'addContactCtrl'
    })
    .when('/edit/:contact_index', {
      templateUrl: 'contact_form.html',
      controller: 'editContactCtrl'
    })
    .otherwise({redirectTo: '/home'});
})

// controllers
.controller('navCtrl', function ($scope) {
  $scope.nav = {
    navItems: ['home', 'add'],
    selectedIndex: 0,
    navClick: function ($index) {
      $scope.nav.selectedIndex = $index;
    }
  };
})

.controller('homeCtrl', function ($scope, ContactService){
  $scope.contacts = ContactService.getContacts();

  $scope.removeContact = function (item) {
    var index = $scope.contacts.indexOf(item);
    $scope.contacts.splice(index, 1);
    $scope.removed = 'Contact successfully removed.';
  };

})

.controller('contactInfoCtrl', function ($scope, $routeParams){
  var index = $routeParams.contact_index;
  $scope.currentContact = $scope.contacts[index];
})

.controller('addContactCtrl', function ($scope, $location) {
  //needed to show the correct button on the contact form
  $scope.path = $location.path();

  $scope.addContact = function () {
    var contact = $scope.currentContact;
    contact.id = $scope.contacts.length;
    $scope.contacts.push(contact);
  };

})

.controller('editContactCtrl', function ($scope, $routeParams){
  $scope.index = $routeParams.contact_index;
  $scope.currentContact = $scope.contacts[$scope.index];
})

// directives
.directive('contact', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'contact.html'
  }
})

// services
.factory('ContactService', [function () {
  var factory = {};

  factory.getContacts = function () {
    return contactList;
  }

  // contact list, usually would be a separate database
  var contactList = [
    {id: 0, name: 'Ann Brown', Type: 'Executive', Title: 'CEO', Phone: '(512)456-555', Ext: '', Fax: '(512)456-5555', Email: 'Executive'},
    {id: 1, name: 'Mary Smith', Type: 'Inmar AR', Title: 'Lorem Ipsum', Phone: '(512)456-555', Ext: '', Fax: '(512)456-5555', Email: 'Inmar Ar'},
    {id: 2, name: 'John Doe', Type: 'Executive', Title: 'Dolor Sit', Phone: '(512)456-555', Ext: '', Fax: '(512)456-5555', Email: 'Executive'},
    {id: 3, name: 'John Doe', Type: 'Daily', Title: 'Dolor sit amet', Phone: '(512)456-555', Ext: '', Fax: '(512)456-5555', Email: 'Daily'},
    {id: 4, name: 'John Doe', Type: 'Other', Title: 'Lorem Ipsum', Phone: '(512)456-555', Ext: '', Fax: '(512)456-5555', Email: 'Other'},
    
  ];
  
  return factory;
}]);

