import { EventEmitter } from '@angular/core';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output } from '@angular/core';


@Component({
  selector: 'tr-enum-table',
  templateUrl: './enum-table.component.html',
  styleUrls: ['./enum-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EnumTableComponent implements OnInit {

  @Input() public enumValue: any = {};

  public values: { id: number, name: string }[] | undefined;

  @Output() public selected: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    this.values = Object.keys(this.enumValue)
      .filter(k => !isNaN(Number(k)))
      .map(key => {
        var id = Number(key);
        return {
          id,
          name: this.enumValue[id] as string,
        }
      });
  }


  public setSelected(id: number): void {
    this.selected.emit(id);
  }
}