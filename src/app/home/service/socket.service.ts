import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  socketEnpoit: string = 'http://localhost:8080/data';
  constructor() {}
}
