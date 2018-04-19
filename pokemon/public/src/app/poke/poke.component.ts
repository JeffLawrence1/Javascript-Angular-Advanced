import { Component, OnInit } from '@angular/core';
import { PokeService } from '../poke.service';

@Component({
  selector: 'app-poke',
  templateUrl: './poke.component.html',
  styleUrls: ['./poke.component.css']
})
export class PokeComponent implements OnInit {

 temp = [];

  constructor(private _pokeService: PokeService) { }

  ngOnInit() {
  }

  getOne(){
    this._pokeService.getOne((data) => {this.temp.push(data)});
    // console.log("some gibberish");
  }
}
