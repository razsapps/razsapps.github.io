'use strict';

/**
 * @ngdoc function
 * @name razsapps.controller:PhoneToComputer
 * @description
 * # PhoneToComputer
 * Controller of the razsapps
 */
angular.module('razsapps')
  .controller('PhoneToComputer', function ($scope, $sce) {
    $scope.currentPageTitle = 'Phone to Computer';
    $scope.navPages = [
      {
          title: 'Apps',
          link: 'apps'
      }
    ];
      
    $scope.appData = {
        name: 'Phone to Computer',
        icon: 'images/phone_to_computer.png',
        package: 'com.raz.ptc',
        downloadLink: 'https://sites.google.com/site/razsapps/ptc.jnlp?attredirects=0',
        description: [
            'This project is no longer supported.  This website is here for legacy purposes for those who still use the application.'
        ]
    };
    
    $scope.replacementApps = [
      {
        text: 'For your HTPC needs please use HTPC Remote.',
        link: 'apps/htpc_remote'
      },
      {
        text: 'For your barcode scanning need please use WiScanifi.',
        link: 'apps/wiscanifi'
      }
    ];

    $scope.videoUrls = [
      $sce.trustAsResourceUrl('//www.youtube.com/embed/WDhnBngNBmQ'),
      $sce.trustAsResourceUrl('//www.youtube.com/embed/nxurpbh34wE'),
      $sce.trustAsResourceUrl('//www.youtube.com/embed/kNnUjUJOpPc')
    ]
  });
