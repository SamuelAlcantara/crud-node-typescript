import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "admin",
  password: "root",
  database: "produtos_db",
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
})
