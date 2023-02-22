import { createHmac } from 'node:crypto';
export function hexPassword(secret: string, password: string) {
  return createHmac('sha256', secret).update(password).digest('hex');
}
