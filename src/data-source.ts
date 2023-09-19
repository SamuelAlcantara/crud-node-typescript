import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "root",
  database: "produtos_db",
  synchronize: true,
  logging: true,
  entities: [__dirname + "/**/*.entity.ts"],
  subscribers: [],
  migrations: [],
});

AppDataSource.initialize().then(() => console.log("database connected success")).catch((error) => console.log(error))

export default AppDataSource;
