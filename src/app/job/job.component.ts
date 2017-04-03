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


}
