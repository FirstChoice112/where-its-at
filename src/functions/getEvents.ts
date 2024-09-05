import { APIGatewayProxyHandler } from "aws-lambda";
import { getEvents } from "../events";

export const handler: APIGatewayProxyHandler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(getEvents()),
  };
};
//* Anropa funktionen som exporteras från events.js
