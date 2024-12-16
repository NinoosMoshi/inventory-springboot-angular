import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../service/api.service';

interface Category {
  id: string;
  name: string;
}


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {

 

  categories: Category[] = [];
  categoryName: string = '';
  message:string = '';
  isEditing: boolean = false;
  editingCategoryId:string | null = null;

  constructor(private apiService:ApiService) {}

  ngOnInit(): void {
    this.getCategories();
  }


  // GET ALL CATEGORIES
  getCategories() {
    this.apiService.getAllCategories().subscribe({
      next: (res) => {
        if(res.status === 200) {
          this.categories = res.categories;
        }
      },
      error: (error) => {
        this.showMessage(error?.error?.message || error?.message || "Unable to get all categories" + error)
      }
    });
  }

  // CREATE CATEGORY
  addCategory() {
    if(!this.categoryName){
      this.showMessage("Category name is required");
      return;
    }
    this.apiService.createCategory({name:this.categoryName}).subscribe({
      next: (res) => {
        if(res.status === 200) {
          this.showMessage("Category created successfully");
          this.categoryName = '';
          this.getCategories();
        }
      },
      error: (error) => {
        this.showMessage(error?.error?.message || error?.message || "Unable to create category" + error)
      }
    });
  }


  // UPDATE CATEGORY
  editCategory() {
    if(!this.editingCategoryId || !this.categoryName){
      return;
    }
    this.apiService.updateCategory(this.editingCategoryId,{name:this.categoryName}).subscribe({
      next: (res) => {
        if(res.status === 200) {
          this.showMessage("Category updated successfully");
          this.categoryName = '';
          this.isEditing = false;
          this.getCategories();
        }
      },
      error: (error) => {
        this.showMessage(error?.error?.message || error?.message || "Unable to update category" + error)
      }
    });
  }

    // SET THE CATEGORY TO EDIT
    handleEditCategory(category:Category) {
      this.isEditing = true;
      this.editingCategoryId = category.id;
      this.categoryName = category.name;
    }
  

  // DELETE CATEGORY
  handleDeleteCategory(categoryId:string) {
    if(window.confirm("Are you sure you want to delete this category?")){
      this.apiService.deleteCategory(categoryId).subscribe({
        next: (res) => {
          if(res.status === 200) {
            this.showMessage("Category deleted successfully");
            this.getCategories();
          }
        },
        error: (error) => {
          this.showMessage(error?.error?.message || error?.message || "Unable to delete category" + error)
        }
      });
    }
   
  }





  showMessage(message:string){
    this.message = message;
    setTimeout(() =>{
      this.message = ''
    }, 4000)
  }

}
