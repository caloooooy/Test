import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  books(){
    this.router.navigateByUrl('/books');
  }
  teacher(){
    this.router.navigateByUrl('/third-page');
  }
  back(){
    this.router.navigateByUrl('/first-page');
  }
  
}
