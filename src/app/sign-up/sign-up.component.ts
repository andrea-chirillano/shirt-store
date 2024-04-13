// Importa la interfaz User desde UserModel
import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private userService: UserService) { }

  onSubmit() {
    // Obtiene los valores del formulario
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    // Crea una instancia de User con los valores obtenidos
    const newUser: User = {
      name: username,
      email: email,
      password: password
    };

    // Llama al método addUser con la instancia de User
    this.userService.addUser(newUser);
  }
}
