import { Component } from '@angular/core';
import {ExcelService} from './services/sharedServices/excel.service';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css'],
providers:[ExcelService]
})
export class AppComponent {
data: any = [{
eid: '101',
ename: 'Juan Manuel',
esal: 1000
},{
eid: '102',
ename: 'Luis Antonio',
esal: 2000
},{
eid: '103',
ename: 'Jose Francisco',
esal: 3000
}];
constructor(private excelService:ExcelService){
}
exportAsXLSX():void {
   this.excelService.exportAsExcelFile(this.data, 'sample');
}
}