import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

export const dummyUserData = onRequest((request, response) => {
  logger.info("Dummy User Data!", { structuredData: true });
  response.json([
    {
      email: "example@gmail.com",
      name: "example",
    },
    {
      email: "example1@gmail.com",
      name: "example1",
    },
  ]);
});
