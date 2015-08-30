Events = new Meteor.Collection('events');

Events.attachSchema(new SimpleSchema({
	name: {
    type: String,
    label: "イベント名"
  },
  description: {
    type: String,
    label: "説明"
  },
  organization: {
    type: String,
    label: "企業・団体"
  }
}));