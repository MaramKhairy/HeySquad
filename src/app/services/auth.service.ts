import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;

  constructor(private fireAuth: AngularFireAuth, private db: AngularFirestore, public router: Router, public userService: UserService) {
  }

  async login(email: string, password: string) {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.userData = result['user'];
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
        // this.router.navigate(['dashboard']);
        window.location.assign('/');
      }).catch(function (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + ' ' + errorMessage);
      });
  }

  logout() {
    if (this.fireAuth.auth.currentUser !== null) {
      this.fireAuth.auth.signOut();
      localStorage.clear();
      localStorage.removeItem('user');
      window.location.reload();
      // this.router.navigate(['login']);
    } else {
      console.log('No user logged in!');
    }
  }

  async signUp(email: string, password: string, displayName: string) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.setDisplayName(result.user, displayName);
        // TO DO: Verifizierungsmail senden
        this.userService.createUser(result.user);
        console.log('user ' + displayName + ' created.');
        this.login(email, password);
      }).catch(function (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + ' ' + errorMessage);
      });
  }

  isSignedIn(): boolean {
    if (localStorage.getItem('user') !== null) { return true; } else {
      return false;
    }
  }

  getCurrentUserDataFromDB() {
    let userRef;
    const currentUserEmail = this.fireAuth.auth.currentUser.email;
    const usersRef = this.db.collection('users', ref => ref.where('accountID', '==', this.fireAuth.auth.currentUser.uid)).ref;
    const query = usersRef.where('accountID', '==', this.fireAuth.auth.currentUser.uid).get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          userRef = this.db.collection('users').doc(doc.id);
        });
      });
    return userRef;
  }

  setDisplayName(user: firebase.User, name: string) {
    user.updateProfile({
      displayName: name
    }).then(function (response) {
      console.log('Display Name set to ' + user.displayName);
    }, function (error) {
      console.log(error + ' could not set Display Name.');
    });
  }
}

