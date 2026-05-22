import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

interface ExperienceEvent {
  role: string;
  company: string;
  date: string;
  logoUrl: string;
}

@Component({
  selector: 'app-work-experience',
  imports: [CommonModule, TimelineModule, CardModule, ButtonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss',
})
export class WorkExperienceComponent {
  experiences = signal<ExperienceEvent[]>([
    {
      role: 'ADVANCED APP ENGINEERING SR ANALYST',
      company: 'Accenture Inc.',
      date: 'December 2025 - Present',
      logoUrl: 'assets/images/experience/accenture.png',
    },
    {
      role: 'FREELANCE WEB DESIGNER',
      company: 'Limitless39 Llc.',
      date: 'November 2025 - December 2025',
      logoUrl: 'assets/images/experience/limitless39.jpg',
    },
    {
      role: 'ADVANCED APP ENGINEERING ANALYST',
      company: 'Accenture Inc.',
      date: 'October 2024 - December 2025',
      logoUrl: 'assets/images/experience/accenture.png',
    },
    {
      role: 'JUNIOR SOFTWARE DEVELOPER II',
      company: 'Bastion Inc.',
      date: 'September 2024 - October 2024',
      logoUrl: 'assets/images/experience/Bastion.png',
    },
    {
      role: 'JUNIOR SOFTWARE DEVELOPER I',
      company: 'Bastion Inc.',
      date: 'September 2022 - September 2024',
      logoUrl: 'assets/images/experience/Bastion.png',
    },
    {
      role: 'PART-TIME CODING INSTRUCTOR',
      company: 'Philippine Coding Camp',
      date: 'June 2022 - December 2023',
      logoUrl: 'assets/images/experience/pcclogo.png',
    },
    {
      role: 'WEB DEVELOPER INTERN',
      company: 'Dolorfino and Associates, CPAs',
      date: 'August 2021 - September 2021',
      logoUrl: 'assets/images/experience/dacpa1.png',
    },
  ]);

  timelineAlign = signal<'left' | 'alternate'>('left');
  private breakpointObserver = inject(BreakpointObserver);

  ngOnInit(): void {
    // Watch for viewports that are 993px wide or larger
    this.breakpointObserver
      .observe(['(min-width: 426px)'])
      .subscribe((state) => {
        if (state.matches) {
          // Web View
          this.timelineAlign.set('alternate');
        } else {
          // Moblie View
          this.timelineAlign.set('left');
        }
      });
  }
}
