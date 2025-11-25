import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  imports: [FormsModule]
})
export class SearchComponent {

  city: string = '';

  @Output() searchCity = new EventEmitter<string>();

  search() {
    if (this.city.trim() !== '') {
      this.searchCity.emit(this.city);
    }
  }
}
