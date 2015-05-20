Meteor.publish('cycles-recent', function publishFunction () {
  return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}, limit: 50});
});


Meteor.methods({
  getCurrentTime: function () {
    var times = [];

		console.log('on server, getCurrentTime called');

    var currentTime = moment();
    times.push(currentTime.format("h:mm:ss a"));

    var duration = currentTime.add(5000, 's');
    times.push(duration.format("h:mm:ss a"));

    return times;
  }
});
