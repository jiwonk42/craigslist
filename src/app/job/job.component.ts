import { Component} from '@angular/core';
import { Job } from '../job.model';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent {


  masterJobList: Job[]= [
    new Job('Barista', 'Victrola Coffee', 'Capital Hill', 'Make good drinks'),
    new Job('Insurance Account Assitant', 'Wells Fargo', 'Downtown Seattle', 'Authorize insurance')
  ];

  selectedJob = null;

  editJob(clickedJob) {
    this.selectedJob = clickedJob;
  }

  finishedEditing() {
    this.selectedJob = null;
  }

  addJob(newJobFromChild: Job) {
    this.masterJobList.push(newJobFromChild);
  }

  deleteJob(selectedJob: Job) {
      for(let index = 0; index < this.masterJobList.length; index++) {
        if(this.masterJobList[index].title === selectedJob.title) {
          this.masterJobList.splice(index, 1);
          break;
        }
      }
    }

}
