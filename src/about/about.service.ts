import { Injectable } from '@nestjs/common';
import { readFileSync } from 'node:fs';
import * as process from 'process';
import { join } from 'node:path';
import type { SysInfo } from '@/types/about';

const pkgJson = JSON.parse(
  readFileSync(join(process.cwd(), 'package.json'), 'utf8'),
);

@Injectable()
export class AboutService {
  getSysInfo(): SysInfo {
    return {
      version: pkgJson.version,
      author: pkgJson.author,
    };
  }
}
