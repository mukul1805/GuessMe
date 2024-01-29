import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { AdminService } from './admin.service';

describe('AdminService', () => {
  let service: AdminService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });

    service = TestBed.inject(AdminService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send an update request with provided data', () => {
    const testData = {
      word: 'exampleWord',
      tabooWords: ['taboo1', 'taboo2', 'taboo3'],
    };

    spyOn(httpClient, 'put').and.returnValue(of({ success: true }));

    service.updateData(testData.word, testData.tabooWords).subscribe((response) => {
      expect(response).toEqual({ success: true });
    });

    expect(httpClient.put).toHaveBeenCalledWith('http://localhost:3100/data', testData);
  });

});
