import { api, LightningElement,wire } from 'lwc';
import getSurvey from '@salesforce/apex/survey.getSurvey';
import getOwnerName from '@salesforce/apex/survey.getOwnerName';
import times from '@salesforce/apex/survey.times';
import CURRENTUSERID from '@salesforce/user/Id';

const columns = [
    // {label: 'Id', fieldName: 'Id'},
    {label: 'Name', fieldName: 'Name'},
    {label: 'Catogery1', fieldName: 'Catogery1__c'},
    {label: 'Catogery2', fieldName: 'Catogery2__c'},
    {label: 'Catogery3', fieldName: 'Catogery3__c'},
    {label: 'Catogery4', fieldName: 'Catogery4__c'},
    {label: 'Catogery5', fieldName: 'Catogery5__c'},
    {label: 'Catogery6', fieldName: 'Catogery6__c'},
    {label: 'Catogery7', fieldName: 'Catogery7__c'},
    {label: 'Catogery8', fieldName: 'Catogery8__c'},
    // {label: 'Catogery9', fieldName: 'Catogery9__c'},
    {label: 'Catogery10', fieldName: 'Catogery10__c'},
];

export default class Apps extends LightningElement {
    @wire(getSurvey) data;
    @wire(getOwnerName,{ids:'$currentUserId'}) OwnNameData;
    @wire(times) timed;
    columns = columns;
    currentUserId = CURRENTUSERID;

    time(){
        
        console.log(1);
        console.log(timed.data);
    }

}
