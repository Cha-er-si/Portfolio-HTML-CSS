import { Injectable, signal } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  getDocs,
} from '@angular/fire/firestore';
import { firstValueFrom, Observable, of, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  personal = signal<any[]>([]);
  tutorial = signal<any[]>([]);
  frontEndMentor = signal<any[]>([]);
  designs = signal<any[]>([]);
  loading = signal<boolean>(true);

  constructor(private firestore: Firestore) {}

  async fetchProjects() {
    this.loading.set(true);
    const personalReference = collection(this.firestore, 'personal');
    const personalSnapshot = await getDocs(personalReference);
    const personalData = personalSnapshot.docs.map((doc) => {
      return {
        ...doc.data(),
      };
    });
    this.personal.set(personalData);

    const tutorialReference = collection(this.firestore, 'tutorial');
    const tutorialSnapshot = await getDocs(tutorialReference);
    const tutorialData = tutorialSnapshot.docs.map((doc) => {
      return {
        ...doc.data(),
      };
    });
    this.tutorial.set(tutorialData);

    const frontEndMentorReference = collection(
      this.firestore,
      'frontEndMentor',
    );
    const frontEndMentorSnapshot = await getDocs(frontEndMentorReference);
    const frontEndMentorData = frontEndMentorSnapshot.docs.map((doc) => {
      return {
        ...doc.data(),
      };
    });
    this.frontEndMentor.set(frontEndMentorData);

    const designsReference = collection(this.firestore, 'designs');
    const designsSnapshot = await getDocs(designsReference);
    const designsData = designsSnapshot.docs.map((doc) => {
      return {
        ...doc.data(),
      };
    });
    this.designs.set(designsData);
    this.loading.set(false);
  }
}
