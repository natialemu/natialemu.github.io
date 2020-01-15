$(function(){

    var sd_source = $("#sd-resource-modal-template").html();
    var sd_resource_modal_template = Handlebars.compile(sd_source);


    /**
     * System Design practice
     */

    var graphQLSearchIndexing = {
        SystemDesignTitle:"GraphQL search indexing",
        SystemDesignDescription: "GraphQL search indexing",
        SystemDesignLink: "https://medium.com/netflix-techblog/graphql-search-indexing-334c92e0d8d5"
     };

     var dynamoDB = {
        SystemDesignTitle:"DynamoDB",
        SystemDesignDescription: "DynamoDB data modeling",
        SystemDesignLink: "https://medium.com/expedia-group-tech/dynamodb-data-modeling-c4b02729ac08"
     };


     var pubSubAtNetflix = {
        SystemDesignTitle:"Tackling dataset pub-sub",
        SystemDesignDescription: "How a team at Netflix tackled dataset publish subscribe issues",
        SystemDesignLink: "https://medium.com/netflix-techblog/how-netflix-microservices-tackle-dataset-pub-sub-4a068adcc9a"
     };

     var scalingDataStorage = {
        SystemDesignTitle:"Scaling time series data storage",
        SystemDesignDescription: "Practice system design skills",
        SystemDesignLink: "https://medium.com/netflix-techblog/scaling-time-series-data-storage-part-ii-d67939655586"
     };

     var dataLineageAtNetflix = {
        SystemDesignTitle:"Building and scaling data lineage at Netflix",
        SystemDesignDescription: "Building and Scaling Data Lineage at Netflix to Improve Data Infrastructure Reliability, and Efficiency",
        SystemDesignLink: "https://medium.com/netflix-techblog/building-and-scaling-data-lineage-at-netflix-to-improve-data-infrastructure-reliability-and-1a52526a7977"
     };

     var brooklynDataStreaming = {
        SystemDesignTitle:"Brooklin",
        SystemDesignDescription: "Real time data streaming at scale",
        SystemDesignLink: "https://engineering.linkedin.com/blog/2019/brooklin-open-source"
     };
     var bigTableAtSpotify = {
        SystemDesignTitle:"Big table at spotify",
        SystemDesignDescription: "Music reccomendations at scale with Google cloud bigtable",
        SystemDesignLink: "https://www.youtube.com/watch?v=807uHC0Ia10&list=PL-vqXrn5DveI73EwM8tpgjkqGvrnPR7hN&index=8&t=1405s"
     };

     var scalingDropbox = {
        SystemDesignTitle:"Scaling dropbox",
        SystemDesignDescription: "Practice system design skills",
        SystemDesignLink: "https://www.youtube.com/watch?v=PE4gwstWhmc&list=PL-vqXrn5DveI73EwM8tpgjkqGvrnPR7hN&index=2&t=0s"
     };
    
     var serverless = {
        SystemDesignTitle:"What is serverless",
        SystemDesignDescription: "One perspective on serverless architecture",
        SystemDesignLink: "https://medium.com/swlh/what-is-serverless-the-2020-edition-5a2f21581fe5"
     }

     var miGz = {
      SystemDesignTitle:"MiGz for Compression and Decompression",
      SystemDesignDescription: "Using MiGz for compression and decompression",
      SystemDesignLink: "https://engineering.linkedin.com/blog/2019/02/migz-for-compression-and-decompression"
   }

   var kafkaIntro = {
      SystemDesignTitle:"What is Kafka",
      SystemDesignDescription: "An introduction to the basics of kafka",
      SystemDesignLink: "https://www.linkedin.com/pulse/what-apache-kafka-michael-skariah/"
   }

   var auditingFollowFeed = {
      SystemDesignTitle:"Auditing Content Features in FollowFeed",
      SystemDesignDescription: "How Linkedin handles auditing challenges in feed ranking",
      SystemDesignLink: "https://engineering.linkedin.com/blog/2019/followfeed-features-auditing"
   }

   var linkedinInfrastructure = {
      SystemDesignTitle:"Building the next version of our infrastructure",
      SystemDesignDescription: "How LinkedIn scales their infrastructure",
      SystemDesignLink: "https://engineering.linkedin.com/blog/2019/building-next-infra"
   }

   var cacheingAtNetflix = {
      SystemDesignTitle:"Cacheing at Netflix",
      SystemDesignDescription: "How LinkedIn scales their infrastructure",
      SystemDesignLink: "https://www.youtube.com/watch?v=Rzdxgx3RC0Q&list=PL-vqXrn5DveI73EwM8tpgjkqGvrnPR7hN&index=22&t=5s"
   }
   var scalingMicroservicesAtNetflix = {
      SystemDesignTitle:"Microservices at Netflix Scale",
      SystemDesignDescription: "Principles, Tradeoffs & Lessons Learned when implementing microservices at scale at Linkedin",
      SystemDesignLink: "https://www.youtube.com/watch?v=57UK46qfBLY&list=PL-vqXrn5DveI73EwM8tpgjkqGvrnPR7hN&index=20&t=10s"
   }
   var deceptiveDistributedSystemsProblems = {
      SystemDesignTitle:"Deceptive problems in Distributed systems",
      SystemDesignDescription: "Explores challenges and lessons learnt at Linknedin with their system design",
      SystemDesignLink: "https://www.youtube.com/watch?v=Wa13vonp3og&list=PL-vqXrn5DveI73EwM8tpgjkqGvrnPR7hN&index=17&t=5s"
   }


     var sdPracticeHtml = sd_resource_modal_template(dynamoDB);
     $("#systemDesignPracticeContent").append(sdPracticeHtml);


     sdPracticeHtml = sd_resource_modal_template(pubSubAtNetflix);
     $("#systemDesignPracticeContent").append(sdPracticeHtml);

     sdPracticeHtml = sd_resource_modal_template(graphQLSearchIndexing);
     $("#systemDesignPracticeContent").append(sdPracticeHtml);

     sdPracticeHtml = sd_resource_modal_template(scalingDataStorage);
     $("#systemDesignPracticeContent").append(sdPracticeHtml);

     sdPracticeHtml = sd_resource_modal_template(dataLineageAtNetflix);
     $("#systemDesignPracticeContent").append(sdPracticeHtml);

     sdPracticeHtml = sd_resource_modal_template(bigTableAtSpotify);
     $("#systemDesignPracticeContent").append(sdPracticeHtml);

     sdPracticeHtml = sd_resource_modal_template(scalingDropbox);
     $("#systemDesignPracticeContent").append(sdPracticeHtml);

     sdPracticeHtml = sd_resource_modal_template(serverless);
     $("#systemDesignPracticeContent").append(sdPracticeHtml);

     sdPracticeHtml = sd_resource_modal_template(miGz);
     $("#systemDesignPracticeContent").append(sdPracticeHtml);

     sdPracticeHtml = sd_resource_modal_template(linkedinInfrastructure);
     $("#systemDesignPracticeContent").append(sdPracticeHtml);

     sdPracticeHtml = sd_resource_modal_template(auditingFollowFeed);
     $("#systemDesignPracticeContent").append(sdPracticeHtml);

     sdPracticeHtml = sd_resource_modal_template(kafkaIntro);
     $("#systemDesignPracticeContent").append(sdPracticeHtml);

     sdPracticeHtml = sd_resource_modal_template(deceptiveDistributedSystemsProblems);
     $("#systemDesignPracticeContent").append(sdPracticeHtml);

     sdPracticeHtml = sd_resource_modal_template(cacheingAtNetflix);
     $("#systemDesignPracticeContent").append(sdPracticeHtml);

     sdPracticeHtml = sd_resource_modal_template(scalingMicroservicesAtNetflix);
     $("#systemDesignPracticeContent").append(sdPracticeHtml);




     /*      
      * ---------------------
      */



     var sd_learning_source = $("#sd-learning-modal-template").html();
     var sd_learning_modal_template = Handlebars.compile(sd_learning_source);

    /**
     * System Design learning
     */

    var grokkingSystemDesignLearning = {
        SystemDesignLearningTitle:"Grokking the system design",
        SystemDesignLearningDescription: "Learn system design skills",
        SystemDesignLearningLink: "https://www.educative.io/courses/grokking-the-system-design-interview"
     };

     var operatingSystems = {
        SystemDesignLearningTitle:"Operating systems and systems programming",
        SystemDesignLearningDescription: "A lot of the components and behaviors of an OS are analogus to that of a large scale system",
        SystemDesignLearningLink: "https://www.educative.io/courses/grokking-the-system-design-interview"
     };

     var distributedSystems = {
        SystemDesignLearningTitle:"Distributed systems",
        SystemDesignLearningDescription: "Explore several design choices when designing a new system",
        SystemDesignLearningLink: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-033-computer-system-engineering-spring-2018"
     };

     var databaseSystems = {
        SystemDesignLearningTitle:"Database systems",
        SystemDesignLearningDescription: "Learn foundations of database systems",
        SystemDesignLearningLink: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-033-computer-system-engineering-spring-2018"
     };

     var serverLessArchitecture = {
        SystemDesignLearningTitle:"Introduction to serverless computing",
        SystemDesignLearningDescription: "Learn the basics of AWS's serverless architecture",
        SystemDesignLearningLink: "https://www.coursera.org/lecture/aws-fundamentals-building-serverless-applications/introduction-to-serverless-computing-with-aws-lambda-part-1-Zy2lR"
     };
      /**
      * Append SD learn content to page
      */

     
     var sdLearnHtml = sd_learning_modal_template(distributedSystems);
     $("#systemDesignLearningContent").append(sdLearnHtml);

     sdLearnHtml = sd_learning_modal_template(operatingSystems);
     $("#systemDesignLearningContent").append(sdLearnHtml);

     sdLearnHtml = sd_learning_modal_template(databaseSystems);
     $("#systemDesignLearningContent").append(sdLearnHtml);
   
     sdLearnHtml = sd_learning_modal_template(serverLessArchitecture);
     $("#systemDesignLearningContent").append(sdLearnHtml);
       /**
        * 
      * Append PS practice content to page
      */


});