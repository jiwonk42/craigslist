import { Component, Output, EventEmitter } from '@angular/core';
import { Job } from '../job.model';

@Component({
  selector: 'app-new-job',
  templateUrl: './new-job.component.html',
  styleUrls: ['./new-job.component.css']
})

export class NewJobComponent {
  @Output() newJobSender = new EventEmitter();

  submitForm(title: string, company: string, location: string, description: string) {
    var newJobToAdd: Job = new Job(title, company, location, description);
    this.newJobSender.emit(newJobToAdd);
  }


}
