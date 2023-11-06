

export class ErrorWithCode extends Error {
  constructor(
    message: string,
    public status: number,
    public code: string
  ) {
    super(message)
  }
}