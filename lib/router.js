Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', {name: 'login'});

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

