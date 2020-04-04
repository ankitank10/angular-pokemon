import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms'
import { productFormDefaultVal } from '../constants/mappings'

@Component({
    templateUrl: './create-product.html',
    styleUrls: ['./create-product.css']
})
export class CreateProductComponent implements OnInit {
    productForm: FormGroup
    validationMessages = {
        'name': {
            'required': 'Name is required.',
            'minlength': 'Name must be greater than 2 characters.',
            'pattern': 'Name must contain only alphabets and numbers.'
        },
        'description': {
            'required': 'Description is required.',
            'minlength': 'Description must be greater than 2 characters.',
            'pattern': 'Description must contain only alphabets and numbers.'
        },
        'price': {
            'required': 'Price is required.',
            'pattern': 'Price must contain 2 decimal places.'
        },
        'category': {
            'required': 'Category is required.',
        },
        'image': {
            'required': 'ImageUrl is required.',
            'pattern': 'ImageUrl must be valid.'
        },
        'phone': {
            'required': 'Phone is required.',
            'pattern': 'Phone must contain digits only.',
            'maxlength': 'Phone can not be greater than 10'
        }
    }
    formErrors = []
    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.productForm = this.fb.group({
            product: this.fb.array([
                this.createFormGroup()
            ])
        })
        this.productForm.valueChanges.subscribe(() => {
            this.createValidationObj(<FormArray>this.productForm.get('product'));
        })
    }
    createFormGroup(): FormGroup {
        return this.fb.group({
            name: [productFormDefaultVal.name, [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$'), Validators.minLength(3)]],
            description: [productFormDefaultVal.description, [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$'), Validators.minLength(3)]],
            price: [productFormDefaultVal.price, [Validators.required, Validators.pattern('^[0-9]*\.[0-9]{2}$')]],
            category: [productFormDefaultVal.category, Validators.required],
            image: [productFormDefaultVal.image, [Validators.required, Validators.pattern('(^https?:\/\/.*\.(?:png|jpg|gif)$)')]],
            phone: [productFormDefaultVal.phone, [Validators.required, Validators.pattern('^[0-9 ]*$'), Validators.maxLength(10)]],
            type: [productFormDefaultVal.type]
        })
    }

    logValidationErrors(group: FormGroup, type?:string, index?: number): void {
        Object.keys(group.controls).forEach((key: string) => {
            const abstractControl = group.get(key);
            this.formErrors[key] = '';
            if (abstractControl && !abstractControl.valid &&
                (abstractControl.touched || abstractControl.dirty)) {
                const messages = this.validationMessages[key];
                for (const errorKey in abstractControl.errors) {
                    if (errorKey) {
                        this.formErrors[key] += messages[errorKey] + ' ';
                    }
                }
            }
            if (abstractControl instanceof FormGroup) {
                this.logValidationErrors(abstractControl);
            }
            if (abstractControl instanceof FormArray) {
                abstractControl.controls.forEach((control,i) => {
                    if (control instanceof FormGroup) {
                        if(this.formErrors[key]){
                            this.formErrors[key].push({})
                        }else{
                            this.formErrors[key] = [{}];
                        }
                        this.logValidationErrors(control, 'arrayType', i);
                    }
                });
                for (const control of abstractControl.controls) {
                    if (control instanceof FormGroup) {
                        this.logValidationErrors(control);
                    }
                }
            }
        });
    }
    createValidationObj(formArray: FormArray){
        formArray.controls.forEach((group,i) => {
            if (group instanceof FormGroup) {
                this.formErrors[i] = {};
                Object.keys(group.controls).forEach((key: string) => {
                    const abstractControl = group.get(key);
                    this.formErrors[i][key] = '';
                    if (abstractControl && !abstractControl.valid &&
                        (abstractControl.touched || abstractControl.dirty)) {
                        const messages = this.validationMessages[key];
                        for (const errorKey in abstractControl.errors) {
                            if (errorKey) {
                                this.formErrors[i][key] += messages[errorKey] + ' ';
                            }
                        }
                    }
                });
            }
        });
    }
    saveProduct(): void {
        console.log(this.productForm.value);
        localStorage.setItem('products', JSON.stringify(this.productForm.value.product));
    }
    resetForm(): void {
        (<FormArray>this.productForm.get('product')).controls[this.productForm.get('product').length-1].setValue(productFormDefaultVal)
        // this.productForm.patchValue({
        //     product: productFormDefaultVal
        // })
    }
    addNewProduct(): void {
        (<FormArray>this.productForm.get('product')).push(this.createFormGroup())
    }
}
