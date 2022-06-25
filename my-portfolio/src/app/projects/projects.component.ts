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

  onClickGithubLink(url: string): void {
    window.open(url);
  }

  ngOnInit(): void {
    this.projects = [{
      projectTitle: "Flame And Wax",
      projectDescription: "A website e-commerce application created using .NetCore MVC Framework C# Application.",
      githubLink: "https://github.com/johnvillar41/FlameAndWax-Web-Application",
      isDark: true
    },
    {
      projectTitle: "BGC Mobile Development",
      projectDescription: "A android e-commerce application created using Native Android Framework and Java Language.",
      githubLink: "https://github.com/johnvillar41/BGC-Mobile-Development",
      isDark: false
    },
    {
      projectTitle: "BGC Web Development",
      projectDescription: "A website e-commerce application created using ASP.NET Webforms Framework and C# Language.",
      githubLink: "https://github.com/johnvillar41/BGC-Web-Development",
      isDark: false
    },
    {
      projectTitle: "Sentiment Analysis Tool Web",
      projectDescription: "A website created for Computing sentiments using .NetCore MVC Framework C# Application.",
      githubLink: "https://github.com/johnvillar41/SentimentAnalysisTool.Web",
      isDark: true
    },
    {
      projectTitle: "Sentiment Analysis Tool Api",
      projectDescription: "An API for Computing sentiments using .NetCore Web API Framework C# Application.",
      githubLink: "https://github.com/johnvillar41/SentimentAnalysisTool.Api",
      isDark: true
    },
    {
      projectTitle: "Trello Clone",
      projectDescription: "A Simple Clone of trello using Xamarin.Android",
      githubLink: "https://github.com/johnvillar41/Trello-Clone-Xamarin.Android",
      isDark: false
    },
    {
      projectTitle: "Project Portfolio",
      projectDescription: "Project Portfolio created using Angular Framework",
      githubLink: "https://github.com/johnvillar41/Website-portfolio",
      isDark: false
    }];

  }

}
