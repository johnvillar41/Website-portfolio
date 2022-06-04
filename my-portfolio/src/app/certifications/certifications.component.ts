import { Component, OnInit } from '@angular/core';
import { CertificationModel } from 'src/models/certificationModel';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {

  certificationsCarousel1: CertificationModel[] = [];
  certificationsCarousel2: CertificationModel[] = [];
  certificationsCarousel3: CertificationModel[] = [];
  certificationsCarousel4: CertificationModel[] = [];
  constructor() { }

  ngOnInit(): void {
    this.onInitializeCertifications();
  }

  onInitializeCertifications(): void {
    let machineVisionCert: CertificationModel = {
      certificationTitle: "Machine Vision",
      certificationImageLink: "https://johnvillar41.github.io/Website-portfolio/assets/images/Cert_Machine_Vision.jpg"
    };
    let gitCert: CertificationModel = {
      certificationTitle: "Better Code Management and Collaboration: Introduction to Git",
      certificationImageLink: "https://johnvillar41.github.io/Website-portfolio/assets/images/Better%20code.PNG"
    };
    let uiUxCert: CertificationModel = {
      certificationTitle: "UI/UX Creating a Design System",
      certificationImageLink: "https://johnvillar41.github.io/Website-portfolio/assets/images/Ui_UX_CERT.png"
    };
    let cloudCert: CertificationModel = {
      certificationTitle: "AWS Educate Introduction to Cloud 101",
      certificationImageLink: "https://johnvillar41.github.io/Website-portfolio/assets/images/Aws_CloudComputing.PNG"
    };
    let learningDesignThinkingCert: CertificationModel = {
      certificationTitle: "Learning Design Thinking: Lead Change in Your Organization",
      certificationImageLink: "https://johnvillar41.github.io/Website-portfolio/assets/images/CertificateOfCompletion_Learning%20Design%20Thinking%20Lead%20Change%20in%20Your%20Organization-1.png"
    };
    let creativeThinkingCert: CertificationModel = {
      certificationTitle: "Develop Your Creative Thinking and Innovation Skills",
      certificationImageLink: "https://johnvillar41.github.io/Website-portfolio/assets/images/CertificateOfCompletion_Develop%20Your%20Creative%20Thinking%20and%20Innovation%20Skills%20(1)-1.png"
    };
    let criticalThinkingCert: CertificationModel = {
      certificationTitle: "Develop Critical Thinking DecisionMaking and ProblemSolving Skills",
      certificationImageLink: "https://johnvillar41.github.io/Website-portfolio/assets/images/CertificateOfCompletion_Develop%20CriticalThinking%20DecisionMaking%20and%20ProblemSolving%20Skills-1.png"
    };
    let projectManagementFoundationsCert: CertificationModel = {
      certificationTitle: "Project Management Foundations",
      certificationImageLink: "https://johnvillar41.github.io/Website-portfolio/assets/images/CertificateOfCompletion_Project%20Management%20Foundations-1.png"
    };
    let projectManagerCert: CertificationModel = {
      certificationTitle: "Become an Agile Project Manager",
      certificationImageLink: "https://johnvillar41.github.io/Website-portfolio/assets/images/CertificateOfCompletion_Become%20an%20Agile%20Project%20Manager-1.png"
    };
    let cloudDeveloperCert: CertificationModel = {
      certificationTitle: "Become a Cloud Developer",
      certificationImageLink: "https://johnvillar41.github.io/Website-portfolio/assets/images/CertificateOfCompletion_Become%20a%20Cloud%20Developer-1.png"
    };
    this.certificationsCarousel1.push(machineVisionCert);
    this.certificationsCarousel1.push(gitCert);
    this.certificationsCarousel1.push(uiUxCert);
    this.certificationsCarousel2.push(cloudCert);
    this.certificationsCarousel2.push(learningDesignThinkingCert);
    this.certificationsCarousel2.push(creativeThinkingCert);
    this.certificationsCarousel3.push(criticalThinkingCert);
    this.certificationsCarousel3.push(projectManagementFoundationsCert);
    this.certificationsCarousel3.push(projectManagerCert);
    this.certificationsCarousel4.push(cloudDeveloperCert);
  }

  onImageLinkClicked(certificationLink: string): void {
    window.open(certificationLink, '_blank');
  }



}
