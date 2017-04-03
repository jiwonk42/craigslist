import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Job } from '../job.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent {

  constructor(private router: Router){}

  @Input() childJobList: Job[];
  @Output() clickSender = new EventEmitter();

  showJobDetails = null;

  showJob(clickedJob) {
    this.showJobDetails = clickedJob;
  }

  hideJob() {
    this.showJobDetails = null;
  }

  editJob(jobToEdit: Job) {
    this.clickSender.emit(jobToEdit);
  }


  goToDetailPage(clickedJob: Job) {
    this.router.navigate(['jobs', clickedJob.id]);
  };

}
