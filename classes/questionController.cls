public with sharing class questionController {
    public questionController() {

    }
    @AuraEnabled(cacheable=true)
    public static List<survey__c> findQuestions(){
        //String key = '%' + searchKey + '%';
        return [SELECT Answer1__c,Catogery1__c,	Question1__c,
        Answer2__c,Catogery2__c,	Question2__c,
        Answer3__c,Catogery3__c,	Question3__c,
        Answer4__c,Catogery4__c,	Question4__c,
        Answer5__c,Catogery5__c,	Question5__c,
        Answer6__c,Catogery6__c,	Question6__c,
        Answer7__c,Catogery7__c,	Question7__c,
        Answer8__c,Catogery8__c,	Question8__c,
        Answer9__c,Catogery9__c,	Question9__c,
        Answer10__c,Catogery10__c,	Question10__c
                    FROM survey__c
                    
                    ];
    }
}
