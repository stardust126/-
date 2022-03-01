import { LightningElement, wire } from 'lwc';
import findQuestions from '@salesforce/apex/questionsearch.findQuestions';


export default class Question extends LightningElement {
    @wire(findQuestions)questionsHandler;
    btn(){
        console.log(1);
        console.log(this.questionsHandler.data[0].Id);
    }
}