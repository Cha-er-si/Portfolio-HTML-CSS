import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ProjectService } from '../../services/project/project.service';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';

@Component({
  selector: 'app-projects',
  imports: [MatTabsModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  projects: any = {};

  constructor(public projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.fetchProjects();
  }
}
