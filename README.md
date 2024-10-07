# HCU Task Manager

## Overview

Task Manager is a Angular application designed to manage tasks efficiently. This project includes features such as task creation, deletion, and updating task names,...

## Features

- Task creation
- Task deletion
- Task updating (status, name)
- Filter tasks by status
- State management using NgRx

## Installation and Running the Project Locally

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed. You can download them from [Node.js official website](https://nodejs.org/).
- Git installed. You can download it from [Git official website](https://git-scm.com/).
- **Angular CLI installed globally:** You can install it using the following command:

  ```
  npm install -g @angular/cli
  ```

### Steps

1. **Clone the repository:**

  ```
   git clone https://github.com/phuoctai1644/hcu-task-manager.git
   cd hcu-task-manager
  ```

2. **Install dependencies:**
  ```
  npm install
  ```

3. **Run the mock API:**
  ```
  npm run mock-api
  ```
  This command will start the mock API server on http://localhost:3000/.

4. **Run the application:**

  ```
  ng serve
  ```

### Additional Features
- **Task Filtering:** Tasks can be filtered based on their status (e.g., COMPLETED, INCOMPLETE).
- **State Persistence:** The application state is managed using NgRx, ensuring a consistent state across the application.