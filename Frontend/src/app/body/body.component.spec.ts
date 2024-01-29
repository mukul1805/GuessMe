import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { BodyComponent } from './body.component';
import { FetchDataService } from '../fetch-data.service';
import { of, throwError } from 'rxjs';

describe('BodyComponent', () => {
  let component: BodyComponent;
  let fixture: ComponentFixture<BodyComponent>;
  let fetchDataSpy: jasmine.SpyObj<FetchDataService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('FetchDataService', ['getData']);

    TestBed.configureTestingModule({
      declarations: [BodyComponent],
      providers: [
        { provide: FetchDataService, useValue: spy }
      ]
    });

    fixture = TestBed.createComponent(BodyComponent);
    component = fixture.componentInstance;
    fetchDataSpy = TestBed.inject(FetchDataService) as jasmine.SpyObj<FetchDataService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch data on ngOnInit', fakeAsync(() => {
    const mockData = [
      { word: 'Word1', taboo_words: ['Taboo1', 'Taboo2', 'Taboo3', 'Taboo4', 'Taboo5'] },
      { word: 'Word2', taboo_words: ['Taboo1', 'Taboo2', 'Taboo3', 'Taboo4', 'Taboo5'] }
    ];

    fetchDataSpy.getData.and.returnValue(of(mockData));

    component.ngOnInit();
    tick(); // simulate the passage of time until all pending asynchronous activities complete

    expect(component.dataList).toEqual(mockData);
    expect(component.dataLength).toBe(mockData.length);
  }));

  it('should handle error when fetching data', fakeAsync(() => {
    const errorMessage = 'Server error';

    fetchDataSpy.getData.and.returnValue(throwError(errorMessage)); // Simulating an error by returning an empty observable

    component.ngOnInit();
    tick();

    expect(component.dataList).toBeUndefined();
    expect(component.dataLength).toBe(0);
  }));

  //correct

  it('should increase scoreA by 2 on correct()', () => {
    component.turn = 1; // Set the turn to teamA
    component.correct();

    expect(component.scoreA).toBe(2);
    expect(component.scoreB).toBe(0); // other score remain unchanged
  });

  it('should increase scoreB by 2 on correct()', () => {
    component.turn = -1; // Set the turn to teamB
    component.correct();

    expect(component.scoreA).toBe(0); //other score remain unchanged
    expect(component.scoreB).toBe(2);
  });

  //inCorrect

  it('should decrease scoreA by 2 on incorrect()', () => {
    component.turn = 1; // Set the turn to teamA
    component.inCorrect();

    expect(component.scoreA).toBe(-2);
    expect(component.scoreB).toBe(0); // other score remain unchanged
  });

  it('should decrease scoreB by 2 on correct()', () => {
    component.turn = -1; // Set the turn to teamB
    component.inCorrect();

    expect(component.scoreA).toBe(0); //other score remain unchanged
    expect(component.scoreB).toBe(-2);
  });


  //pass

  it('should decrease scoreA by 1 on pass()', () => {
    component.turn = 1; // Set the turn to teamA
    component.pass();

    expect(component.scoreA).toBe(-1);
    expect(component.scoreB).toBe(0); //other score remain unchanged
  });

  it('should decrease scoreB by 1 on pass()', () => {
    component.turn = -1; // Set the turn to teamB
    component.pass();

    expect(component.scoreA).toBe(0); // Ensure other scores remain unchanged
    expect(component.scoreB).toBe(-1);
  });


  //getStarted

  it('should set firstClick to true, turn to 1, and toggle to true on gameStarted()', fakeAsync(() => {

    spyOn(window, 'setTimeout')
    component.gameStarted();
    tick();

    expect(component.firstClick).toBe(true);
    expect(component.turn).toBe(1);
    expect(component.toggle).toBe(true);
  }));

  it('should set turn to -1 and toggle to false after 30 seconds on gameStarted()', fakeAsync(() => {
    component.gameStarted();
    tick(30000); // Advance time by 30 seconds

    expect(component.turn).toBe(-1);
    expect(component.toggle).toBe(false);
  }));


  //newGAme()

  it('should reset properties correctly on newGame()', () => {
    component.firstClick = true;
    component.scoreA = 5;
    component.scoreB = 8;
    component.newGame();

    expect(component.firstClick).toBe(false);
    expect(component.scoreA).toBe(0);
    expect(component.scoreB).toBe(0);
    expect(component.startTimeout).toBeUndefined();
    // expect(component.toggle).toBe(!component.toggle);
  });


  // winner()

  it('should set toggle to true after 30 seconds on winner()', fakeAsync(() => {
    spyOn(window, 'setTimeout'); // Spy on setTimeout to avoid actual delays
    component.winner();
    tick(30000); // Advance time by 30 seconds

    expect(component.toggle).toBe(true);
  }));

  it('should display winner alert for team A', fakeAsync(() => {
    spyOn(window, 'alert')

    component.scoreA = 5;
    component.scoreB = 3;

    component.winner();
    tick(30000); // Advance time by 30 seconds

    expect(window.alert).toHaveBeenCalledWith('A is the Winner!');
  }));

  it('should display winner alert for team B', fakeAsync(() => {
    spyOn(window, 'alert')

    component.scoreA = 3;
    component.scoreB = 5;

    component.winner();
    tick(30000); // Advance time by 30 seconds

    expect(window.alert).toHaveBeenCalledWith('B is the Winner!');
  }));

  it('should display match tied alert', fakeAsync(() => {
    spyOn(window, 'alert')

    component.scoreA = 4;
    component.scoreB = 4;

    component.winner();
    tick(30000);

    expect(window.alert).toHaveBeenCalledWith('Match Tied!');
  }));




});