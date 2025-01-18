import { Component } from '@angular/core';
import { TaskService } from './services/task.service';  // Make sure path is correct
import { Task } from './services/task.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[] = [];
  newTaskTitle: string = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  addTask(): void {
    if (this.newTaskTitle.trim()) {
      const newTask: Task = {
        id: 0,
        title: this.newTaskTitle,
        description: '',
        completed: false
      };

      this.taskService.createTask(newTask).subscribe((task) => {
        this.tasks.push(task);
        this.newTaskTitle = '';
      });
    }
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter(task => task.id !== id);
    });
  }
}
