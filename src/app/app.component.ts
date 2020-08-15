import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'picross-pwa';

  grid : Array<Array<boolean>> =
  [  [false,true,true,false]
    ,[true,true,true,true]
    ,[true,false,false,true]
    ,[false,true,true,false]
    ,[false,false,false,false]
    ,[false,false,true,false]
  ]
}
