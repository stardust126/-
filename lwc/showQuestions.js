import { LightningElement, track, wire } from 'lwc';
import findQuestions from '@salesforce/apex/questionController.findQuestions';

const COLS = [
    { label: 'No.', fieldName: 'No__c'},
    { label: 'Question1', fieldName: 'Question1__c'},
    { label: 'Category1', fieldName: 'Category1__c' },
    { label: 'Answer1', fieldName: 'Answer1__c' },
    { label: 'Question2', fieldName: 'Question2__c'},
    { label: 'Category2', fieldName: 'Category2__c' },
    { label: 'Answer2', fieldName: 'Answer2__c' },
    { label: 'Question2', fieldName: 'Question2__c'},
    { label: 'Category2', fieldName: 'Category2__c' },
    { label: 'Answer2', fieldName: 'Answer2__c' },
    { label: 'Question3', fieldName: 'Question3__c'},
    { label: 'Category3', fieldName: 'Category3' },
    { label: 'Answer3', fieldName: 'Answer3' },
    { label: 'Question4', fieldName: 'Question4'},
    { label: 'Category4', fieldName: 'Category4' },
    { label: 'Answer4', fieldName: 'Answer4' },
    { label: 'Question5', fieldName: 'Question5'},
    { label: 'Category5', fieldName: 'Category5' },
    { label: 'Answer5', fieldName: 'Answer5' },
    { label: 'Question6', fieldName: 'Question6'},
    { label: 'Category6', fieldName: 'Category6' },
    { label: 'Answer6', fieldName: 'Answer6' },
    { label: 'Question7', fieldName: 'Question7'},
    { label: 'Category7', fieldName: 'Category7' },
    { label: 'Answer7', fieldName: 'Answer7' },
    { label: 'Question8', fieldName: 'Question8'},
    { label: 'Category8', fieldName: 'Category8' },
    { label: 'Answer8', fieldName: 'Answer8' },
    { label: 'Question9', fieldName: 'Question9'},
    { label: 'Category9', fieldName: 'Category9' },
    { label: 'Answer9', fieldName: 'Answer9' },
    { label: 'Question10', fieldName: 'Question10'},
    { label: 'Category10', fieldName: 'Category10' },
    { label: 'Answer10', fieldName: 'Answer10' },
];
export default class ShowQuestions extends LightningElement {
    columns = COLS;
    tabledata;
    @wire(findQuestions)
    questionsHandler({data,error}){
        if(data){
            this.tabledata=data;
            console.log(data);
        }
        if(error){
            console.error(error);
        }
    }
}
