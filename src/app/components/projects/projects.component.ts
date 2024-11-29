import { Component } from '@angular/core';
import { Project } from '../model/project.model';
import { ProjectService } from '../services/project.service';
import { FontIconsService } from '../services/fonticons.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  project: Project[] = [];

  faLink = this.fontIconsService.faLink;

  constructor(
    private projectService: ProjectService, 
    private fontIconsService: FontIconsService
  ) {}

  ngOnInit(): void {
      this.project = this.projectService.getProjects();
  }
}
