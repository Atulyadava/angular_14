import { Component } from '@angular/core';

@Component({
  selector: 'app-status',
  template: `
    <h3>
      404 Error.requested page not fond
    </h3>
  `,
  styles: [
    "h3{color:red;font-size:50px}"
  ]
})
export class StatusComponent {

}
