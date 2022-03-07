import { LightningElement,wire } from 'lwc';
import getSurvey from '@salesforce/apex/survey.getSurvey';
import getOwnerName from '@salesforce/apex/survey.getOwnerName';
import CURRENTUSERID from '@salesforce/user/Id';
// import getmap from '@salesforce/apex/catogeryController.getmap';
// const columns = [
//     {label: 'Name', fieldName: 'Name'},
//     {label: 'Catogery1', fieldName: 'Catogery1__c'},
//     {label: 'Catogery2', fieldName: 'Catogery2__c'},
//     {label: 'Catogery3', fieldName: 'Catogery3__c'},
//     {label: 'Catogery4', fieldName: 'Catogery4__c'},
//     {label: 'Catogery5', fieldName: 'Catogery5__c'},
//     {label: 'Catogery6', fieldName: 'Catogery6__c'},
//     {label: 'Catogery7', fieldName: 'Catogery7__c'},
//     {label: 'Catogery8', fieldName: 'Catogery8__c'},
//     {label: 'Catogery10', fieldName: 'Catogery10__c'},
// ];

export default class Apps extends LightningElement {
    survey1;
    survey2;
    survey3;
    survey4;
    survey5;
    survey6;
    survey7;
    survey8;
    survey9;
    survey10;
    error;
//    @wire(getmap) map;
   
   
    @wire(getSurvey) 
    wiredServeys({error,data}){
        if(data){
            // console.log(map.Catogery1__c);
           // console.log(data.length);
            // console.log('data--'+data.data);
            for (let i = 0; i < data.length; i++) {
                if(data[i].Catogery1__c !=null){
                    this.survey1 = 'カテゴリー01: ' + data[i].Catogery1__c;
                    let btn1 = this.template.querySelector('[data-id="btn1"]')
                    btn1.style.display ='block'
                }
                if(data[i].Catogery2__c!=null){
                    this.survey2 = 'カテゴリー02: ' + data[i].Catogery2__c;
                    let btn2 = this.template.querySelector('[data-id="btn2"]')
                    btn2.style.display ='block'
                }
                if(data[i].Catogery3__c!=null){
                    this.survey3 = 'カテゴリー03: ' + data[i].Catogery3__c;
                    let btn3 = this.template.querySelector('[data-id="btn3"]')
                    btn3.style.display ='block'
                }
                if(data[i].Catogery4__c!=null){
                    this.survey4 = 'カテゴリー04: ' + data[i].Catogery4__c;
                    let btn4 = this.template.querySelector('[data-id="btn4"]')
                    btn4.style.display ='block'
                }
                if(data[i].Catogery5__c!=null){
                    this.survey5 = 'カテゴリー05: ' + data[i].Catogery5__c;
                    let btn5 = this.template.querySelector('[data-id="btn5"]')
                    btn5.style.display ='block'
                }
                if(data[i].Catogery6__c!=null){
                    this.survey6 = 'カテゴリー06: ' + data[i].Catogery6__c;
                    let btn6 = this.template.querySelector('[data-id="btn6"]')
                    btn6.style.display ='block'
                }
                if(data[i].Catogery7__c!=null){
                    this.survey7 = 'カテゴリー07: ' + data[i].Catogery7__c;
                    let btn7 = this.template.querySelector('[data-id="btn7"]')
                    btn7.style.display ='block'
                }
                if(data[i].Catogery8__c!=null){
                    this.survey8 = 'カテゴリー08: ' + data[i].Catogery8__c;
                    let btn8 = this.template.querySelector('[data-id="btn8"]')
                    btn8.style.display ='block'
                }
                if(data[i].Catogery9__c!=null){
                    this.survey9 = 'カテゴリー09: ' + data[i].Catogery9__c;
                    let btn9 = this.template.querySelector('[data-id="btn9"]')
                    btn9.style.display ='block'
                }
                if(data[i].Catogery10__c!=null){
                    this.survey10 = 'カテゴリー10: ' + data[i].Catogery10__c;
                    let btn10 = this.template.querySelector('[data-id="btn10"]')
                    btn10.style.display ='block'
                }  
                }
                this.error = undefined;    
            
            
        }else if(error){
            this.error = error;
        }
    }
  
    @wire(getOwnerName,{ids:'$currentUserId'}) OwnNameData;
    timed = new Date().toLocaleString();
    // columns = columns;
    currentUserId = CURRENTUSERID;

oncl1(){
   window.location.replace('https://d5j0000046msoeay-dev-ed.lightning.force.com/lightning/n/S003') 
}
oncl2(){
   
    alert(2);
}
oncl3(){
   
    alert(3);
}
oncl4(){
   
    alert(4);
}

oncl5(){
   
    alert(5);
}
oncl6(){
   
    alert(6);
}
oncl7(){
   
    alert(7);
}
oncl8(){
   
    alert(8);
}
oncl9(){
   
    alert(9);
}
oncl10(){
   
    alert(10);
}


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
    // btn1(){
    //     console.log(1)
    //     let btn1 = this.template.querySelector('[data-id="btn1"]')
    //     btn1.style.display ='block'
    // }
}