import {Component} from '@angular/core';
import * as goog from 'google-protobuf';

declare function require(path: string): any;
const proto = require('../assets/js/test_pb.js');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  testProto = new proto.Thingy();

  constructor() {
    this.testProto.setId(123);
    this.testProto.setName('Test proto');
    this.testProto.setType(proto.ThingType.FIRST);
  }
}
