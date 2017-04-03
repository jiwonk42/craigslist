import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Job } from '../job.model'

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent {
  @Input() childSelectedJob: Job;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
