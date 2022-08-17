import { api, LightningElement, track, wire } from 'lwc';
import loadDataOpportunity from '@salesforce/apex/OpportunityData.getDataOpportunity';

export default class ListDataOpportunity extends LightningElement {
    @api recordId;
    @track listOpportunies;

    @wire(loadDataOpportunity, {})wiredOpportunity({ error, data }){
        if(error){
            console.log(error);
        }else if(data){
            this.listOpportunies = data;

            console.log(data);
            console.log(this.listOpportunies);
        }
    };
}