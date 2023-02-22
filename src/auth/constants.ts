import configuration from '../../config/configuration';
import { v4 } from 'uuid';

const secret = configuration.jwt?.secret ?? 'auto';
export const jwtConstants = {
  secret: secret === 'auto' ? v4() : secret,
};
