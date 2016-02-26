angular.module('starter.controllers').controller('TransactionsCtrl', function ($scope, $http) {

  $scope.init = function () {
    $scope.dateData = {};
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', "Oct", 'Nov', 'Dec'];
    $scope.data.forEach(function (item) {
      var dateTime = new Date(item.postDate);
      var month = months[dateTime.getMonth()];
      var date = dateTime.getDate();
      var year = dateTime.getFullYear();
      var dateStr = month + '-' + date + '-' + year;

      var list = $scope.dateData[dateStr] || [];

      switch (item.category) {
        case "Groceries":
          item.icon = 'fa-shopping-cart';
          break;
        case "Credit Card Payments":
          item.icon = 'fa-credit-card';
          break;
        case "Restaurants/Dining":
          item.icon = 'fa-cutlery';
          break;
        case "Travel":
          item.icon = 'fa-plane';
          break;

      }

      list.push(item);
      $scope.dateData[dateStr] = list;
    })
  };

   $scope.clickType = function (type) {
    $scope.subTypes.forEach(function (itype) {
      itype.active = false;
    });

    type.active = true;
  };

  $scope.subTypes = [
    {title: 'Change', active: true},
    {title: 'Deposit', active: false}
  ];

  $scope.subData = {
    'Jan-12-2016': [{type: 'One time', amount: 50}],
    'Dec-20-2015': [{type: 'Recurring', subType: 'monthly', amount: 20}],
    'Nov-20-2015': [{type: 'Recurring', subType: 'monthly', amount: 20}],
    'Nov-07-2015': [{type: 'One time', amount: 15}],
    'Oct-20-2015': [{type: 'Recurring', subType: 'monthly', amount: 20}],
    'Sep-20-2015': [{type: 'Recurring', subType: 'monthly', amount: 20}],
    'Aug-20-2015': [{type: 'Recurring', subType: 'monthly', amount: 20}],
    'Jul-20-2015': [{type: 'Recurring', subType: 'monthly', amount: 20}]
  };
  });
