import { api, LightningElement,wire } from 'lwc';
import getSurvey from '@salesforce/apex/survey.getSurvey';
import getOwnerName from '@salesforce/apex/survey.getOwnerName';
import CURRENTUSERID from '@salesforce/user/Id';

const columns = [
    {label: 'Name', fieldName: 'Name'},
    {label: 'Catogery1', fieldName: 'Catogery1__c'},
    {label: 'Catogery2', fieldName: 'Catogery2__c'},
    {label: 'Catogery3', fieldName: 'Catogery3__c'},
    {label: 'Catogery4', fieldName: 'Catogery4__c'},
    {label: 'Catogery5', fieldName: 'Catogery5__c'},
    {label: 'Catogery6', fieldName: 'Catogery6__c'},
    {label: 'Catogery7', fieldName: 'Catogery7__c'},
    {label: 'Catogery8', fieldName: 'Catogery8__c'},
    {label: 'Catogery10', fieldName: 'Catogery10__c'},
];

export default class Apps extends LightningElement {
    @wire(getSurvey) data;
    @wire(getOwnerName,{ids:'$currentUserId'}) OwnNameData;
    timed = new Date().toLocaleString();
    columns = columns;
    currentUserId = CURRENTUSERID;

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
