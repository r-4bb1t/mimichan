class CustomError extends Error {
  constructor(name: string, message: string) {
    super(message);
    this.name = name;
  }
}

// Write your custom error below...

export default CustomError;
