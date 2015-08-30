Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('eventsList', {
    path: '/events',
    waitOn: function() {
      return Meteor.subscribe('events');
    }
  });

  this.route('eventSubmit', { path: '/event/submit' });

  this.route('eventPage', {
    path: '/event/:_id',
    waitOn: function() {
      return [
        Meteor.subscribe('event', this.params._id)
      ];
    },
    data: function() { return Events.findOne(this.params._id); }
  });
});