import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavigationService } from '../../model/navigation/navigation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private navigationService: NavigationService){}

  navigateTo(route : string){
    this.navigationService.navigateTo(route);
  }
  
}
