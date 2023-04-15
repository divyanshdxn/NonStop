export type ApplicationResponse<
  Type extends "SUCCESS" | "ERROR",
  Payload = any
> = Type extends "ERROR"
  ? {
      statusType: "ERROR";
      error: {
        message: string;
        code?: number;
      };
    }
  : Type extends "SUCCESS"
  ? {
      statusType: "SUCCESS";
      message?: string;
      code?: number;
      payload?: Payload;
    }
  : never;

export function makeErrorResponse(
  message: string,
  code?: number
): ApplicationResponse<"ERROR"> {
  return {
    statusType: "ERROR",
    error: {
      message,
      code,
    },
  };
}

export function makeSuccessResponse<T>(
  payload: T,
  message?: string,
  code?: number
): ApplicationResponse<"SUCCESS", T> {
  return {
    statusType: "SUCCESS",
    message,
    code,
    payload,
  };
}
