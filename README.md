# OpportunityDataLCW

Adicione a Classe abaixo na ORG:

Realiza a consulta.

public with sharing class OpportunityData {
    public OpportunityData() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getDataOpportunity(){
        return [Select id, Name, Account.Name, CloseDate, Amount, Stagename from Opportunity where CreatedDate = TODAY ORDER BY CreatedDate desc LIMIT 5];
    }
}
