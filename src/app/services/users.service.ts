// import { User } from './../models/user.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
    providedIn: 'root'
  })
export class UserService {

    currentUser = firebase.auth().currentUser;
    constructor(private db: AngularFirestore, private auth: AngularFireAuth) { }

    getUsers() {
        return this.db.collection('users').snapshotChanges();
    }

    createUser(user: firebase.User) {
        if (user.displayName === undefined) {
            user.displayName = null;
        }
        this.db.collection('users').add({
            displayName: user.displayName,
            email: user.email,
            accountID: user.uid
        }).then(function (docRef) {
            console.log('New Document in User Collection with ID: ', docRef.id);
        })
            .catch(function (error) {
                console.error('Error adding user document: ', error);
            });
    }

    async getCurrentUserThenable() {
        return await firebase.auth().currentUser;
    }

    getCurrentUser() {
        return this.currentUser;
    }

    getUserDataFromUID(uid: string) {
        let userRef;
        const usersRef = this.db.collection('users', ref => ref.where('accountID', '==', uid)).ref;
        const query = usersRef.where('accountID', '==', uid).get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
            userRef = this.db.collection('users').doc(doc.id);
            });
        });
        return userRef;
    }
}
