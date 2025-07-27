import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../../services/employee.service';
import { DepartmentService, Department } from '../../services/department.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeList: Employee[] = [];
  departmentList: Department[] = [];

  employee: Employee = {
    employeeId: 0,
    name: '',
    email: '',
    phone: '',
    salary: 0,
    departmentId: 0
  };

  constructor(
    private empService: EmployeeService,
    private deptService: DepartmentService
  ) { }

  ngOnInit(): void {
    this.loadEmployees();
    this.loadDepartments();
  }

  loadEmployees(): void {
    this.empService.getEmployees().subscribe({
      next: (data) => this.employeeList = data,
      error: (err) => console.error('Error loading employees:', err)
    });
  }

  loadDepartments(): void {
    this.deptService.getDepartments().subscribe({
      next: (data) => this.departmentList = data,
      error: (err) => console.error('Error loading departments:', err)
    });
  }

  onSubmit(): void {
    if (this.employee.employeeId === 0) {
      this.empService.addEmployee(this.employee).subscribe({
        next: () => {
          this.loadEmployees();
          this.resetForm();
        },
        error: (err) => console.error('Error adding employee:', err)
      });
    } else {
      this.empService.updateEmployee(this.employee).subscribe({
        next: () => {
          this.loadEmployees();
          this.resetForm();
        },
        error: (err) => console.error('Error updating employee:', err)
      });
    }
  }

  editEmployee(emp: Employee): void {
    this.employee = { ...emp };
  }

  deleteEmployee(id: number): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.empService.deleteEmployee(id).subscribe({
        next: () => this.loadEmployees(),
        error: (err) => console.error('Error deleting employee:', err)
      });
    }
  }

  resetForm(): void {
    this.employee = {
      employeeId: 0,
      name: '',
      email: '',
      phone: '',
      salary: 0,
      departmentId: 0
    };
  }

  getDepartmentName(departmentId: number): string {
    const dept = this.departmentList.find(d => d.departmentId === departmentId);
    return dept ? dept.name : 'N/A';
  }
}