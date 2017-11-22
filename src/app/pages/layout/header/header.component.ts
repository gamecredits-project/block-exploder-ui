import {Component} from '@angular/core';
import {HomePageService} from '../../home/homePage.service';
import {Router} from '@angular/router';
import {Globals} from '../../globals';

@Component({
  selector   : 'exploder-header',
  templateUrl: 'header.component.html',
  styleUrls  : ['./header.style.css'],
})
export class HeaderComponent {

  constructor(private homePageService: HomePageService, private router: Router, public globals: Globals) {
  }

  onSearch(param: string) {
    this.homePageService.getSearchItemType(param).subscribe((resp) => {
      if (resp.type === 'block') {

        // check if search param is integer
        if (!isNaN(resp.searchBy)) {
          this.homePageService.getBlockHashByHeight(resp.searchBy).subscribe(data => {
            this.router.navigateByUrl('blocks/' + data['hash']);
          });
        } else {
          this.router.navigateByUrl('blocks/' + resp.searchBy);
        }

      } else if (resp.type === 'address') {
        this.router.navigateByUrl('addresses/' + resp.searchBy);
        // console.log(resp.searchBy);
      } else if (resp.type === 'transaction') {
        this.router.navigateByUrl('transactions/' + resp.searchBy);
      }
    });
  }

  switchTheme() {
    this.globals.updateTheme((this.globals.theme === 'dark') ? 'white' : 'dark');
  }

}
