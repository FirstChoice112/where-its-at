//* functions/orderTicket.js
const events = require("../events").getEvents();

module.exports.handler = async (event) => {
  try {
    //* Konvertera event.body från JSON till JavaScript-objekt
    const { id } = JSON.parse(event.body);
    //* Hitta evenemanget med det angivna id:t
    const eventDetails = events.find((e) => e.id === id);

    if (!eventDetails) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "Event not found" }),
      };
    }

    //* Generera biljettNr
    const ticketNr = Math.floor(Math.random() * 10000);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Ticket successfully ordered",
        eventDetails,
        ticketNr,
      }),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Invalid request",
        error: error.message,
      }),
    };
  }
};
