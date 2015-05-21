// Meteor.publish('cycles-recent', function publishFunction () {
//   return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}, limit: 5});
// });

// Meteor.publish('cycles-recent', function () {
//   var startOfDay = moment().startOf('day').format("YYYY-MM-DD");
//   console.log(startOfDay);
//   return Cycles.find({CycleTimeStamp: { $gte: startOfDay}});
// });

Meteor.publish('cycles-recent', function (startTime) {
  console.log(startTime);
  return Cycles.find({CycleTimeStamp: { $gte: startTime}});
});


Meteor.methods({
  getCurrentTime: function () {
    // var times = [];

		console.log('on server, getCurrentTime called');

    // var currentTime = moment();
    // times.push(currentTime.format("h:mm:ss a"));
    //
    // var duration = currentTime.add(5000, 's');
    // times.push(duration.format("h:mm:ss a"));
    //
    // return times;

    var currentTime = moment().format("h:mm:ss a");
    return currentTime;
  }
});
