import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';

@Component({
  selector: 'app-synthesizer',
  templateUrl: './synthesizer.component.html',
  styleUrls: ['./synthesizer.component.scss'],
})
export class SynthesizerComponent implements OnInit {

  synth;
  msdown = false;

  constructor() {
    this.synth = new Tone.Synth().toDestination();
   }

  ngOnInit() {}

  msover(note: string) {
    if (this.msdown) {
      this.play(note);
    }
  }

  play(note: string) {
    this.synth.triggerAttackRelease(note, '8n');
  }


}
