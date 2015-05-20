Meteor.subscribe('cycles-recent');

var partStats = {
    workcenterName: "01",
    partNumber: "CCDD",
    partCycleTime: "23",
    partsPlanned: "2000",
    cavities: "4",
    tech: "LE"
};

Template.job.helpers({
  calculateTime: function () {
    //calculate the amount of time needed for the job
    var estimatedTime = (partStats.partsPlanned / partStats.cavities) * partStats.partCycleTime;
    return displayHours = moment().startOf('day').seconds(estimatedTime).format('H:mm:ss');
  },
  currentTime: function () {
    var times = ReactiveMethod.call("getCurrentTime");
    return times;
  },
  incomingCycles: function () {
    //grab all cycles from today
    return Cycles.find({}, {sort: {CycleTimeStamp:-1}});
  }

});
