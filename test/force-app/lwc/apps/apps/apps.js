import { LightningElement,wire } from 'lwc';
import getSurvey from '@salesforce/apex/survey.getSurvey';

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

// function realSysTime(clock) {
//     var now = new Date();
//     var year = now.getFullYear(); //获取年份
//     var month = now.getMonth(); //获取月份
//     var date = now.getDate(); //获取日期
//     var day = now.getDay(); //获取星期
//     var hour = now.getHours(); //获取小时
//     var minute = now.getMinutes(); //获取分钟
//     var seconds = now.getSeconds(); //获取秒
//     month = month + 1;
//     var arr_week = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
//     var week = arr_week[day];
//     var time = year + "年" + month + "月" + date + "日 " + week + " " + hour + ":" + minute + ":" + seconds;
//     clock.innerHTML = "当前时间：" + time;
//   }
//   function show() {
//     window.setInterval("realSysTime(clock)", 1000);
//   }

export default class Apps extends LightningElement {
    @wire(getSurvey) data;
    columns = columns;
    now = Date.now();
    // url ='';
}