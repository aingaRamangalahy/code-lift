/**
 * Custom ErrorResponse Class
 */
 class ErrorResponse extends Error {
  private statusCode: number;
  

  constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
  }
}

export { ErrorResponse }