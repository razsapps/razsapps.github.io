'use strict';

/**
 * @ngdoc function
 * @name razsapps.controller:DecisionMaker
 * @description
 * # DecisionMaker
 * Controller of the razsapps
 */
angular.module('razsapps')
  .controller('DecisionMaker', function ($scope, $sce) {
    $scope.appData = {
        name: 'Decision Maker',
        icon: 'images/decision_maker.png',
        description: [
            'This app can randomly choose a value from a list you created (or one of the predefined lists).',
        ]
    };

    $scope.videoUrl = $sce.trustAsResourceUrl('//www.youtube.com/embed/_t2U-T-EkxY');
  });
