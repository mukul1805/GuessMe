import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FetchDataService } from 'src/app/fetch-data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  dataList: any;
  dataLength: any;

  
  @Input()
  Words: string = '';

  @Input()
  Update: string = '';

  @Input()
  Delete: string = '';


  @Output()
  selectedFilterRadioButtonChanged: EventEmitter<string> =new EventEmitter<string>();

  selectedFilterRadioButton: string = 'words'

  onSelectedFilterRadioButtonChanged() {
    console.log("onSelectedFilterRadioButtonChanged function called! " + this.selectedFilterRadioButton)
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton)
  }
}