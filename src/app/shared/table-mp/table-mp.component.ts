import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { HelperService } from 'src/app/services/helper/helper.service';
import { Product } from 'src/app/services/models/product';
import { MPService } from 'src/app/services/services/mp.service';
import { ProductService } from 'src/app/services/services/product.service';




@Component({
  selector: 'app-table-mp',
  templateUrl: './table-mp.component.html',
  styleUrls: ['./table-mp.component.scss']
})
export class TableMPComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nom', 'prix', 'caracteristiques'];
  dataSource = new MatTableDataSource<Product>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private MPService: MPService,  private helperService: HelperService) {
   // this.loadProducts();
  }

  ngOnInit(): void {
   // this.loadProducts();
    this.loadMPSForThisUser();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadProducts() {
    this.MPService.findAllMPs().subscribe({
      next: (result) => {
        this.dataSource.data = result; // Assign the data to MatTableDataSource
      },
      error: (err) => {
        console.log(err);
      }
    });
  }



 loadMPSForThisUser(){
   var id = this.helperService.userId;
   this.MPService.findMPsByUser(id).subscribe({
      next:(res)=>{
        console.log(res.products);
        this.dataSource.data = res.mps;
      },
      error:(err)=>{
        console.log(err);
      }
   })
 }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
