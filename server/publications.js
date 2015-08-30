Meteor.publish('events', function() {
  return Events.find();
});

Meteor.publish('event', function(eventId) {
	return Events.find(eventId);
});