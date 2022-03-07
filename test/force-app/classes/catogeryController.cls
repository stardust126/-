
public with sharing class catogeryController {
    class question{
        Integer index;
        String question;
        String catogery;
        String answer;
    }
    public static Map<String,List<question>> getmap(Survey__c survey){
Map<String,List<question>> catogeryMap = new Map<String,List<question>>();
        List<question> questionList = new List<question>();
        if(survey.Question1__c != null){
            question q01 = new question();
            q01.index = 1;
            q01.question = survey.Question1__c;
            q01.catogery = survey.Catogery1__c;
            q01.answer = survey.Answer1__c;
            questionList.add(q01);
        }
        if(survey.Question2__c != null){
            question q02 = new question();
            q02.index = 2;
            q02.question = survey.Question2__c;
            q02.catogery = survey.Catogery2__c;
            q02.answer = survey.Answer2__c;
            questionList.add(q02);
        }
        if(survey.Question3__c != null){
           
            question q03 = new question();
            q03.index = 3;
            q03.question = survey.Question3__c;
            q03.catogery = survey.Catogery3__c;
            q03.answer = survey.Answer3__c;
            questionList.add(q03);
        }
        if(survey.Question4__c != null){
           
            question q04 = new question();
            q04.index = 4;
            q04.question = survey.Question4__c;
            q04.catogery = survey.Catogery4__c;
            q04.answer = survey.Answer4__c;
            questionList.add(q04);
        }
        if(survey.Question5__c != null){
            
            question q05 = new question();
            q05.index = 5;
            q05.question = survey.Question5__c;
            q05.catogery = survey.Catogery5__c;
            q05.answer = survey.Answer5__c;
            questionList.add(q05);
        }
        if(survey.Question6__c != null){
            
            question q06 = new question();
            q06.index = 6;
            q06.question = survey.Question6__c;
            q06.catogery = survey.Catogery6__c;
            q06.answer = survey.Answer6__c;
            questionList.add(q06);
        }
        if(survey.Question7__c != null){
            
            question q07 = new question();
            q07.index = 7;
            q07.question = survey.Question7__c;
            q07.catogery = survey.Catogery7__c;
            q07.answer = survey.Answer7__c;
            questionList.add(q07);
        }
        if(survey.Question8__c != null){
            
            question q08 = new question();
            q08.index = 8;
            q08.question = survey.Question8__c;
            q08.catogery = survey.Catogery8__c;
            q08.answer = survey.Answer8__c;
            questionList.add(q08);
        }
        if(survey.Question9__c != null){
            
            question q09 = new question();
            q09.index = 9;
            q09.question = survey.Question9__c;
            q09.catogery = survey.Catogery9__c;
            q09.answer = survey.Answer9__c;
            questionList.add(q09);
        }
        if(survey.Question10__c != null){
            
            question q10 = new question();
            q10.index = 10;
            q10.question = survey.Question10__c;
            q10.catogery = survey.Catogery10__c;
            q10.answer = survey.Answer10__c;
            questionList.add(q10);
        }
        for (question q : questionList) {
            if(!catogeryMap.keySet().contains(q.catogery)){
                List<question> questionNewList = new List<question>();
                questionNewList.add(q);
                catogeryMap.put(q.catogery,questionNewList);
            }else {
                List<question> questionOldList = catogeryMap.get(q.catogery);
                questionOldList.add(q);
                catogeryMap.put(q.catogery,questionOldList);
            }
        }
                    
        return catogeryMap;
}}
