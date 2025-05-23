import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class FoodService {
    constructor(private http: HttpClient) {}

    getFood(name: string) {
        return this.http.get(`http://localhost:3000/food/${name}`);
    }
}