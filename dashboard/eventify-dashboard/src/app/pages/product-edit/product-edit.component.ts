import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Category } from '../../models/category';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { first } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
  standalone: false
})
export class ProducteditComponent implements OnInit {


  selectedImages: File [] = [];
  categories: Category[] = []; 

  public productForm: FormGroup

  public product: Product;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.loadData();
  }

  private loadData(){
    this.spinner.show();
    this.categoryService.getCategories().pipe(first()).subscribe({
      next: (data) => {
        this.categories = data;
        this.spinner.hide();
      },
      error: (err) => {
        this.spinner.hide();
        console.error('Error loading categories:', err);
      }
    });
  }

  onImageSelected(event: Event) {
    this.selectedImages = [];
    const fileInput = event.target as HTMLInputElement;
    console.log(fileInput.files)
    if (!fileInput.files || fileInput.files.length === 0) {
      console.error('No file selected!');
      return;
    }
    for(let i=0; i<=fileInput.files.length; i++){
      this.selectedImages.push(fileInput.files?.[i]);
    }
    
  }

  saveProduct() {
    console.log('product form:', this.productForm);
    if(!this.productForm.valid){
      return ;
    }
    if (!this.selectedImages) {
      console.error('No image selected!');
      return;
    }

    this.product = this.productForm.value;
    this.product.productImages = [];

    this.spinner.show();

    this.productService.saveProduct(this.product, this.selectedImages).subscribe({
      next: (res) => {
        this.spinner.hide();
        this.toastr.success('Product saved successfully!');
        this.router.navigate(['/product/list']);
      },
      error: (err) => {
        this.spinner.hide();
        this.toastr.error('Error saving product!');
        console.error('Error saving product:', err);
      }
    });
  }

  private initForm() {
    this.productForm = this.fb.group({
      name: [''],
      description: [''],
      stockQuantity: [0],
      basePrice: [0],
      category: [null],
      productImages: [[]]
    });
  }

}
