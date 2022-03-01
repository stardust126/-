import { LightningElement,track } from 'lwc';


export default class Mypagelwc extends LightningElement {
    timed = new Date().getFullYear()+ '年' + (new Date().getUTCMonth() + 1)+ '月' + (new Date().getUTCDay() - 1) + '日' + ' ' + (new Date().getUTCHours() + 8) + ':' + new Date().getUTCMinutes();
    pageIndex = 1;

    changeToBuleYes(){
        let button1 = this.template.querySelector('[data-id="button1"]');
        let button2 = this.template.querySelector('[data-id="button2"]');
        let button6 = this.template.querySelector('[data-id="button6"]');
        button1.variant = 'brand';
        button2.variant = 'Neutral';
        button6.variant = 'brand'; 
    }

    changeToBuleNo(){
        let button1 = this.template.querySelector('[data-id="button1"]');
        let button2 = this.template.querySelector('[data-id="button2"]');
        let button6 = this.template.querySelector('[data-id="button6"]');
        button1.variant = 'Neutral';
        button2.variant = 'brand';   
        button6.variant = 'brand'; 
    }

    changeToBuleUp(){
        let button3 = this.template.querySelector('[data-id="button3"]');
        let button4 = this.template.querySelector('[data-id="button4"]');
        let button6 = this.template.querySelector('[data-id="button6"]');
        // 点的是哪一类
        // 是否是第一个问题
        // 是否是最后一个问题
        button3.variant = 'brand';
        button4.variant = 'Neutral';  
        button6.variant = 'brand'; 
    }

    changeToBuleDown(){

        this.pageIndex ++;
        
        // 点的是哪一类
        // 是否是第一个问题
        // 是否是最后一个问题
        let button3 = this.template.querySelector('[data-id="button3"]');
        let button4 = this.template.querySelector('[data-id="button4"]');
        let button6 = this.template.querySelector('[data-id="button6"]');
        button3.variant = 'Neutral';
        button4.variant = 'brand';   
        button6.variant = 'brand'; 
    }

    changeBackPageUp(){
        let button5 = this.template.querySelector('[data-id="button5"]');  
        let button6 = this.template.querySelector('[data-id="button6"]');
        button5.variant = 'brand';     
        button6.variant = 'brand';  

        // window.open='https://d5j0000046msoeay-dev-ed.lightning.force.com/lightning/n/S002';
    }

    changeSave(){
        let button1 = this.template.querySelector('[data-id="button1"]');
        let button2 = this.template.querySelector('[data-id="button2"]');
        let button3 = this.template.querySelector('[data-id="button3"]');
        let button4 = this.template.querySelector('[data-id="button4"]');
        let button5 = this.template.querySelector('[data-id="button5"]'); 
        let button6 = this.template.querySelector('[data-id="button6"]');
        // 判断回答是否完整
        button1.variant = 'Neutral';
        button2.variant = 'Neutral';
        button3.variant = 'Neutral';
        button4.variant = 'Neutral';
        button5.variant = 'Neutral';
        button6.variant = 'Neutral'; 
        // 保存成功提示
    }
 // 接收yes/no，插入数据库
}