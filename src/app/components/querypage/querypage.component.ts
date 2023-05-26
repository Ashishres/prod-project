import { Component,OnInit } from '@angular/core';
import { ChatService, Message} from '../queryservice.service';

@Component({
  selector: 'app-querypage',
  templateUrl: './querypage.component.html',
  styleUrls: ['./querypage.component.css']
})
export class QuerypageComponent implements OnInit{
  messages : Message[] = [];
  value:string | undefined;
  constructor(public chatService:ChatService){}

  ngOnInit():void {
      this.chatService.conversation.subscribe((val)=>{
        this.messages = this.messages.concat(val);
      });
        
    }
    sendMessage(){
      this.chatService.getBotAnswer(this.value);
      this.value = ''
    }
   
    
}
