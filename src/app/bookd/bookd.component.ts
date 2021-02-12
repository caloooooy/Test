
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookd',
  templateUrl: './bookd.component.html',
  styleUrls: ['./bookd.component.css']
})
export class BookdComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  payment() {
    this.router.navigateByUrl('/payment');
  }
}
