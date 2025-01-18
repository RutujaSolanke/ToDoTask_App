import { Component } from '@angular/core';
import { TaskService, Task } from './services/task.service';  // Import TaskService

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  tasks: Task[] = [];  // To hold fetched tasks
  newTaskTitle: string = '';  // Bind new task title input

  constructor(private taskService: TaskService) {}  // Inject TaskService

  // Fetch tasks when the component is initialized
  ngOnInit(): void {
    this.getTasks();
  }

  // Fetch tasks from backend using TaskService
  getTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;  // Assign fetched tasks to the tasks array
    });
  }

  // Add a new task to the list and backend
  addTask(): void {
    if (this.newTaskTitle.trim()) {
      const newTask: Task = {
        id: 0,  // Let the backend assign the ID
        title: this.newTaskTitle,
        description: '',
        completed: false
      };

      this.taskService.createTask(newTask).subscribe((task) => {
        this.tasks.push(task);  // Add new task to the tasks list
        this.newTaskTitle = '';  // Clear the input field
      });
    }
  }

  // Delete task from the list and backend
  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter(task => task.id !== id);  // Remove deleted task from the list
    });
  }
}
