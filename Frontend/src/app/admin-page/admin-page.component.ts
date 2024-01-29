import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})


export class AdminPageComponent {
  
  Words: string= ''
  formData = {
    word: '',
    subWords: ['', '', '', '', '']
  };
  dataList: any;
  dataLength: any;
  cdr: any;

  constructor(private adminService: AdminService, private dataService: FetchDataService) { }

  ngOnInit() { 
    this.fetchData();
  }


  onSubmit() {
    console.log('Form submitted:', this.formData);
    console.log(this.formData.word, "");
    console.log(this.formData.subWords);

    this.adminService.updateData(this.formData.word, this.formData.subWords).subscribe(
      (response) => {
        console.log('Data updated successfully:', response);
        alert("Data updated successfully")
      },
      (error) => {
        console.error('Error updating data:', error);
      }
    );
  }

  clearForm() {
    console.log('Clearing form...');
    this.formData = {
      word: '',
      subWords: ['', '', '', '', '']
    };
  }


  selectedFilterRadioButton: string = 'Words'

  onFilterChange(value: string){
    console.log("On filter changed called")
    console.log(value)
    this.selectedFilterRadioButton= value;
    this.fetchData();
  }


  fetchData() {
    this.dataService.getData().subscribe(
      (result) => {
        this.dataList = result;
        this.dataLength = result.length;
        console.log(result);
      },
      (error) => {
        console.log("Error!", error)
      }
    );
  }


  onDelete(word: string) {
    this.adminService.deleteData(word).subscribe(
      (response) => {
        console.log('Data deleted successfully:', response);
        alert('Data deleted successfully');
        this.fetchData(); // Refresh data after deletion
      },
      (error) => {
        console.error('Error deleting data:', error);
        alert("Word not found!")
      }
    );
  }

}
