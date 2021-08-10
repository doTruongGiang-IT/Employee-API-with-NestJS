/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Employee } from "./employee/employee.entity";

export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'your_password_here',
    database: 'nest_employee',
    entities: [Employee],
    synchronize: true,
};
