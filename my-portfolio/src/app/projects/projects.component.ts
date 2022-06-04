import { Component, OnInit } from '@angular/core';
import { ProjectModel } from 'src/models/projectModel';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: ProjectModel[] = [];
  constructor() { }

  ngOnInit(): void {
    let projectFlameAndWax: ProjectModel = {
      projectTitle: "Flame And Wax",
      projectDescription: "A website e-commerce application created using .NetCore MVC Framework C# Application.",
      githubLink: "https://github.com/johnvillar41/FlameAndWax-Web-Application",
      isDark: true
    }
    let projectBGCMobile: ProjectModel = {
      projectTitle: "BGC Mobile Development",
      projectDescription: "A android e-commerce application created using Native Android Framework and Java Language.",
      githubLink: "https://github.com/johnvillar41/BGC-Mobile-Development",
      isDark: false
    }
    let projectBGCWeb: ProjectModel = {
      projectTitle: "BGC Web Development",
      projectDescription: "A website e-commerce application created using ASP.NET Webforms Framework and C# Language.",
      githubLink: "https://github.com/johnvillar41/BGC-Web-Development",
      isDark: false
    }
    let projectSentimentAnalysisWeb: ProjectModel = {
      projectTitle: "Sentiment Analysis Tool Web",
      projectDescription: "A website created for Computing sentiments using .NetCore MVC Framework C# Application.",
      githubLink: "https://github.com/johnvillar41/SentimentAnalysisTool.Web",
      isDark: true
    }
    let projectSentimentAnalysisApi: ProjectModel = {
      projectTitle: "Sentiment Analysis Tool Api",
      projectDescription: "An API for Computing sentiments using .NetCore Web API Framework C# Application.",
      githubLink: "https://github.com/johnvillar41/SentimentAnalysisTool.Api",
      isDark: true
    }
    this.projects.push(projectFlameAndWax);
    this.projects.push(projectBGCMobile);
    this.projects.push(projectBGCWeb);
    this.projects.push(projectSentimentAnalysisWeb);
    this.projects.push(projectSentimentAnalysisApi);
  }

}
