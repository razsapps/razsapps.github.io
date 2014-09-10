'use strict';

/**
 * @ngdoc function
 * @name razsapps.controller:HtpcRemotePrivacyPolicy
 * @description
 * # HtpcRemotePrivacyPolicy
 * Controller of the razsapps
 */
angular.module('razsapps')
  .controller('HtpcRemotePrivacyPolicy', function ($scope) {
    $scope.currentPageTitle = 'Privacy Policy';
    $scope.navPages = [
        {
            title: 'Apps',
            link: 'apps'
        },
        {
            title: 'HTPC Remote',
            link: 'apps/htpc_remote'
        },
    ];
      
    $scope.intro = ['We use technologies like unique device identifiers to anonymously identify your device so we can deliver a better experience. Our systems can also log information like your browser, operating system and IP address.  We make a best effort to not collect personal identifiable information (such as name, address, email or phone). We do collect how the application is being used so we can better serve you.'];


    $scope.policies = [
        {
            header: 'Location',
            content: [
                'We may use or collect your precise geographic location.'
            ]
        },
        {
            header: 'Retention',
            content: [
                'We may keep data indefinitely.'
            ]
        },
        {
            header: 'Third Parties',
            content: [
                'In order to serve you, we may share your personal and anonymous information with other companies, including vendors and contractors. Their use of information is limited to these purposes, and subject to agreements that require them to keep the information confidential. Our vendors provide assurance that they take reasonable steps to safeguard the data they hold on our behalf, although data security cannot be guaranteed.',
                'Analytics companies may access anonymous data (such as your IP address or device ID) to help us understand how our services are used. They use this data solely on our behalf. They do not share it except in aggregate form; no data is shared as to any individual user.',
                'Ad companies may use and collect anonymous data about your interests to customize content and advertising here and in other sites and applications. Interest and location data may be linked to your device, but is not linked to your identity.  '
            ]
        },
        {
            header: 'Security',
            content: [
                'We take reasonable steps to secure your personally identifiable information against unauthorized access or disclosure. We encrypt transmission of data on pages where you provide payment information. However, no security or encryption method can be guaranteed to protect information from hackers or human error.',
                'Information we collect may be stored or processed on computers located in any country where we do business.'
            ]
        },
        {
            header: 'Special circumstances',
            content: [
                'To operate the service, we also may make identifiable and anonymous information available to third parties in these limited circumstances: (1) with your express consent, (2) when we have a good faith belief it is required by law, (3) when we have a good faith belief it is necessary to protect our rights or property, or (4) to any successor or purchaser in a merger, acquisition, liquidation, dissolution or sale of assets. Your consent will not be required for disclosure in these cases, but we will attempt to notify you, to the extent permitted by law to do so.'
            ]
        },
        {
            header: 'Updates',
            content: [
                'This privacy policy was last updated on 9/3/2013. Our privacy policy may change from time to time. If we make any material changes to our policies, we will place a prominent notice on our website or application.'
            ]
        },
        {
            header: 'Consent',
            content: [
                'By using the application you consent to this privacy policy.'
            ]
        }];
  });
