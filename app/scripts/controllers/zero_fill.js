'use strict';

/**
 * @ngdoc function
 * @name razsapps.controller:ZeroFill
 * @description
 * # ZeroFill
 * Controller of the razsapps
 */
angular.module('razsapps')
  .controller('ZeroFill', function ($scope) {
    $scope.currentPageTitle = 'Zero Fill';
    $scope.navPages = [
      {
          title: 'Apps',
          link: 'apps'
      }
    ];
      
    $scope.appData = {
        name: 'Zero Fill: Permanent Eraser',
        icon: 'images/zerofill_eraser.png',
        description: [
            'This application will zero out all available memory on your device.  This will help prevent data from being recovered from your device.  It is perfect to use this application before you sell your phone or send it in for repairs.',
            'Since this only zero fills the remaining space it is best to factory reset your phone and run this application to ensure the most data is removed.  By default it fills all remaining data 3 times.  Run it multiple times to help ensure data cannot be recovered.'
        ]
    };
  });
