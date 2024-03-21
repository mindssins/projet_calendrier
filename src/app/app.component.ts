import { Component } from '@angular/core';
import { NgZeeTimeTableData, NgZeeTimeTableOptions } from 'projects/ng-zee-timetable/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data: NgZeeTimeTableData = {
    "Monday": {
      "07:00": {
        title: "JAVA AVANCEE",
        subTitle: "Mr Jacques Aimé",
        endTime: "09:00"
      },
      "14:00": {
        title: "DATA SCIENCES",
        subTitle: "Mr Cedrick",
        endTime: "18:00"
      }
    },
    "Tuesday": {
      "07:00": {
        title: "METHODE NUMERIQUE",
        subTitle: "Mr Angelo",
        endTime: "09:00"
      },
      "09:00": {
        title: "JAVA WEB",
        subTitle: "Compulsory",
        endTime: "12:00"
      },
      "14:00": {
        title: "METHODE NUMERIQUE",
        subTitle: "Mr Angelo",
        endTime: "18:00"
      },
    },
    "Wednesday": {
      "08:00": {
        title: "CEO",
        subTitle: "Mme Raojery",
        endTime: "12:00"
      },
    },
    "Thursday": {
      "08:00": {
        title: "ALG LIN",
        subTitle: "Mr Fanomezana",
        endTime: "9:00"
      },
      "11:00": {
        title: "Computer",
        subTitle: "Compulsory",
        endTime: "12:00"
      }
    },
    "Friday": {
      "07:00": {
        title: "JAVA AVANCEE",
        subTitle: "Mr Jackues Aimé",
        endTime: "09:00"
      },
      "14:00": {
        title: "DATA SCIENCES",
        subTitle: "Mr Cedrick",
        endTime: "18:00"
      },
    }
  };

  options: NgZeeTimeTableOptions = {
    element: {
      background: '#93cbfa', titleColor: 'white', subTitleColor: '#862424'
    },
    rowLabel: {
      background: '#02003b',
      labelColor: 'white'
    }
  };

  days: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
}
