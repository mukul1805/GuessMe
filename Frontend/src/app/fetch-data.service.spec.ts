import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { FetchDataService } from './fetch-data.service';
import { HttpErrorResponse } from '@angular/common/http';

describe('FetchDataService', () => {
  let service: FetchDataService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]      // this
    });
    service = TestBed.inject(FetchDataService);
    testingController = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('Should get all data', () => {
  //   const mockData= [
  //     {word: 'Word to guess', taboo_words: ['Taboo1', 'Taboo2', 'Taboo3', 'Taboo4', 'Taboo5'] },
  //     {word: 'Word to guess', taboo_words: ['Taboo1', 'Taboo2', 'Taboo3', 'Taboo4', 'Taboo5'] }
  //   ];

  //   // service.getData().subscribe((word: any) => {

  //   // });

  //   const req = testingController.expectOne('http://localhost:3100/data');
  //   expect(req.request.method).toEqual('GET');

  //   req.flush(mockData);
  //   testingController.verify();

  // });

  // it('should handle error when fetching data', () => {
  //   const errorMessage = 'Server error';

  //   service.getData().subscribe(
  //     () => fail('should have failed with the server error'),
  //     (error: HttpErrorResponse) => {
  //       // expect(error).toBeTruthy();
  //       expect(error.status).toBe(500); // Adjust the expected status code based on your server's error response
  //       expect(error.error).toBe(errorMessage);
  //     }
  //   );

  //   const req = testingController.expectOne('http://localhost:3100/data');
  //   expect(req.request.method).toEqual('GET');

  //   req.error(new ErrorEvent('error', { message: errorMessage }));
  //   testingController.verify();
  // });


});