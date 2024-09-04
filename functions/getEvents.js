//* functions/getEvents.js
const events = require("../events");

module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(events.getEvents()),
  };
};
//* Anropa funktionen som exporteras från events.js
