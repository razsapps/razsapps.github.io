'use strict';

/**
 * @ngdoc function
 * @name razsapps.controller:HtpcRemote
 * @description
 * # HtpcRemote
 * Controller of the razsapps
 */
angular.module('razsapps')
  .controller('HtpcRemote', function ($scope, $sce) {
    $scope.currentPageTitle = 'HTPC Remote';
    $scope.navPages = [
        {
            title: 'Apps',
            link: 'apps'
        }
    ];
    
    $scope.appData = {
        name: 'HTPC Remote',
        icon: 'images/htpc_remote.png',
        package: 'com.ras.htpcremote'
    };
    
    $scope.installData = [
        {
            os: 'Windows',
            icon: 'images/windows.png',
            link: 'https://dl.dropboxusercontent.com/s/tm2kzzf8vllikbt/htpc_setup.exe?dl=1',
            description: [
                'Java 6.0 or newer is needed to run this software.  If you do not have it installed you will be prompted to install it the first time you run the application.',
                'You will need download and install htpc_setup.exe . You may need to grant it permission to the internet in order for your phone to communicate with the software.',
                'This has been tested on Windows XP and Windows 7.  This software has not been tested on Windows 8 yet and it may not run or may have issues running.  I am working on verifying the software on this operating system'
            ]
        },
        {
            os: 'OSX',
            icon: 'images/apple.png',
            link: 'https://dl.dropboxusercontent.com/s/p2gwt7k4utico1p/HTPC%20Remote.zip?dl=1',
            java_download: 'https://www.java.com/en/download/',
            java_text: 'Java 7.0 or newer is needed to run the software',
            description: [
                'OSX version is beta',
                'Depending on the version of your operating system and the version of your java the operating system may prevent you from running this application.  You can change your settings to allow it run by going to Apple Menu -> System Preferences -> Security & Privacy >General Tab. Select "Anywhere" from the options available in "Allow applications downloaded from".  For more information, visit Apple\'s official site (http://support.apple.com/kb/ht5290).',
                'This is just the application file. You can drag it into your application folder to permanently install it or just launch it from the downloaded file whenever you want.'
            ]
        },
        {
            os: 'Linux',
            icon: 'images/linux.png',
            link: 'https://sites.google.com/site/razhtpc/htpc_deploy.jnlp',
            java_download: 'https://www.java.com/en/download/',
            java_text: 'Java 6.0 or newer is needed to run the software',
            description: [
                'This software has only been tested on Ubuntu and a much older version of Mint.  You need the official java software to run this and not OpenJDK.  OpenJDK WILL NOT work.  While I have not tested it with other distros, it is most likely this will work on all major linux distros.'
            ]
        }
    ];
    
    $scope.videoUrl = $sce.trustAsResourceUrl('//www.youtube.com/embed/OyAgIf1CWn4');
    $scope.privacyPolicyLink = '/apps/htpc_remote/htpc_privacy';
  });
