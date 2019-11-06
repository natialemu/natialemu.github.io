$(function(){

    var sd_source = $("#sd-resource-modal-template").html();
    var sd_resource_modal_template = Handlebars.compile(sd_source);


    /**
     * System Design learning
     */
    var grokkingSystemDesignLearn = {
        SystemDesignTitle:"Grokking the system design interview",
        SystemDesignDescription: "Practice system design skills",
        SystemDesignLink: "https://www.educative.io/courses/grokking-the-system-design-interview"
     };


    /**
      * Append PS learn content to page
      */
     var sdPracticeHtml = sd_resource_modal_template(grokkingSystemDesignLearn);
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