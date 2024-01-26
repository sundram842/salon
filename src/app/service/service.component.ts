import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
  @Output() messageEvent = new EventEmitter<boolean>();
  public onHover(){
    this.messageEvent.emit(true);
  }
  public onLeave(){
    this.messageEvent.emit(false);
  }
}
