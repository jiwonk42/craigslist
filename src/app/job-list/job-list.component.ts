import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Job } from '../job.model';
import { Router } from '@angular/router';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
  providers: [JobService]
})
export class JobListComponent implements OnInit {

  @Input() childJobList: Job[];
  @Output() clickSender = new EventEmitter();

  editJob(jobToEdit: Job) {
    this.clickSender.emit(jobToEdit);
  }


}
