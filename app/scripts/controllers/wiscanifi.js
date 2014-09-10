'use strict';

/**
 * @ngdoc function
 * @name razsapps.controller:WiScaniFi
 * @description
 * # WiScaniFi
 * Controller of the razsapps
 */
angular.module('razsapps')
  .controller('WiScanifi', function ($scope, $sce) {
    $scope.currentPageTitle = 'WiScanifi';
    $scope.navPages = [
      {
          title: 'Apps',
          link: 'apps'
      }
    ];
      
    $scope.appData = {
        name: 'WiScanifi',
        icon: 'images/wiscanifi.png',
        package: 'com.raz.scanner',
        downloadLink: 'https://sites.google.com/site/wiscanifi/wiscanifi.jnlp?attredirects=0',
        description: [
            'In the newest version of Java this application may no longer run.  Please stay tuned for improved installers for your computer. Please attempt to run the computer software before using the application.'
        ]
    };
  });
