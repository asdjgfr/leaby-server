import type { Config } from '~types/config.yaml';
import { readFileSync } from 'node:fs';
import * as yaml from 'js-yaml';
import { join } from 'node:path';
import { merge } from 'lodash';

const YAML_CONFIG_LOCAL_FILENAME = 'config.local.yaml';
const YAML_CONFIG_FILENAME = 'config.yaml';

export default merge(
  yaml.load(
    readFileSync(
      join(process.cwd(), 'config', YAML_CONFIG_LOCAL_FILENAME),
      'utf8',
    ),
  ),
  yaml.load(
    readFileSync(join(process.cwd(), 'config', YAML_CONFIG_FILENAME), 'utf8'),
  ),
) as Config;
