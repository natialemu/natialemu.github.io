$(function(){

    var sd_source = $("#sd-resource-modal-template").html();
    var sd_resource_modal_template = Handlebars.compile(sd_source);


    /**
     * System Design practice
     */

    var kubernetesIntro = {
        SystemDesignTitle:"Intro to Kubernetes",
        SystemDesignDescription: "A playlist on the introduction to kubernetes",
        SystemDesignLink: "https://www.youtube.com/watch?v=CuWSY_fwV6M&list=PL7bmigfV0EqQw4WnD0wF-SRBYttCFeBbF"
     };

     var kubernetes = {
        SystemDesignTitle:"Kubernetes",
        SystemDesignDescription: "A kubernetes tutorial",
        SystemDesignLink: "https://kubernetes.io/docs/tutorials/"
     };


     var distributedSystemsTim = {
        SystemDesignTitle:"Distributed systems basics",
        SystemDesignDescription: "Distributed systems in one lession by Tim Berglund",
        SystemDesignLink: "https://www.youtube.com/watch?v=Y6Ev8GIlbxc&list=PL-vqXrn5DveI73EwM8tpgjkqGvrnPR7hN&index=3&t=0s"
     };


     var bigTable = {
        SystemDesignTitle:"BigTable",
        SystemDesignDescription: "Lecture on the initial design & architecture of BigTable",
        SystemDesignLink: "https://www.youtube.com/watch?v=2cXBNQClehA&list=PL-vqXrn5DveI73EwM8tpgjkqGvrnPR7hN&index=7&t=0s"
     };
    

   var kafkaIntro = {
      SystemDesignTitle:"What is Kafka",
      SystemDesignDescription: "An introduction to the basics of kafka",
      SystemDesignLink: "https://www.linkedin.com/pulse/what-apache-kafka-michael-skariah/"
   }

   var graphQLTwitter = {
      SystemDesignTitle:"GraphQL at Twitter",
      SystemDesignDescription: "Tom Ashworth - GraphQL at Twitter",
      SystemDesignLink: "https://www.youtube.com/watch?v=Baw05hrOUNM&list=PL-vqXrn5DveI73EwM8tpgjkqGvrnPR7hN&index=12&t=0s"
   }

   var kafkaInProd = {
      SystemDesignTitle:"Kafka in production",
      SystemDesignDescription: "Lessons learned from kafka in production - Tim Berglund",
      SystemDesignLink: "https://www.youtube.com/watch?v=1vLMuWsfMcA&list=PL-vqXrn5DveI73EwM8tpgjkqGvrnPR7hN&index=11&t=0s"
   }

   var cacheingAtNetflix = {
      SystemDesignTitle:"Cacheing at Netflix",
      SystemDesignDescription: "How LinkedIn scales their infrastructure",
      SystemDesignLink: "https://www.youtube.com/watch?v=Rzdxgx3RC0Q&list=PL-vqXrn5DveI73EwM8tpgjkqGvrnPR7hN&index=22&t=5s"
   }
   var databasesAndStreaming = {
      SystemDesignTitle:"Databases & streaming",
      SystemDesignDescription: "Databases and Stream Processing: a Future of Consolidation",
      SystemDesignLink: "https://www.youtube.com/watch?v=wTI6zj9Xbn4"
   }
   var systemDesignAnatomy = {
      SystemDesignTitle:"System design anatomy",
      SystemDesignDescription: "The anatomy of system design",
      SystemDesignLink: "https://www.youtube.com/watch?v=1TIzPL4878Q"
   }


     var sdPracticeHtml = sd_resource_modal_template(distributedSystemsTim);
     $("#systemDesignPracticeContent").append(sdPracticeHtml);


     sdPracticeHtml = sd_resource_modal_template(kafkaIntro);
     $("#systemDesignPracticeContent").append(sdPracticeHtml);

     sdPracticeHtml = sd_resource_modal_template(kubernetesIntro);
     $("#systemDesignPracticeContent").append(sdPracticeHtml);

     sdPracticeHtml = sd_resource_modal_template(cacheingAtNetflix);
     $("#systemDesignPracticeContent").append(sdPracticeHtml);

     sdPracticeHtml = sd_resource_modal_template(systemDesignAnatomy);
     $("#systemDesignPracticeContent").append(sdPracticeHtml);

     sdPracticeHtml = sd_resource_modal_template(kafkaInProd);
     $("#systemDesignPracticeContent").append(sdPracticeHtml);

     sdPracticeHtml = sd_resource_modal_template(kubernetes);
     $("#systemDesignPracticeContent").append(sdPracticeHtml);

     sdPracticeHtml = sd_resource_modal_template(graphQLTwitter);
     $("#systemDesignPracticeContent").append(sdPracticeHtml);

     sdPracticeHtml = sd_resource_modal_template(bigTable);
     $("#systemDesignPracticeContent").append(sdPracticeHtml);

     sdPracticeHtml = sd_resource_modal_template(databasesAndStreaming);
     $("#systemDesignPracticeContent").append(sdPracticeHtml);




     /*      
      * ---------------------
      */



     var sd_learning_source = $("#sd-learning-modal-template").html();
     var sd_learning_modal_template = Handlebars.compile(sd_learning_source);

    /**
     * System Design learning
     */

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

      /**
      * Append SD learn content to page
      */

     
     var sdLearnHtml = sd_learning_modal_template(distributedSystems);
     $("#systemDesignLearningContent").append(sdLearnHtml);

     sdLearnHtml = sd_learning_modal_template(operatingSystems);
     $("#systemDesignLearningContent").append(sdLearnHtml);

     sdLearnHtml = sd_learning_modal_template(databaseSystems);
     $("#systemDesignLearningContent").append(sdLearnHtml);

       /**
        * 
      * Append PS practice content to page
      */


});