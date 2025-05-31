import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { PaginatorModule } from 'primeng/paginator';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ProgressBarModule } from 'primeng/progressbar';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from 'primeng/tabview';
import { EditorModule } from 'primeng/editor';
import { ChipsModule } from 'primeng/chips';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StepsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    ToolbarModule,
    PaginatorModule,
    ToastModule,
    MultiSelectModule,
    CheckboxModule,
    AccordionModule,
    ConfirmDialogModule,
    ProgressBarModule,
    FileUploadModule,
    ChipsModule,
    DialogModule,
    TabViewModule,
    EditorModule,
    CalendarModule
  ],
  exports: [
    StepsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    ToolbarModule,
    PaginatorModule,
    ToastModule,
    MultiSelectModule,
    CheckboxModule,
    AccordionModule,
    ConfirmDialogModule,
    ProgressBarModule,
    FileUploadModule,
    ChipsModule,
    DialogModule,
    TabViewModule,
    EditorModule,
    CalendarModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedPrimeNGModule { }
