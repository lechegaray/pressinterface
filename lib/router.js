Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', {name: 'login'});

Router.route('/selection', function () {
  this.render('selection');
});

Router.route('/job', function () {
  this.render('job');
});


Router.route('/workcenter/:_id', {
    name: 'workcenter'
});

Router.route('/about', function () {
    this.render('about', {
        data: function () {
            return Cycles.find({}, {sort: {'_id': -1}});
        }
    });
});
