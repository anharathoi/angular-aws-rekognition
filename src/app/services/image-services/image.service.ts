import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private url = 'https://backend.anharzihan.now.sh';
  
  constructor(private http: HttpClient) {
  }

  uploadImage(payload){
    return this.http.post(`${this.url}/upload`, payload)
  }

  checkAppStatus(){
    return this.http.get(this.url)
  }
}
