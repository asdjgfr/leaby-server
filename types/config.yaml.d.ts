// Automatically generated by script, please do not modify this file manually.
// program-path\config\config.yaml
export interface Config {
  port: number;
  globalPrefix: string;
  swaggerPath: string;
  db: DB;
}

export interface DB {
  type: string;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  synchronize: boolean;
}
