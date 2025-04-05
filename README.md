### ANGULAR-BASICS 
### 1. ANGULAR INTRODUCTIONS
- Angular is a typescript based front end framework, devoloped by google for creating the dynamic webpages.
- Angular offers data binding, directives, routing, etc.
- Angular is a SOP(single page application).
- Angular offers Component based Architechture.

### 2. INSTALLATION OF ANGULAR
- Download [Node.js](https://nodejs.org/en/download) from the official website.
- Npm(Node package manager) Comes along with the Node.js.After the installation of Node.js open any terminal and type
```
node -v
npm -v
```
if any of the version is shown as output.Node.js installation is done 
- Create a project
```
sudo ng new <project_name>
```
**sudo** for Linux and Mac devices for the permission
- Run a project
```
ng serve
```
now project will be running in the http://localhost:4200 open in any of the browser.

### ANGULAR PROJECT STRUCTURE 
1. .vscode
2.  public(favicon.ico - icon of the angular web page)
3.  src (app , index.html, styles.css, main.ts) : app is a component, index.html is a simple html page, styles.css and main.ts is asociated to index.html.
- app (app.component.html, app.component.css, app.component.ts, app.component.spec.ts, app.router.ts, app.config.ts)
4. .gitignore
5. README.md
6. package.json
7. angular.json
8. ts.config.ts
9. ts.config.spec.ts
10. ts.config.app.ts

### DATA BINDING 
- Data binding is the process of connecting Typescript(logic) components to the html structure(view page)
- types of data binding
  1. Interpolation : {{ var_name }}
  2. Property Binding : [<prop_name>]
  3. Two Way binding : [(ngModel)] - import {FormsModule} from '@angluar/forms'
  4. Event Binding : (<event_name>)
- Example:
app.component.ts
```
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [FormsModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'Project01';
  name:string = "Vaishnav Krishna P";
  age:number = 23;
  phNumber:number = 9876545678;
}
```
app.component.html
```

    <h1 style="color: red;">Data Binding techniques</h1>
    <h2>Interpolation</h2>
    <p>Name: {{name}}</p>
    <p>Age: {{age}}</p>
    <p>Phone Number: {{phNumber}}</p>

    <h2>Property Binding</h2>
    <input type="text" [value]="name">

    <h2>Two Way Binding</h2>
    <input type="text" [(ngModel)]='name'>
    <p>Name: {{name}}</p>

    <h2>Event Binding</h2>
    <button (click)="show()">Click Me</button>
```
Note : dont keep the tags inside html, head or body 

#### Directives : Structural Directives and Attribute Directives
- Strucural Directives includes *ngFor & *ngIf : to iterate through the element and to check the condition
- Example:
app.component.html
```
// Array : Objects 
  studentMarks = [
    {"sino": 1, "subjects": "Maths", "mark":89},
    {"sino": 2, "subjects": "Chemistry", "mark":97},
    {"sino": 3, "subjects": "Biology", "mark":98},
    {"sino": 4, "subjects": "Hindi", "mark":100},
    {"sino": 4, "subjects": "Biology", "mark":67}
  ]
```
app.component.ts 
```
<table>
      <thead>
        <tr>
          <th>SINO</th>
          <th>Sujectb</th>
          <th>Marks</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let sub of studentMarks"  align="center">
          <td *ngIf="sub.mark > 70">{{sub.sino}}</td>
          <td *ngIf="sub.mark > 70">{{sub.subjects}}</td>
          <td *ngIf="sub.mark > 70">{{sub.mark}}</td>
        </tr>
      </tbody>
    </table>
```
