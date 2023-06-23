import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {}

  onLoadServersAbsolute() {
    this.router.navigate(['/servers']);
  }

  onLoadServerDetailsRelative() {
    this.router.navigate(['servers'], { relativeTo: this.activatedRoute });
  }

  onLoadServerQueryParams(id: number) {
    this.router.navigate(['servers', id, 'edit'], {
      queryParams: { allowEdit: '1' },
      fragment: 'loading',
    });
  }
}
