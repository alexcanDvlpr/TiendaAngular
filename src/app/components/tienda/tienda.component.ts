import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../servicios/firestore/firestore.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

	productos: any[] = [];


	constructor(private firestoreService: FirestoreService) { }

	ngOnInit() {
		this.productos = [];
		this.firestoreService.getProducts().subscribe((productsSnapshot) => {
		    productsSnapshot.forEach((data: any) => {
			    this.productos.push({
		          id: data.payload.doc.id,
		          data: data.payload.doc.data()
		        });
	      });
	    });

	    console.log(this.productos);
	}

	getProduct(elem) {
		let id = elem.payload.doc.id;
		this.firestoreService.getProduct(id).subscribe((prductsSnapshot) => {
		    
			    console.log(prductsSnapshot);
	    });
	}

	abrirModal(producto) {
		alert(producto.data.nombre);
	}

}
