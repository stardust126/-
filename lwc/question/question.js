import { LightningElement, wire } from 'lwc';
import findQuestions from '@salesforce/apex/questionsearch.findQuestions';
import getName from '@salesforce/apex/questionsearch.getName';
import CURRENTUSERID from '@salesforce/user/Id';


export default class Question extends LightningElement {
    @wire(findQuestions)questionsHandler;
    @wire(getName,{ids:'$currentUserId'}) NameData;
    currentUserId = CURRENTUSERID;
    timed = new Date().toLocaleString();
   

    // btn(){
    //     console.log(1);
    //     console.log(this.questionsHandler.data[0].Id);
    // }
}