import { ChangeDetectionStrategy, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Slide1Component } from './slide1/slide1.component';
import { Slide2Component } from './slide2/slide2.component';
import { Slide3Component } from './slide3/slide3.component';


@Component({
  selector: 'tr-section-slider',
  templateUrl: './section-slider.component.html',
  styleUrls: ['./section-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionSliderComponent implements OnInit {

  @ViewChild("slide", { static: true, read: ViewContainerRef })
  public slide: ViewContainerRef | undefined;

  public slides: any[] = [];

  constructor(
    private _componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {

    this.slides.push(Slide1Component, Slide2Component, Slide3Component);

    timer(0, environment.sliderDuration).pipe(
      map((value: number) => this.slides[value % this.slides.length]),
    )
      .subscribe((slide: any) => {
        if (!this.slide) {
          return;
        }

        this.slide.clear();
        const factory = this._componentFactoryResolver.resolveComponentFactory(slide);
        this.slide.createComponent(factory);
      });
  }
}
