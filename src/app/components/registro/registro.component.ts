import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../servicios/registro.service';
import {Router} from "@angular/router"
import { TiendaComponent } from '../tienda/tienda.component';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

	errorMessage: string;
	successMessage: string;

  constructor(public register:RegistroService, private router: Router) { }

  ngOnInit() {
  }


  doRegister(emailInput, passwdInput){
  	
  	if(emailInput !== "" && passwdInput !== "") 
  	{
  		let email = emailInput.value;
  		let pass = passwdInput.value;
  		this.register.doRegister(email,pass)
		  .then(res => {
		    console.log(res);
		    this.errorMessage = "";
		    this.successMessage = "Has entrado";
		    this.router.navigate(['/tienda']);
		  }, err => {
		    console.log(err);
		    this.errorMessage = err.message;
		    this.successMessage = "";
		  });
  	} else {
  		console.log("esta vacio");
  	}

  }


}
