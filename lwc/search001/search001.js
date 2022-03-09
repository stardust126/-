import { LightningElement, wire } from 'lwc';
import getName from '@salesforce/apex/search001.getName';
import CURRENTUSERID from '@salesforce/user/Id';
import findQuestion from '@salesforce/apex/search001.findQuestion';
import findAnswr from '@salesforce/apex/search001.findAnswer';
 
const columns = [
    { label: 'question', fieldName: 'question'},
    { label: 'answer', fieldName: 'answer'},
];


const data = [
    {
        question:'Question1__c',
        answer:'Answer1__c'
    },{
        question:'Question2__c',
        answer:'Answer2__c'
    },{
        question:'Question3__c',
        answer:'Answer3__c'
    },{
        question:'Question4__c',
        answer:'Answer4__c'
    },{
        question:'Question5__c',
        answer:'Answer5__c'
    },{
        question:'Question6__c',
        answer:'Answer6__c'
    },{
        question:'Question7__c',
        answer:'Answer7__c'
    },{
        question:'Question8__c',
        answer:'Answer8__c'
    },{
        question:'Question9__c',
        answer:'Answer9__c'
    },{
        question:'Question10__c',
        answer:'Answer10__c'
    },
]

export default class Search001 extends LightningElement {

    @wire(findQuestion)Search;
    @wire(findAnswr)Search01;
    @wire(getName,{ids:'$currentUserId'}) NameData;
    currentUserId = CURRENTUSERID;
    timed = new Date();
    data = data;
    
    handleClick(){
        
        let button1 = this.template.querySelector('[data-id="button1"]');
        let button2 = this.template.querySelector('[data-id="button2"]');
        button1.variant = 'brand';
        button2.variant = 'Neutral';
    }

    handleClick2(){
        console.log(this.Search.data)
        let button2 = this.template.querySelector('[data-id="button2"]');
        let button1 = this.template.querySelector('[data-id="button1"]');
        button1.variant = 'Neutral';
        button2.variant = 'brand';
    }
    columns = columns;
}