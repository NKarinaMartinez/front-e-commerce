import { Component, computed, OnInit, signal } from '@angular/core';
import { CategoryService } from '../category.service';

export interface Task {
  name: string;
  completed: boolean;
  subtasks?: Task[];
}

@Component({
  selector: 'app-page-category',
  templateUrl: './page-category.component.html',
  styleUrl: './page-category.component.css'
})
export class PageCategoryComponent implements OnInit{
  categoryName: string = '';

  constructor(private categoryService: CategoryService){}

  ngOnInit(): void {
    this.categoryName = this.categoryService.getCategory();
  }

  readonly task = signal<Task>({
    name: 'Aplicar todo',
    completed: false,
    subtasks: [
      {name: 'Dulce', completed: false},
      {name: 'Salado', completed: false},
      {name: 'Bebida', completed: false},
      {name: 'Perecible', completed: false},
      {name: 'No perecible', completed: false},
    ],
  });

  readonly partiallyComplete = computed(() => {
    const task = this.task();
    if (!task.subtasks) {
      return false;
    }
    return task.subtasks.some(t => t.completed) && !task.subtasks.every(t => t.completed);
  });

  update(completed: boolean, index?: number) {
    this.task.update(task => {
      if (index === undefined) {
        task.completed = completed;
        task.subtasks?.forEach(t => (t.completed = completed));
      } else {
        task.subtasks![index].completed = completed;
        task.completed = task.subtasks?.every(t => t.completed) ?? true;
      }
      return {...task};
    });
  }
}
