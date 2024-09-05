//* functions/orderTicket.js
import { APIGatewayProxyHandler } from "aws-lambda";
import { getEvents } from "../events";

export const handler: APIGatewayProxyHandler = async (event) => {
  try {
    const events = getEvents();
    const { id } = JSON.parse(event.body || "{}");
    const eventDetails = events.find((e) => e.id === id);

    if (!eventDetails) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "Event not found" }),
      };
    }

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
        error: error instanceof Error ? error.message : "Unknown error",
      }),
    };
  }
};
