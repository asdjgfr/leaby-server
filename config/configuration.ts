import type { Config } from '~types/config.yaml';
import { readFileSync } from 'node:fs';
import * as yaml from 'js-yaml';
import { join } from 'node:path';

const YAML_CONFIG_FILENAME = 'config.yaml';

export default yaml.load(
  readFileSync(join(process.cwd(), 'config', YAML_CONFIG_FILENAME), 'utf8'),
) as Config;
