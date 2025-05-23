import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FoodService } from './food.service';

interface FoodApiResponse {  // ✅ Define interface OUTSIDE the class
  scannedFood?: string;
  vegetarianAlternative?: { name: string };
}

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Ensuring FormsModule is included for `ngModel`
  templateUrl: './food.component.html'
})
export class FoodComponent {
  foodName: string = '';
  foodData: any;
  vegetarianData: any;

  constructor(private foodService: FoodService) {}

  fetchFood() {
    this.foodService.getFood(this.foodName).subscribe(
      (data: FoodApiResponse) => {
        console.log('API Response:', data); // ✅ Debug log to verify response

        this.foodData = data.scannedFood ?? null;  // ✅ Prevents undefined errors
        this.vegetarianData = data.vegetarianAlternative?.name ?? null;  // ✅ Handles missing properties
      }
    );
  }
}