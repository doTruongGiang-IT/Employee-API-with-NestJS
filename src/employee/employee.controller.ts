/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('api/employees')
export class EmployeeController {
    constructor(private empService: EmployeeService) {};

    @Get()
    getAllEmployees() {
        return this.empService.getAllEmployees();
    };

    @Get(':id')
    getEmployee(@Param('id') id: number) {
        return this.empService.getEmployee(id);
    };

    @Post()
    addEmployee(@Body('firstName') firstName: string, @Body('lastName') lastName: string, @Body('email') email: string) {
        return this.empService.insertEmployee(firstName, lastName, email);
    };

    @Patch(":id")
    updateEmployee(@Param('id') id: number, @Body('firstName') firstName: string, @Body('lastName') lastName: string, @Body('email') email: string) {
        return this.empService.updateEmployee(id, firstName, lastName, email);
    };

    @Delete(':id')
    removeEmployee(@Param('id') id: number) {
        return this.empService.deleteEmployee(id);
    };
}
