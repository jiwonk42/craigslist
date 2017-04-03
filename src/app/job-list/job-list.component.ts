import { Component, Input } from '@angular/core';
import { Job } from '../job.model';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent {

  @Input() childJobList: Job[];

  showJobDetails = null;

  showJob(clickedJob) {
    this.showJobDetails = clickedJob;
  }

  hideJob() {
    this.showJobDetails = null;
  }
}
