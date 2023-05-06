import { RequestHandler } from "@remix-run/express";

export const loader: RequestHandler = async (req, res) => {
  // Your server-side logic goes here
  const result = "Hello from server-side function!";

  // Send the result as a JSON response
  return res.status(200).json({ message: result });
};
