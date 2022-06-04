import { Component, OnInit } from '@angular/core';
import { LearningModuleModel } from 'src/models/learningModuleModel';

@Component({
  selector: 'app-practicum-overview',
  templateUrl: './practicum-overview.component.html',
  styleUrls: ['./practicum-overview.component.css']
})
export class PracticumOverviewComponent implements OnInit {
  requiredLearningModules: LearningModuleModel[] = [];
  projectLearningModules: LearningModuleModel[] = [];
  specializationLearningModules: LearningModuleModel[] = [];

  constructor() { }

  onInitializeRequiredLearningModules(): void {
    let problemSolving: LearningModuleModel = {
      imageLink: 'https://media-exp1.licdn.com/dms/image/C4E0DAQH0NlVz7oejfQ/learning-author-crop_200_200/0/1580242490409?e=1654779600&v=beta&t=TtzGkmkkU8-CEqiT4kDQPqhQsizwmlPE6GuCs73mYeA',
      moduleTitle: "Problem Solving Techniques",
      moduleDescription: "LinkedIn Learning By: Chris Croft Apr 2017",
      dateFinished: '6/2/2022',
      isDark: true
    }
    let designThinking: LearningModuleModel = {
      imageLink: 'https://media-exp1.licdn.com/dms/image/C560DAQFEZp86sl3IrQ/learning-author-crop_200_200/0/1576191065001?e=1654779600&v=beta&t=nD8Kje92JPgQ0AuX-x933weGlxJ0JtzAZlGuwQHB7is',
      moduleTitle: "Learning Design Thinking: Lead Change in Your Organization",
      moduleDescription: "Learning Design Thinking: Lead Change in Your Organization",
      dateFinished: '5/27/2022',
      isDark: false
    }
    let creativeThinking: LearningModuleModel = {
      imageLink: 'https://media-exp1.licdn.com/dms/image/C560BAQHaVYd13rRz3A/company-logo_100_100/0/1638831589865?e=1661990400&v=beta&t=1nv_HetlsUq_hg64OcN7ODPyvyrjicckgGX3IrZB3H8',
      moduleTitle: "Develop Your Creative Thinking and Innovation Skills",
      moduleDescription: "LinkedIn Learning Apr 2020",
      dateFinished: '5/7/2022',
      isDark: true
    }
    let criticalThinking: LearningModuleModel = {
      imageLink: 'https://media-exp1.licdn.com/dms/image/C560BAQHaVYd13rRz3A/company-logo_100_100/0/1638831589865?e=1661990400&v=beta&t=1nv_HetlsUq_hg64OcN7ODPyvyrjicckgGX3IrZB3H8',
      moduleTitle: "Develop Critical-Thinking, Decision-Making, and Problem-Solving Skills",
      moduleDescription: "LinkedIn Learning May 2020",
      dateFinished: '6/2/2022',
      isDark: false
    }
    this.requiredLearningModules.push(problemSolving);
    this.requiredLearningModules.push(designThinking);
    this.requiredLearningModules.push(creativeThinking);
    this.requiredLearningModules.push(criticalThinking);
  }

  onInitializeProjectManagementLearningModules(): void {
    let projectManagementFoundations: LearningModuleModel = {
      imageLink: 'https://media-exp1.licdn.com/dms/image/C4E0DAQEdUPGczlfRfA/learning-author-crop_200_200/0/1643745237486?e=1654779600&v=beta&t=VgymvVXsah7NVthODc2lQGcMB3gCkRZodjQ2PC3GkV4',
      moduleTitle: "Project Management Foundations",
      moduleDescription: "Bonnie Biafore Jun 2019",
      dateFinished: '5/21/2022',
      isDark: true
    }
    let agileProjectManager: LearningModuleModel = {
      imageLink: 'https://media-exp1.licdn.com/dms/image/C560BAQHaVYd13rRz3A/company-logo_100_100/0/1638831589865?e=1661990400&v=beta&t=1nv_HetlsUq_hg64OcN7ODPyvyrjicckgGX3IrZB3H8',
      moduleTitle: "Become an Agile Project Manager",
      moduleDescription: "LinkedIn Learning May 2019",
      dateFinished: '5/21/2022',
      isDark: false
    }
    this.projectLearningModules.push(projectManagementFoundations);
    this.projectLearningModules.push(agileProjectManager);
  }

  onInitializeSpecializationModules(): void {
    let uxUi: LearningModuleModel = {
      imageLink: 'https://media-exp1.licdn.com/dms/image/C560BAQHaVYd13rRz3A/company-logo_100_100/0/1638831589865?e=1661990400&v=beta&t=1nv_HetlsUq_hg64OcN7ODPyvyrjicckgGX3IrZB3H8',
      moduleTitle: "Improve Your UX Design Skills",
      moduleDescription: "LinkedIn Learning Jun 2018",
      dateFinished: '5/4/2022',
      isDark: true
    }
    let projectManagementFoundations: LearningModuleModel = {
      imageLink: 'https://media-exp1.licdn.com/dms/image/C560BAQHaVYd13rRz3A/company-logo_100_100/0/1638831589865?e=1661990400&v=beta&t=1nv_HetlsUq_hg64OcN7ODPyvyrjicckgGX3IrZB3H8',
      moduleTitle: "Project Management Foundations",
      moduleDescription: "LinkedIn Learning Apr 2019",
      dateFinished: '5/15/2022',
      isDark: false
    }
    this.specializationLearningModules.push(uxUi);
    this.specializationLearningModules.push(projectManagementFoundations);
  }

  ngOnInit(): void {
    this.onInitializeRequiredLearningModules();
    this.onInitializeProjectManagementLearningModules();
    this.onInitializeSpecializationModules();
  }

}
