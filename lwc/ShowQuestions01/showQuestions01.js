import { LightningElement, track, wire } from 'lwc';
import findQuestions from '@salesforce/apex/questionController.findQuestions';

export default class ShowQuestions01 extends LightningElement {
    @wire(findQuestions) questions;
    selectedNo;
    
    handler(evt){
        this.selectedNo=evt.target.name;
        this[NavigationMixin.Navigate]({
            type: 'standard__component',
            attributes: {
                componentName: 'c__demo1'
            },
            state: {
                c__No: this.selectedNo
            }
        });
       
    }
}
