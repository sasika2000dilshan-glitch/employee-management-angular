# Employee Management Angular Frontend

This is the Angular 17 frontend for the **Employee Management System** built as part of the Full Stack Web Application assignment.

---

## Tech Stack

- **Framework**: Angular 17
- **UI Library**: Bootstrap 5
- **Language**: TypeScript
- **HTTP Client**: Angular HttpClientModule

---

## Features

- Add, update, delete, and list employees
- Manage departments
- Navigation using Angular Router
- Clean UI with Bootstrap

---

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── employee/
│   │   └── department/
│   ├── services/
│   ├── app-routing.module.ts
│   ├── app.module.ts
│   └── app.component.html / .ts
├── assets/
└── index.html
```

---

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Start the Angular development server:
```bash
ng serve
```

3. Visit in browser:
```
http://localhost:4200
```

---

## API Integration

Make sure your Spring Boot backend is running on `http://localhost:8080`

Endpoints used:
- `/api/employees`
- `/api/departments`

---

## Author

Sasika Dilshan  
BIT – Full Stack Web Application  
IMBS Green Campus – 2025
