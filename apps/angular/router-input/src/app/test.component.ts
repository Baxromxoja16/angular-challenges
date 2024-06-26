import { AsyncPipe } from '@angular/common';
import { Component, Input as RouterInput } from '@angular/core';

@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <div>TestId: {{ testId }}</div>
    <div>Permission: {{ permission }}</div>
    <div>User: {{ user }}</div>
  `,
})
export default class TestComponent {
  @RouterInput() user!: string;
  @RouterInput() testId!: string;
  @RouterInput() permission!: string;
}
