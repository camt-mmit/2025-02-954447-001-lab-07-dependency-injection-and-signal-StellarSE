import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLinkActive, RouterLinkWithHref, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-example-root',
  imports: [RouterLinkActive, RouterLinkWithHref, RouterOutlet],
  templateUrl: './example-root.html',
  styleUrl: './example-root.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleRoot {

}
