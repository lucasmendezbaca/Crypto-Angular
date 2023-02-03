import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged  } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public user: any;

  constructor(private auth:Auth) { }

  ngOninit() {
    this.isLogged();
  }

  register(email: string, password: string) {
    createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  login(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
  }

  isLogged() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        console.log('Logged in');
        this.user = user;
      } else {
        console.log('Not logged in');
      }
    });
  }

  curenUser() {
    return new Promise((resolve, reject) => {
      const user = this.auth.currentUser;
      resolve(user);
    });
    // return this.auth.currentUser;
  }
}
