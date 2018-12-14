import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../servicios/login.service';
import {Router} from "@angular/router"
import { TiendaComponent } from '../tienda/tienda.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	emailLocal: string
	errorMessage: string;
	successMessage: string;
	isChecked: boolean;

  constructor(public login:LoginService, private router: Router) {}

  ngOnInit() {
  	this.comprobarLocalStorage();
  	this.sacarPubli();
  }

  cerrarPubli(modal) {
  	modal.classList.remove('appear');
  }

  doLogin(email, passwd, check) {

  	email = email.value;
  	passwd = passwd.value;

  	if(email.length > 0 && passwd.length > 0) {
  		this.login.doLogin(email, passwd)
		  .then(res => {
		    console.log(res);
		    if(check) {
		    	localStorage.setItem('email', JSON.stringify(email));
		    }
		    this.errorMessage = "";
		    this.successMessage = "Your account has been created";
		    this.router.navigate(['/tienda']);
		  }, err => {
		    console.log(err);
		    this.errorMessage = err.message;
		    this.successMessage = "";
		  });
  	} else {
  		console.log('Esto esta vacio');
  	}
  }

  comprobarLocalStorage() {
  	this.emailLocal = JSON.parse(localStorage.getItem('email'));
  	if(this.emailLocal && this.emailLocal !== "" ) {
  		this.isChecked = true;
  	}
  }

  borrarRecord() {
  	console.log("hola");
  	localStorage.removeItem('email');
  }






  sacarPubli() {
  	setTimeout(function(){
  		document.querySelector('.modalPubli').classList.add('appear');
  	}, 2000);
  }
}
