import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, MenubarModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CollegeAPIClient';
  students: any[] = []; 
  // constructor(private _httpClient: HttpClient) { }


  // private getHeaders(): any {
  //   return {
  //     headers: new HttpHeaders({

  //     })
  //   }
  // }
  // getStudents() {
  //   this._httpClient.get('https://localhost:7163/api/Student/All', this.getHeaders()).subscribe({
  //     next: (result: any) => {
  //       this.students = result;
  //       console.log(result)
  //     },
  //     error: (error: any) => {
  //       console.log(error);

  //     }
  //   })
  // }
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: 'Home',
              icon: 'pi pi-home'
          },
          {
              label: 'Features',
              icon: 'pi pi-star'
          },
          {
              label: 'Projects',
              icon: 'pi pi-search',
              items: [
                  {
                      label: 'Components',
                      icon: 'pi pi-bolt'
                  },
                  {
                      label: 'Blocks',
                      icon: 'pi pi-server'
                  },
                  {
                      label: 'UI Kit',
                      icon: 'pi pi-pencil'
                  },
                  {
                      label: 'Templates',
                      icon: 'pi pi-palette',
                      items: [
                          {
                              label: 'Apollo',
                              icon: 'pi pi-palette'
                          },
                          {
                              label: 'Ultima',
                              icon: 'pi pi-palette'
                          }
                      ]
                  }
              ]
          },
          {
              label: 'Contact',
              icon: 'pi pi-envelope'
          }
      ]
  }
}
