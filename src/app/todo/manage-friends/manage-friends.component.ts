import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../socket.service';
import { ToastrService } from 'ngx-toastr';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-manage-friends',
  templateUrl: './manage-friends.component.html',
  styleUrls: ['./manage-friends.component.css'],
  providers: [SocketService]

})
export class ManageFriendsComponent implements OnInit {
  public authToken: string;

  constructor(
    public socketService: SocketService,
    public toastr: ToastrService,

  ) { }

  ngOnInit() {
    this.authToken = Cookie.get('authToken');
    this.verifyUserConfirmation()
  }

  //listened
  public verifyUserConfirmation: any = () => {
    this.socketService.verifyUser()
      .subscribe(() => {
        this.socketService.setUser(this.authToken);//in reply to verify user emitting set-user event with authToken as parameter.
      },
        (err) => {
          this.toastr.error(err, "Some error occured");
        });//end subscribe
  }//end verifyUserConfirmation

}
