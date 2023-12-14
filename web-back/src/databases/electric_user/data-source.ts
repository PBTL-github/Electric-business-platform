import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity";

export const ElectricUser = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "123456",
  database: "electric_user",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
