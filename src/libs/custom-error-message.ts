import type { Context, Env } from 'hono';

export class CustomErrorMessage extends Error {
  private status = false;
  private data: ErrorMessage;

  constructor(message: string, data: ErrorMessage) {
    super(message);
    this.name = this.constructor.name;
    data = {
      ...data,
      message: this.message,
    };
    this.data = data;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const errorResponseMessage = (err: any, c: Context<Env>) => {
  console.error(err);
  if (err instanceof CustomErrorMessage) {
    return c.json(err, 400);
  }
  return c.text('Bad request', 400);
};
