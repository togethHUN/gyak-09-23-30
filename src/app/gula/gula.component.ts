/*
* File: gula.component.ts
* Author: Tóth Gergely
* Copyright: 2026, Tóth Gergely
* Group: Szoft II/N
* Date: 2026-09-30
* Github: https://github.com/togethHUN/
* Licenc: MIT
*/



import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-gula',
  styleUrl: './gula.component.css',
  templateUrl: './gula.component.html',
})
export class GulaComponent {
  builder = inject(FormBuilder)
  
  gulaForm = this.builder.group({
    height: ['', [Validators.required, Validators.min(1)]],
    baseSide: ['', [Validators.required, Validators.min(1)]],
    volume: ['']
  })

  showVolume = false

  startCalc() {
    console.log(this.gulaForm.value)
    const height = Number(this.gulaForm.value.height)
    const baseSide = Number(this.gulaForm.value.baseSide)
    const volume = this.calcVolume(baseSide, height)
    this.gulaForm.get('volume')?.setValue(String(volume))
    this.showVolume = true
  }
  calcVolume(baseSide: number, height: number):number {
    const volume = 1.0/3.0*Math.pow(baseSide, 2) * height
    return volume
  }
}
