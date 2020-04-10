import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms'
import { PRODUCT_FORM_DEFAULT, VALIDATION_MESSAGES } from '../constants/mappings'

@Component({
    templateUrl: './create-product.html',
    styleUrls: ['./create-product.css']
})
export class CreateProductComponent implements OnInit {
    productForm: FormGroup
    validationMessages = VALIDATION_MESSAGES;
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
            name: [PRODUCT_FORM_DEFAULT.name, [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$'), Validators.minLength(3)]],
            description: [PRODUCT_FORM_DEFAULT.description, [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$'), Validators.minLength(3)]],
            price: [PRODUCT_FORM_DEFAULT.price, [Validators.required, Validators.pattern('^[0-9]*\.[0-9]{2}$')]],
            category: [PRODUCT_FORM_DEFAULT.category, Validators.required],
            image: [PRODUCT_FORM_DEFAULT.image, [Validators.required, Validators.pattern('(^https?:\/\/.*\.(?:png|jpg|gif)$)')]],
            phone: [PRODUCT_FORM_DEFAULT.phone, [Validators.required, Validators.pattern('^[0-9 ]*$'), Validators.maxLength(10)]],
            type: [PRODUCT_FORM_DEFAULT.type]
        })
    }
    createValidationObj(formArray: FormArray): void{
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
        localStorage.setItem('products', JSON.stringify(this.productForm.value.product));
    }
    resetForm(): void {
        (<FormArray>this.productForm.get('product')).controls[(<FormArray>this.productForm.get('product')).length-1].setValue(PRODUCT_FORM_DEFAULT)
        // this.productForm.patchValue({
        //     product: PRODUCT_FORM_DEFAULT
        // })
    }
    addNewProduct(): void {
        (<FormArray>this.productForm.get('product')).push(this.createFormGroup())
    }
}
