export enum HttpStatus {
  // ✅ Success
  OK = 200,
  CREATED = 201,

  // 🔐 Client Errors
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  UNPROCESSABLE_ENTITY = 422,

  // 🚨 Server Error
  INTERNAL_SERVER_ERROR = 500
}
