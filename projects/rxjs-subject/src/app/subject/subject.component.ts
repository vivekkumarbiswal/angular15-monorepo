import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent {
  value = 1;

  subject = new Subject<number>();
  behaviorSubject = new BehaviorSubject<number>(0);
  replaySubject = new ReplaySubject<number>(2);
  asyncSubject = new AsyncSubject<number>();

  subjectLogs: number[] = [];
  behaviorLogs: number[] = [];
  replayLogs: number[] = [];
  asyncLogs: number[] = [];

  emitValue() {
    console.log('EMIT ->', this.value);
    this.subject.next(this.value);
    this.behaviorSubject.next(this.value);
    this.replaySubject.next(this.value);
    this.asyncSubject.next(this.value);
    this.value++;
  }

  subscribeSubject() {
    console.log('subscribeSubject() called');
    this.subject.subscribe((v) => {
      console.log('subject emitted', v);
      // immutable update so Angular picks it up
      this.subjectLogs = [...this.subjectLogs, v];
    });
  }

  subscribeBehavior() {
    console.log('subscribeBehavior() called');
    this.behaviorSubject.subscribe((v) => {
      console.log('behaviorSubject emitted', v);
      this.behaviorLogs = [...this.behaviorLogs, v];
    });
  }

  subscribeReplay() {
    console.log('subscribeReplay() called');
    this.replaySubject.subscribe((v) => {
      console.log('replaySubject emitted', v);
      this.replayLogs = [...this.replayLogs, v];
    });
  }

  subscribeAsync() {
    console.log('subscribeAsync() called');
    this.asyncSubject.subscribe((v) => {
      console.log('asyncSubject emitted', v);
      this.asyncLogs = [...this.asyncLogs, v];
    });
  }

  completeAsync() {
    console.log('completeAsync() called');
    this.asyncSubject.complete();
  }
}
