import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminPageComponent } from './admin-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AdminService } from '../admin.service';
import { FormsModule } from '@angular/forms';

describe('AdminPageComponent', () => {
    let component: AdminPageComponent;
    let fixture: ComponentFixture<AdminPageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AdminPageComponent],
            imports: [HttpClientTestingModule, FormsModule],
            providers: [AdminService]
        });

        fixture = TestBed.createComponent(AdminPageComponent);
        component = fixture.componentInstance;
    });

    it('should clear the form when clearForm is called', () => {
        component.formData = {
            word: 'initialWord',
            subWords: ['subWord1', 'subWord2', 'subWord3', 'subWord4', 'subWord5'],
        };

        component.clearForm();      //calling

        expect(component.formData).toEqual({
            word: '',
            subWords: ['', '', '', '', ''],
        });
    });

    it('should clear an empty form when clearForm is called', () => {
        component.formData = {
            word: '',
            subWords: ['', '', '', '', ''],
        };
        component.clearForm();
        expect(component.formData).toEqual({
            word: '',
            subWords: ['', '', '', '', ''],
        });
    });

});