import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';  // ✅ Add RouterModule here

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, FormsModule, NgIf, NgFor, RouterModule], // ✅ Include RouterModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Vegbyte';
  foodName: string = '';
  detectedFood: string | null = null;
  nutritionalInfo: any = null;
  vegetarianAlternative: string | null = null;
  matchingNutritionalInfo: any = null;
  healthBenefits: string | null = null;
  ingredients: string[] = [];
  cookingMethod: string[] = [];

  constructor(private http: HttpClient) {}

  scanFood() {
    if (!this.foodName.trim()) {
      alert('Please enter a food name!');
      return;
    }

    this.http.get<any>(`http://localhost:3000/foods/${this.foodName}`).subscribe(
      response => {
        this.detectedFood = response.name;
        this.nutritionalInfo = response.nutrients;
        this.vegetarianAlternative = response.vegetarianAlternative.name;
        this.matchingNutritionalInfo = response.vegetarianAlternative.nutrients;
        this.healthBenefits = response.healthBenefits;
        this.ingredients = response.ingredients;
        this.cookingMethod = response.cookingMethod;
      },
      error => {
        console.error('❌ Error fetching nutritional info:', error);
        alert('Failed to fetch nutritional data!');
      }
    );
  }
}