import {Component, OnInit} from '@angular/core';
import {BlockPageService} from './blockPage.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Globals} from '../globals';

import 'rxjs/add/operator/switchMap';

@Component({
  selector   : 'exploder-block',
  templateUrl: 'blockPage.component.html',
  styleUrls  : ['./block.style.css'],
})
export class BlockPageComponent implements OnInit {

  block: any;
  confirmations: any;
  transactions: any;

  constructor(private blockPageService: BlockPageService,
              private route: ActivatedRoute,
              public globals: Globals) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.blockPageService.getBlock('' + params['hash']))
      .subscribe(resp => {
        this.block = resp;
      });

    this.route.params
      .switchMap((params: Params) => this.blockPageService.getBlockConfirmations('' + params['hash']))
      .subscribe(resp => {
        this.confirmations = resp;
      });
    this.route.params
      .switchMap((params: Params) => this.blockPageService.getBlockTransactions('' + params['hash']))
      .subscribe(resp => {
        this.transactions = resp;
      });
  }
}
