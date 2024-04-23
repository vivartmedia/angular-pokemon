import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonComponent } from './components/pokemon/pokemon.component';


// the component decorator marks this file as a component
@Component({
  // the component tag name, <app-rout></app-root>
  selector: 'app-root',

  //marking a component as standalone, makes it so that it handles its own dependencys
  standalone: true,

  //this is where we add out imports and dependencys
  imports: [RouterOutlet, PokemonComponent], 

  // the file paths to the template and stylesheet
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
  
//
export class AppComponent {
  title = 'Ashur';
}
