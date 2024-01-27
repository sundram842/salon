import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { HomePageComponent } from "../home-page/home-page.component";
import { ServiceComponent } from "../service/service.component";
import { LogoComponentComponent } from "../logo-component/logo-component.component";
import { AboutMeComponent} from "../about-me/about-me.component";
@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatDialogModule, HomePageComponent, ServiceComponent,LogoComponentComponent,AboutMeComponent],
  
})
export class HeaderComponent {
  public isService:boolean = false;

  constructor(public dialog: MatDialog){

  }
  public openEmailClient() {
    const emailAddress = 'sundramkumar773@gmail.com';
    const mailtoUri = `mailto:${emailAddress}`;
    window.location.href = mailtoUri;
  }
  // public openSearch(){
    
  // }
   public openSearch(enterAnimationDuration: string, exitAnimationDuration: string): void {
     this.dialog.open(SearchBarComponent, {
      width: '1000px',
      height:'400px',
      enterAnimationDuration,
      exitAnimationDuration,
      disableClose:true
    });
  }
  public onHover(){
 this.isService = true;
  }
  public onLeave(){
    this.isService = false;
  }

  public receiveMessage(message: boolean) {
    this.isService = message;
  }
}
