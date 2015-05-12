Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', {name: 'login'});

Router.route('/about', {name: 'about'});