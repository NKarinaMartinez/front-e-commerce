import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private category: string = '';
  constructor() { }

  setCategory(category: string){
    this.category = category;
  }

  getCategory(): string{
    return this.category;
  }
}
