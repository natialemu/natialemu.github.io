$(function(){

    var sd_source = $("#sd-resource-modal-template").html();
    var sd_resource_modal_template = Handlebars.compile(sd_source);


    /**
     * System Design learning
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

     var graphQLAndKotlin = {
        SystemDesignTitle:"GraphQL and Kotlin",
        SystemDesignDescription: "Create GraphQL schemas in Kotlin",
        SystemDesignLink: "https://medium.com/expedia-group-tech/creating-graphql-schemas-in-kotlin-aaaac0ab0672"
     };


     var valueOfApi = {
        SystemDesignTitle:"The API spectrum",
        SystemDesignDescription: "Measure the value of your API",
        SystemDesignLink: "https://medium.com/expedia-group-tech/knowing-the-value-of-your-api-85d15c5d52ca"
     };


     var kafkaAtLinkedIn = {
        SystemDesignTitle:"Kafka at LinkedIn",
        SystemDesignDescription: "How Linkedin uses kafka for 7 trillion messages per day",
        SystemDesignLink: "https://engineering.linkedin.com/blog/2019/apache-kafka-trillion-messages"
     };

     var pubSubAtNetflix = {
        SystemDesignTitle:"Tackling dataset pub-sub",
        SystemDesignDescription: "How a team at Netflix tackled dataset publish subscribe issues",
        SystemDesignLink: "https://medium.com/netflix-techblog/how-netflix-microservices-tackle-dataset-pub-sub-4a068adcc9a"
     };

     var graphQLAtNetflix = {
        SystemDesignTitle:"GraphQL at Netflix",
        SystemDesignDescription: "Key takeaways from adopting GraphQL at Netflix",
        SystemDesignLink: "https://medium.com/netflix-techblog/our-learnings-from-adopting-graphql-f099de39ae5f"
     };

     var scalingDataStorage = {
        SystemDesignTitle:"Scaling time series data storage",
        SystemDesignDescription: "Practice system design skills",
        SystemDesignLink: "https://medium.com/netflix-techblog/scaling-time-series-data-storage-part-ii-d67939655586"
     };

     var dataLineageAtNetflix = {
        SystemDesignTitle:"Building and scaling data lineage at Netflix",
        SystemDesignDescription: "Imrove data infrastructure reliability",
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


    /**
      * Append PS learn content to page
      */
     var sdPracticeHtml = sd_resource_modal_template(graphQLSearchIndexing);
     $("#systemDesignPracticeContent").append(sdPracticeHtml);

     sdPracticeHtml = sd_resource_modal_template(dynamoDB);
     $("#systemDesignPracticeContent").append(sdPracticeHtml);

     sdPracticeHtml = sd_resource_modal_template(graphQLAndKotlin);
     $("#systemDesignPracticeContent").append(sdPracticeHtml);

     sdPracticeHtml = sd_resource_modal_template(valueOfApi);
     $("#systemDesignPracticeContent").append(sdPracticeHtml);

     sdPracticeHtml = sd_resource_modal_template(kafkaAtLinkedIn);
     $("#systemDesignPracticeContent").append(sdPracticeHtml);

     sdPracticeHtml = sd_resource_modal_template(pubSubAtNetflix);
     $("#systemDesignPracticeContent").append(sdPracticeHtml);

     sdPracticeHtml = sd_resource_modal_template(graphQLAtNetflix);
     $("#systemDesignPracticeContent").append(sdPracticeHtml);

     sdPracticeHtml = sd_resource_modal_template(scalingDataStorage);
     $("#systemDesignPracticeContent").append(sdPracticeHtml);

     sdPracticeHtml = sd_resource_modal_template(dataLineageAtNetflix);
     $("#systemDesignPracticeContent").append(sdPracticeHtml);

     sdPracticeHtml = sd_resource_modal_template(brooklynDataStreaming);
     $("#systemDesignPracticeContent").append(sdPracticeHtml);

     sdPracticeHtml = sd_resource_modal_template(bigTableAtSpotify);
     $("#systemDesignPracticeContent").append(sdPracticeHtml);

     sdPracticeHtml = sd_resource_modal_template(scalingDropbox);
     $("#systemDesignPracticeContent").append(sdPracticeHtml);





     /*      
      * ---------------------
      */



     var sd_learning_source = $("#sd-learning-modal-template").html();
     var sd_learning_modal_template = Handlebars.compile(sd_learning_source);

    /**
     * System Design practice
     */

    var grokkingSystemDesignLearning = {
        SystemDesignLearningTitle:"Grokking the system design interview",
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
      /**
      * Append SD learn content to page
      */

     
     var sdLearnHtml = sd_learning_modal_template(grokkingSystemDesignLearning);
     $("#systemDesignLearningContent").append(sdLearnHtml);

     sdLearnHtml = sd_learning_modal_template(operatingSystems);
     $("#systemDesignLearningContent").append(sdLearnHtml);

     sdLearnHtml = sd_learning_modal_template(distributedSystems);
     $("#systemDesignLearningContent").append(sdLearnHtml);
     
     sdLearnHtml = sd_learning_modal_template(databaseSystems);
     $("#systemDesignLearningContent").append(sdLearnHtml);
       /**
      * Append PS practice content to page
      */


});