public with sharing class survey {

    @AuraEnabled(cacheable=true)
    public static List<Survey__C> getSurvey() {
        return [
            SELECT Id, 	No__c, Name, Catogery1__c, Catogery2__c,Catogery3__c,Catogery4__c,Catogery5__c,Catogery6__c
            ,Catogery7__c,Catogery8__c,Catogery9__c,Catogery10__c
            FROM Survey__C 
            WHERE No__c = '1'
        ];
       
    }

    @AuraEnabled(cacheable=true)
    Public Static List<User> getOwnerName(String ids){
        // System.debug('name');
        return [
            SELECT Name  
            FROM User
            WHERE Id = :ids
        ];
    }

    // @AuraEnabled(cacheable=true)
    // public Static Datetime times(){
    //     system.debug(system.now().addHours(8));
    //     Datetime timed = system.now().addHours(8);
    //     return timed;
    // }
}