class ApiError extends Error {
  constructor(
    data,
    statusCode,
    message = "something is wrong in error class!",
    errors = [],
    stack = ""
  ) {
    super(message);
    (this.data = data),
      (this.statusCode = statusCode),
      (this.message = message),
      (this.errors = errors);

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
