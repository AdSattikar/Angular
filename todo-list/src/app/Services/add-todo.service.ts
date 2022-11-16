import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddTodoService {

  constructor(private AddTodoComponent:AddTodoService) { }
}
