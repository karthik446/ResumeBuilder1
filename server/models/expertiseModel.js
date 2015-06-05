var  mongoose = require('mongoose');

var expertiseSchema = mongoose.Schema({
    points: [String],
    tags:[String]
});

var expertiseModel = mongoose.model('Expertise',expertiseSchema);

function populateExpertise(){
    expertiseModel.find({}).exec(function(err, collection){
        if(collection.length === 0){
            expertiseModel.create(
                {
                    points:
                        [
                            'Technical expertise in Microsoft Technologies, such as .NET Framework (3.5/4.0/4.5), ASP.NET, ASP.NET MVC (4.0/5.0), Web Services, Web API 2, WCF, LINQ, IIS, SOAP, XML, XSL, XSLT, HTML, JavaScript, Typescript, Visual Studio.Net 2013/2012/2010, AJAX and ADO.Net',
                            'Proficiency in Software Development Life Cycle (SDLC) and AGILE methodologies of development process such as requirement analysis & definition, prototyping, proof of concept, designing, coding, testing and implementation.',
                            'Expertise in JavaScript libraries and frameworks such as Kendo, Knockout JS, DATA JS, React JS, Angular JS , Bootstrap 3.0, Node JS, LESS, HTML5.',
                            'Hands on experience working With the MEAN stack creating single page applications.',
                            'Working experience of GIT as a source control, pushing code to repositories and deploying code to Heroku.',
                            'Hands on experience in plugging in various Dependency Injection frameworks/ IOC containers like Ninject and Unity. ',
                            'Hands on experience in design using Object Oriented Programming Principles like Inheritance, Polymorphism and Design patterns like Factory, Singleton and Repository.',
                            'Proficiency in working with various third party server side and client side UI components like Telerik, Kendo UI, Sync fusion controls.',
                            'Created Entity classes, relationships between entity classes using Entity Framework 6.0/4.x to manage relational data as objects and used LINQ to Entities to massage the data.',
                            'Experience in development and implementation of Windows Communication Foundation (WCF), and also Responsible for developing WCF based Service, Data, Fault and Message Contracts',
                            'Expertise in ASP.NET MVC 5.0/4.0/3.0 in implementing Model, View And Controllers with State Management, Security, Action methods, Attribute Routing, Action Filters',
                            'Experience in using ASP.NET AJAX framework for quickly creating efficient and interactive Web applications that work across all popular browsers.',
                            'Extensive working experience in working with Agile (SCRUM), Waterfall and TDD',
                            'Working experience of MEAN stack development, testing and deployment to heroku',
                            'Experience in designing Databases in SQL Server 2012/2008/2005 & Oracle 11g which includes writing Stored Procs, User Defined Functions and Triggers using T-SQL',
                            'Worked extensively with ADO.NET objects such as Data Adapter, Dataset, and Data Reader to interact with databases like SQL Server 2008/2005/2000 & Oracle 11g/10g/9i/8i. ',
                            'Experience in working with NoSql Databases like Mongo DB, Raven DB.',
                            'Extensive working experience in working with Agile (SCRUM), Waterfall and TDD.',
                            'Excellent Written, Analytical Skills and Verbal Communication skills with a customer service oriented attitude.',

                        ]
                });

        }
    })
}

exports.populateExpertise = populateExpertise;
