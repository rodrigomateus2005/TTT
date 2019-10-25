import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'moura-control',
  templateUrl: './moura-control.component.html',
  styleUrls: ['./moura-control.component.scss']
})
export class MouraControlComponent implements OnInit {

  @Input()
  public base: MouraControlComponent;

  public get ctrl(): MouraControlComponent {
    return this.base ? this.base : this;
  }

  private $uniqueID: number;
  protected get uniqueID(): number {
    return this.$uniqueID;
  }

  public constructor() {
    this.$uniqueID = new Date().getTime();
  }

  ngOnInit(): void {

  }
}
