class ApiResponse {
  constructor(data, statusCode, message = "success") {
    super(message);
    this.data = data;
    this.message = message;
    this.statusCode = statusCode < 400;
  }
}

export { ApiResponse };
