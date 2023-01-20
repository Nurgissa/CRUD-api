import { ServerResponse } from "http";
import { UserError } from "./user/errors";

export function toJSON(res: ServerResponse, code: number, data: any) {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(code);
  res.end(JSON.stringify(data));
}

export function toError(res: ServerResponse, error: unknown) {
  let statusCode = 500;

  if (error instanceof UserError) {
    if (error.name === "MALFORMED_INPUT") {
      statusCode = 400;
    } else if (error.name === "NOT_FOUND") {
      statusCode = 404;
    }
  }

  res.setHeader("Content-Type", "application/json");
  res.writeHead(statusCode);
  res.end(
    JSON.stringify({
      error,
    })
  );
}
