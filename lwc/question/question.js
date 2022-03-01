import { LightningElement, wire } from 'lwc';
import findQuestions from '@salesforce/apex/questionsearch.findQuestions';

const columns = [
    {label: 'Question', fieldName: 'Question1__c'},
    {label: 'Answer', fieldName: 'Answer1__c' },
    {label: 'Question', fieldName: 'Question2__c'},
    {label: 'Question', fieldName: 'Answer2__c'},
    {label: 'Question', fieldName: 'Question3__c'},
    {label: 'Question', fieldName: 'Answer3__c'},
    {label: 'Question', fieldName: 'Question4__c'},

    
];

export default class Question extends LightningElement {
    columns = columns;
    tabledata;
    @wire(findQuestions)
    questionsHandler({data,error}){
        if(data){
            this.tabledata=data;
            console.log(data);
        }
        else if(error){
            console.error(error);
        }
    }
}