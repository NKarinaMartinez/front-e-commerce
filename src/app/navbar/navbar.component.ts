import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @ViewChild('dialogTemplate') dialogTemplate!: TemplateRef<any>;
  @ViewChild('registerDialogTemplate') registerDialogTemplate!: TemplateRef<any>;

  private currentDialogRef?: MatDialogRef<any>;

  category: string = '';

  constructor(private dialog: MatDialog, private categoryService: CategoryService, private router: Router) {}

  navegarPrincipio(){
    this.router.navigate(['/']);
  }

  LogIn(event?: Event) {
    if(event) event.preventDefault();
    this.closeCurrentDialog();
    this.currentDialogRef = this.dialog.open(this.dialogTemplate);
  }

  openRegisterDialog(event: Event){
    event.preventDefault();
    this.closeCurrentDialog();
    this.currentDialogRef = this.dialog.open(this.registerDialogTemplate);
  }

  private closeCurrentDialog(){
    if(this.currentDialogRef){
      this.currentDialogRef.close();
    }
  }

  selectCatgry(event: Event){
    event.preventDefault();
    const element = event.target as HTMLElement;
    this.category = element.innerText;
    this.categoryService.setCategory(this.category);
    this.router.navigate(['/page-category']);
    console.log(this.category);
  }
}
