import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';


@Component({
  selector: 'tr-enum-table',
  templateUrl: './enum-table.component.html',
  styleUrls: ['./enum-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EnumTableComponent implements OnInit {

  @Input() public enumValue: any = {};

  public values: { id: number, name: string }[] | undefined;

  constructor() { }

  ngOnInit(): void {
    this.values = Object.keys(this.enumValue)
      //.filter((key) => typeof key === 'number')
      .map(key => {
        console.log('zzzzzzzzzzzzzz', typeof key)
        var id = Number(key);
        return {
          id,
          name: this.enumValue[id] as string,
        }
      });
  }
}