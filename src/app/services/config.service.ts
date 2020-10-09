import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  
  base_dev_endpoint: string;
  constructor() { }
}
