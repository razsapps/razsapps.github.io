'use strict';

/**
 * @ngdoc function
 * @name razsapps.controller:AppHome
 * @description
 * # AppHome
 * Controller of the razsapps
 */
angular.module('razsapps')
  .controller('AppHome', function ($scope) {
    $scope.apps = [
        {
            name: 'HTPC Remote',
            icon: 'images/htpc_remote.png',
            site: 'htpc_remote'
        },
        {
            name: 'WiScanifi',
            icon: 'images/wiscanifi.png',
            site: 'wiscanifi'
        },
        {
            name: 'Blue Connect',
            icon: 'images/blue_connect.png',
            site: 'blue_connect'
        },
        {
            name: 'Zero Fill: Permanent Eraser',
            icon: 'images/zerofill_eraser.png',
            site: 'zero_fill'
        },
        {
            name: 'Phone to Computer',
            icon: 'images/phone_to_computer.png',
            site: 'ptc'
        },
        {
            name: 'Decision Maker',
            icon: 'images/decision_maker.png',
            site: 'decision_maker'
        }
    ];
  });
