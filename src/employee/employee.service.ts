/* eslint-disable prettier/prettier */
import { Employee } from './employee.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(Employee)
        private empRepository: Repository<Employee>
    ) {};

    async getAllEmployees(): Promise<Employee[]> {
        return await this.empRepository.find();
    };

    async getEmployee(id: number): Promise<Employee> {
        const emp = await this.empRepository.findOne(id);
        if(!emp) throw new NotFoundException("Can't find employee");
        return emp;
    };

    async insertEmployee(firstName: string, lastName: string, email: string) {
        const newEmployee = {firstName, lastName, email};
        await this.empRepository.save(newEmployee);
        return newEmployee;
    };

    async updateEmployee(id: number, firstName: string, lastName: string, email: string): Promise<Employee> {
        const updateEmp = await this.getEmployee(id);
        if(updateEmp) {
            if(firstName) (await updateEmp).firstName = firstName;
            if(lastName) (await updateEmp).lastName = lastName;
            if(email) (await updateEmp).email = email;
            await this.empRepository.save(updateEmp);
        }else {
            throw new NotFoundException("Can't find employee to update");
        };
        return updateEmp;
    };

    async deleteEmployee(id: number): Promise<void> {
        await this.empRepository.delete(id);
    };
}
