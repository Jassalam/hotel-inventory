import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinvapp-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
 hotelName = 'Hotel Hilton';

 numberOfRooms = 10;

 hideRooms = false;

 rooms: Room = {
    availableRooms: 0,
    bookedRooms : 5,
    totalRooms: 20,
 }

 roomList: RoomList[] = [
 ]


 toggle(){
this.hideRooms = !this.hideRooms;
 }
}
