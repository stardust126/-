public with sharing class questionsearch {
    public questionsearch() {

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
    public static List<survey__c> findQuestions(){
        List<survey__c> surveylist= [SELECT 
        Id,
        Answer1__c,	Question1__c,
        Answer2__c,	Question2__c,
        Answer3__c,	Question3__c,
        Answer4__c,	Question4__c,
        Answer5__c,	Question5__c,
        Answer6__c,	Question6__c,
        Answer7__c,	Question7__c,
        Answer8__c,	Question8__c,
        Answer9__c,	Question9__c,
        Answer10__c,Question10__c
        FROM survey__c where name = '调查问卷1'];
        return surveylist;
    }
}