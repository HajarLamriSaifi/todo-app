import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';  // Import the service
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-root',
  standalone: true,  // Standalone component (Angular 19 feature)
  imports: [CommonModule],  // Add CommonModule to imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';  // Title for the page
  message: string = '';  // Variable to store the message from the backend

  constructor(private todoService: TodoService) {}

  // Fetch the data when the component is initialized
  ngOnInit(): void {
    this.todoService.getTodoMessage().subscribe(
      (response) => {
        this.message = response.message;  // Store the message
      },
      (error) => {
        console.error('Error fetching data:', error);  // Log any errors
      }
    );
  }
}
