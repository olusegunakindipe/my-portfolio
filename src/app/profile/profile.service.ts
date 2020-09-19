import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 9',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'PHP LARAVEL',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'JAVACSRIPT',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'VUE JS',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'MYSQL DATABASE',
      'progress': '85%'
    },
    {
      'id': '6',
      'skill': 'DATA STRUCTURE',
      'progress': '70%'
    }
  ];

  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2017 - 2019',
      'education': 'Master\'s Degree',
      'stream': 'Master of Computer Science and Engineering',
      'institution': 'XIAMEN UNIVERSITY, XIAMEN, CHINA'
    },
    {
        'id': '2',
        'from_to_year': '2011 - 2015',
        'education': 'Bachelor\'s Degree',
        'stream': 'Bachelor of SCIENCE',
        'institution': 'UNIVERSITY OF IBADAN, NIGERIA'
      },
  ];

  exprienceData: any = [
    {
      'id': '1',
      'from_to_month_year': 'APRIL 2020 - PRESENT',
      'organization': 'ASTERA',
      'designation': 'Full Stack Developer',
      'details': `Created fully functional Enterprise Resource Planning (ERP) for <strong>ASTERA<\/strong>,
      The Human Resources Module was created using <strong>Angular 9, Laravel Framework for backend API.`
    },
    {
      'id': '2',
      'from_to_month_year': 'OCTOBER 2017 - NOVEMBER 2017',
      'organization': 'MITS, GWALIOR',
      'designation': 'Web Developer',
      'details': 'Designed the Official Website of the <strong>INDUSTRY CONCLAVE<\/strong>.'
    },
    {
      'id': '3',
      'from_to_month_year': 'AUGUST 2017 - SEPTEMBER 2017',
      'organization': 'QUERENCIA CLUB (MITS)',
      'designation': 'Web Developer',
      'details': 'Developed the Official Website of the <strong>MITSVAH Literary Fest<\/strong>\r\nUnder <strong>Querencia CLUB<\/strong>.'
    }
  ];
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }
}