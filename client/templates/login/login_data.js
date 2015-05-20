var loginData = [
    {
        name: '3027A'
    },
    {
        name: '3027B'
    },
    {
        name: '3027C'
    },
    {
        name: '3027D'
    },
    {
        name: '3027E'
    },
    {
        name: '3027F'
    },
    {
        name: '3027G'
    },
    {
        name: '3027H'
    }
];

Template.login.helpers({
    workCenters: loginData,
    cycles: function() {
        return Cycles.find({}, {sort: {'CycleTimeStamp': -1}});
    }
});


Template.login.events({
    "submit .workcenterSelection": function(event){
        event.preventDefault();
        console.log(event);
        var text = event.target.text.value;
        console.log(text);
        currentYear = Meteor.call('getCurrentYear');
        console.log("second hi")  ;
        return false;
    }
});
