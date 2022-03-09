public with sharing class search001 {
    public search001() {

    }
    @AuraEnabled(cacheable=true)
    Public Static List<User> getName(String ids){
        return [
            SELECT Name  
            FROM User
            WHERE Id = :ids
        ];
    }

    @AuraEnabled(cacheable=true)
    public static List<survey__c> findQuestion(){
        List<survey__c> surveylistQuestion= [SELECT 
        Question1__c,
        Question2__c,
        Question3__c,
        Question4__c,
        Question5__c,
        Question6__c,
        Question7__c,
        Question8__c,
        Question9__c,
        Question10__c
        FROM survey__c where name = '调查问卷1'];
        return surveylistQuestion;
    }

    @AuraEnabled(cacheable=true)
    public static List<survey__c> findAnswer(){
        List<survey__c> surveylistAnswer= [SELECT 
        Answer1__c,
        Answer2__c,
        Answer3__c,
        Answer4__c,
        Answer5__c,
        Answer6__c,
        Answer7__c,
        Answer8__c,
        Answer9__c,
        Answer10__c
        FROM survey__c where name = '调查问卷1'];
        return surveylistAnswer;
    }

}