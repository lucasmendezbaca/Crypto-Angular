import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "@angular/fire/auth";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public user: any;

  constructor(private auth:Auth, private router:Router) { }

  register(email: string, password: string) {
    createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        this.router.navigate(['/portafolio']);
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
        this.router.navigate(['/portafolio']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
  }

  loginWithGoogle() {
    signInWithPopup(this.auth, new GoogleAuthProvider())
      .then((result) => {
        const user = result.user;
        console.log(user);
        this.router.navigate(['/portafolio']);
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential)
      });
  }


  singOut() {
    signOut(this.auth).then(() => {
      console.log('Sign-out successful');
        this.router.navigate(['/']);
    }).catch((error) => {
      console.log('An error happened');
    });
  }

  isLogged() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        console.log('Logged in');
        this.user = user;
      } else {
        console.log('Not logged in');
        this.user = false;
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
