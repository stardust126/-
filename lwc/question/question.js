import { LightningElement, wire } from 'lwc';
import findQuestions from '@salesforce/apex/questionsearch.findQuestions';
import getName from '@salesforce/apex/questionsearch.getName';
import CURRENTUSERID from '@salesforce/user/Id';
import getNowPlusThirty from '@salesforce/apex/MeetingMakerUtil.getNowPlusThirty';

export default class Question extends LightningElement {
    @wire(findQuestions)questionsHandler;
    @wire(getName,{ids:'$currentUserId'}) NameData;
    currentUserId = CURRENTUSERID;
    timed = new Date().toLocaleString();
   
    handleClick(){
        console.log(11);
        let button1 = this.template.querySelector('[data-id="button1"]');
        let button2 = this.template.querySelector('[data-id="button2"]');
        button1.variant = 'brand';
        button2.variant = 'Neutral';
    }

    handleClick2(){
        console.log(22);
        let button2 = this.template.querySelector('[data-id="button2"]');
        let button1 = this.template.querySelector('[data-id="button1"]');
        button1.variant = 'Neutral';
        button2.variant = 'brand';
    }

    
}