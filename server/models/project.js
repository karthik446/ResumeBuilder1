/**
 * Created by karthik on 5/14/2015.
 */

var  mongoose = require('mongoose');

var projectSchema = mongoose.Schema({
    projectName:{type:String, required:'{PATH} is required'},
    role:{type:String, required:'{PATH} is required'},
    description:{type:String, required:'{PATH} is required'},
    clientName:{type:String, required:'{PATH} is required'},
    startDate:{type:Date, required:'{PATH} is required'},
    endDate:{type:Date, required:'{PATH} is required'},
    stacks:[String]
});

var Project = mongoose.model('Project',projectSchema);

function createDefaultProjects(){
    Project.find({}).exec(function(err, collection){
        if(collection.length === 0){
            Project.create(
                {
                    projectName:'Catch 2.0',
                    clientName:'Department of Human Services',
                    role:'Team Lead',
                    startDate: new Date('January 2015'),
                    endDate: new Date(),
                    description:'A new sanction regulations for TANF recipients who fail to participate and meet the requirements of their Initial Responsibility Plans (“IRP”) has been approved by DC. Under the former sanction policy, only the head-of-household would be sanction resulting in a reduced grant level.  CATCH is the system of record for all participation data entered by service providers. There is no set schedule for when participation data is entered in CATCH.',
                    stacks:['Microsoft', 'HP','Sql']
                });

            Project.create(
                {
                    projectName:'FOX',
                    clientName:"FujiFilm Medical Systems",
                    role:'Sr.Net Developer & Scrum Master',
                    startDate: new Date('November 2012'),
                    endDate: new Date('December 2014'),
                    description:' FOX provides enhanced reading workflows for radiologists including PACS, reporting and MIP/MPR capabilities.  It facilitates all kinds of diagnostic images, expanding beyond the current borders in Radiology, Cardiology and Endoscopy. The system provides the functionality to generate the diagnostic reports through its own user interface or through tight integration with a selected solution.',
                    stacks:['Microsoft', 'Javascript', 'Database', 'UX/UI', 'NodeJs']
                });
            Project.create(
                {
                    projectName:'Internal Project',
                    clientName:"Horizon Blue Cross Blue Shield",
                    role:'Sr.Net Developer',
                    startDate: new Date('July 2010'),
                    endDate: new Date('October 2011'),
                    description:'This project implemented a reimbursement policy, within CMS guidelines, for Pre Admission Testing (PAT) and a systemic solution for adjudicating claims falling within defined criteria. The goal of the project was to eliminate the manual procedure of identifying the over payment claims, usually done by the means of an external vendor, and replace it with a home-grown systematic solution.',
                    stacks:['Microsoft','Reporting', 'Database']
                });
            Project.create(
                {
                    projectName:'Sales automation  Project',
                    clientName:"AT&T",
                    role:'.Net Developer',
                    startDate: new Date('September 2009'),
                    endDate: new Date('June 2010'),
                    description:'Sales automation deals with the Inventory & Material management, Order Processing and print schedules. The front-end provides user-friendly interfaces, Invoice report generation and Pending Order processing information. Inventory system covers the processes of raising requirement, calling for quotations, processing quotations, placing purchase order, tracking the purchase order, tracking the payment, receiving the material, stocking the material and issue of the material.',
                    stacks:['Microsoft','Reporting', 'Database']
                });

            Project.create(
                {
                    projectName:'Service Delivery and Automation',
                    clientName:"Ameriprise Financial",
                    role:'.Net Developer',
                    startDate: new Date('October 2008'),
                    endDate: new Date('August 2009'),
                    description:': (Service Delivery and Automation). Ameriprise is formerly known as American Express. Service Delivery is a reengineering project where the data from another part of database is being transformed to the new database. It includes maintaining leverage accounts. It involves designing interfaces for Annuity reminder case handling for commission reversals, pulling out information out of the database without hurting the sensitive information and without creating duplicate cases for the existing accounts in the production environment.',
                    stacks:['Microsoft','Reporting', 'Database']
                });
        }
    })
}

exports.createDefaultProjects = createDefaultProjects;