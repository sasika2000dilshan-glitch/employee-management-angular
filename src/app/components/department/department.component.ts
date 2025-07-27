import { Component, OnInit } from '@angular/core';
import { DepartmentService, Department } from '../../services/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  departmentList: Department[] = [];

  department: Department = {
    departmentId: 0,
    name: '',
    location: ''
  };

  constructor(private deptService: DepartmentService) { }

  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments(): void {
    this.deptService.getDepartments().subscribe({
      next: (data) => this.departmentList = data,
      error: (err) => console.error('Error loading departments:', err)
    });
  }

  onSubmit(): void {
    if (this.department.departmentId === 0) {
      this.deptService.addDepartment(this.department).subscribe({
        next: () => {
          this.loadDepartments();
          this.resetForm();
        },
        error: (err) => console.error('Error adding department:', err)
      });
    } else {
      this.deptService.updateDepartment(this.department).subscribe({
        next: () => {
          this.loadDepartments();
          this.resetForm();
        },
        error: (err) => console.error('Error updating department:', err)
      });
    }
  }

  editDepartment(dept: Department): void {
    this.department = { ...dept };
  }

  deleteDepartment(id: number): void {
    if (confirm('Are you sure you want to delete this department?')) {
      this.deptService.deleteDepartment(id).subscribe({
        next: () => this.loadDepartments(),
        error: (err) => console.error('Error deleting department:', err)
      });
    }
  }

  resetForm(): void {
    this.department = {
      departmentId: 0,
      name: '',
      location: ''
    };
  }
}