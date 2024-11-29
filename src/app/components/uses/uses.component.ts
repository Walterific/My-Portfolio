import { Component } from '@angular/core';
import { Uses } from '../model/uses.model';
import { UsesService } from '../services/uses.service';

@Component({
  selector: 'app-uses',
  templateUrl: './uses.component.html',
  styleUrl: './uses.component.css'
})
export class UsesComponent {
  workstation: Uses[] = [];
  development: Uses[] = [];
  design: Uses[] = [];

  constructor(private usesService: UsesService) {}

  ngOnInit(): void {
    this.workstation = this.usesService.getWorkStation();
    this.development = this.usesService.getDevelopment();
    this.design = this.usesService.getDesign();
  }
}
