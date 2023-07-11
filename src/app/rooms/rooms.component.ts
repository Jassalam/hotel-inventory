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
    availableRooms: 10,
    bookedRooms : 5,
    totalRooms: 20,
 }

 roomList: RoomList[] = [
  {
  roomNumber: 1,
  roomType: 'Deluxe Room',
  amenities: 'Air Conditioner, free wifi',
  price: 500,
  photos: 'https://unsplash.com/photos/VmAaEe0vVi0.jpeg',
  checkinTime: new Date('11-Nov-2023'),
  checkoutTime: new Date('13-Nov-2023'),
  rating: 4.45757
 },
 {
  roomNumber: 2,
  roomType: 'Deluxe Room',
  amenities: 'Air Conditioner, free wifi',
  price: 1000,
  photos: 'https://unsplash.com/photos/VmAaEe0vVi0.jpeg',
  checkinTime: new Date('11-Nov-2023'),
  checkoutTime: new Date('13-Nov-2023'),
  rating: 3.0
 },
 {
  roomNumber: 3,
  roomType: 'Private Room',
  amenities: 'Air Conditioner, free wifi',
  price: 1500,
  photos: 'https://unsplash.com/photos/VmAaEe0vVi0.jpeg',
  checkinTime: new Date('11-Nov-2023'),
  checkoutTime: new Date('13-Nov-2023'),
  rating: 2.6
 },
 ]


 toggle(){
this.hideRooms = !this.hideRooms;
 }
}
