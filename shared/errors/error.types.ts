export enum ResponseType {
  SUCCESS = 'Success',
  CREATED = 'Created',
  VALIDATION = 'ValidationError',
  AUTH = 'AuthError',
  NOT_FOUND = 'NotFoundError',
  CONFLICT = 'ConflictError',
  SERVER = 'ServerError',
  FORBIDDEN = 'ForbiddenError',
}
