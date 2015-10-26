/**
 *
 * By : Matthew Yee
 * Credit to Meteor and their sample code for trying it out
 */
/*global Meteor, Template, Session*/
/*exported  */

/**
 * This function focus on the Client side. Checks if the client is available and if it is then set up a session
 */
if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  /**
   * Once Client is confirmed and the counter is created the session gets counter value
   */

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });
  /**
   * Focuse on the button interaction
   */
  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

/**
 * Checks the server side and only starts up the server side
 */

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
