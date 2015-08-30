Products = new Meteor.Collection('products');

Products.attachSchema(new SimpleSchema({
	title: {
    type: String,
    label: "タイトル"
  },
  description: {
    type: String,
    label: "説明"
  },
  url: {
    type: String,
  },
  eventId: {
    type: String,
  }
}));
