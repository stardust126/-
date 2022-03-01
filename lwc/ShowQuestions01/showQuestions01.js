import { LightningElement, track, wire } from 'lwc';
import findQuestions from '@salesforce/apex/questionController.findQuestions';

export default class ShowQuestions01 extends LightningElement {
    @wire(findQuestions) questions;
}