'use strict';

/**
 * @ngdoc function
 * @name razsapps.controller:AppHome
 * @description
 * # AppHome
 * Controller of the razsapps
 */
angular.module('razsapps')
  .controller('BlueConnect', function ($scope) {
    $scope.appData = {
        name: 'Blue Connect',
        icon: 'images/blue_connect.png',
        description: [
            'Blue Connect is no way affiliated with BT Mate (Please visit http://btmate.com/ to learn how to create a DIY garage opener).',
            'This is a widget that is offered as an alternative to the app provided by BT Mate.  It will allow you to chose the icon and label of your widget along with what bluetooth device to connect and then immediately disconnect to.  This way you can have multiple devices reachable from your home screen.  The widget will automatically enable your bluetooth to attempt the connection and will then disable your bluetooth after it is done (if your bluetooth was disabled when originally trying to connect).  You will be able to setup the bluetooth connect right from the widget itself!',
            'Since this widget is not associated with BT Mate please take time to donate the person who created the idea of using a Samsung HM1100 headset to open garages.  For more information on how to create the DIY device please see his webpage or youtube video.'
        ]
    };
  });
