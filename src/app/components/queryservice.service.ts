import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


export class Message{
  constructor(public author:string, public content:string){}
}
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }
  conversation = new Subject<Message[]>();
  messageMap:any ={
   "hi":"Hello! How may I help you?",
   "Hi":"Hello! How may I help you?",
   "what is a motherboard":"A motherboard, also known as the mainboard or system board, is a crucial component of a computer system. It is a printed circuit board (PCB) that acts as a central hub, connecting various hardware components and allowing them to communicate with each other.",
   "default": "Sorry, I could't quite get that.",
   "what is a cpu":"A CPU (Central Processing Unit), also commonly referred to as a processor, is the primary component of a computer system responsible for executing instructions and performing calculations. It is often considered the brain of the computer.",
   "what is a gpu":"A GPU (Graphics Processing Unit) is a specialized electronic circuit primarily designed to handle and accelerate the rendering and display of images, videos, and graphics on a computer or other electronic devices. While a CPU (Central Processing Unit) is responsible for general-purpose computing tasks, a GPU focuses on graphics-related computations.",
   "help":"Sure! What can I help you with?",
   "what is memory":"Memory, in the context of computers, refers to the electronic components and systems used for storing and retrieving data and instructions. It is a fundamental part of any computer system and is responsible for holding the information that the CPU (Central Processing Unit) needs to perform tasks.",
   "how do i build a pc":"Building a PC can be an exciting and rewarding experience. Here's a general step-by-step guide to help you get started: 1) Define Your Needs and Budget  2)Choose PC Components  3)Assemble the PC" , 
   "haha":"I am happy that you are having fun! :D",
  }

  getBotAnswer(msg:any){
    const userMessage = new Message('user',msg);
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot', this.getBotMessage(msg));
    setTimeout(()=>{
      this.conversation.next([botMessage]);
    },1500);
  }

  getBotMessage(question:string){
    let answer = this.messageMap[question];
    return answer || this.messageMap['default']; 
  }
  
 
}