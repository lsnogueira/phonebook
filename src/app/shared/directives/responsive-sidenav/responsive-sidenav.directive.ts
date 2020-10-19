import { BreakpointObserver } from '@angular/cdk/layout';
import { Directive, Input, OnDestroy, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subject } from 'rxjs';
import { map, takeUntil, filter } from 'rxjs/operators';

@Directive({
  selector: '[permanentAt]',
})
export class ResponsiveSidenavDirective implements OnInit, OnDestroy {
  @Input() permanentAt: number;

  destroy$ = new Subject();

  constructor(
    private breakpoint: BreakpointObserver,
    private sidenav: MatSidenav
  ) {}

  ngOnInit(): void {
    const permanent$ = this.breakpoint
      .observe(`(min-width: ${this.permanentAt}px)`)
      .pipe(
        takeUntil(this.destroy$),
        map(({ matches }) => matches)
      );

    permanent$.subscribe((permanent) => {
      this.sidenav.mode = permanent ? 'side' : 'over';
      this.sidenav.opened = permanent;
    });
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
