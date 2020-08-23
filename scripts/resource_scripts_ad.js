$(function(){

    var ad_source = $("#ad-resource-modal-template").html();
    var ad_resource_modal_template = Handlebars.compile(ad_source);


    /**
     * System Design learning
     */

     var grokkingPattern = {
        AppDesignTitle:"Software design patterns",
        AppDesignDescription: "Applications of common design patterns",
        AppDesignLink: "https://www.educative.io/courses/software-design-patterns-best-practices"
     };


     var hackerrankOOP = {
        AppDesignTitle:"Hackerrank OOP",
        AppDesignDescription: "Common object-oriented programming challenges",
        AppDesignLink: "https://www.hackerrank.com/domains/java/oop/difficulty/all/page/1"
     };

     var leetCodeOOP = {
        AppDesignTitle:"Leetcode OOP",
        AppDesignDescription: "Object-oriented design technical interview questions",
        AppDesignLink: "https://leetcode.com/discuss/interview-question/object-oriented-design?currentPage=1&orderBy=hot&query="
     };



    


    /**
      * Append PS learn content to page
      */

    
     var adPracticeHtml = ad_resource_modal_template(hackerrankOOP);
     $("#appDesignPracticeContent").append(adPracticeHtml);

     adPracticeHtml = ad_resource_modal_template(leetCodeOOP);
     $("#appDesignPracticeContent").append(adPracticeHtml);

     adPracticeHtml = ad_resource_modal_template(grokkingPattern);
     $("#appDesignPracticeContent").append(grokkingPattern);
     /*      
      * ---------------------
      */



     var ad_learning_source = $("#ad-learning-modal-template").html();
     var ad_learning_modal_template = Handlebars.compile(ad_learning_source);

    /**
     * System Design practice
     */

    var objectOrientedProgramming = {
        AppDesignLearningTitle:"Introduction to object-oriented programming",
        AppDesignLearningDescription: "Basics object-oriented programming",
        AppDesignLearningLink: "https://www.coursera.org/learn/object-oriented-java"
     };

     var softwareStudio = {
        AppDesignLearningTitle:"Software studio",
        AppDesignLearningDescription: "Course on the design and implementation of medium scale software systems",
        AppDesignLearningLink: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-170-software-studio-spring-2013/"
     };

     var springBoot = {
        AppDesignLearningTitle:"Spring framework",
        AppDesignLearningDescription: "A framework that facilitates the implementation of enterprise software systems",
        AppDesignLearningLink: "https://docs.spring.io/spring/docs/3.0.x/spring-framework-reference/html/overview.html"
     };

     var serviceOrientedArchitecture = {
        AppDesignLearningTitle:"Introduction to service-oriented architecture",
        AppDesignLearningDescription: "Two service oriented architecture: Rest & WS",
        AppDesignLearningLink: "https://www.coursera.org/lecture/service-oriented-architecture/4-1-1-introduction-to-service-oriented-architecture-kEZue"
     };

      /**
      * Append SD learn content to page
      */

     
     var adLearnHtml = ad_learning_modal_template(objectOrientedProgramming);
     $("#appDesignLearningContent").append(adLearnHtml);

     adLearnHtml = ad_learning_modal_template(softwareStudio);
     $("#appDesignLearningContent").append(adLearnHtml);


     adLearnHtml = ad_learning_modal_template(springBootAndCloud);
     $("#appDesignLearningContent").append(adLearnHtml);

     adLearnHtml = ad_learning_modal_template(serviceOrientedArchitecture);
     $("#appDesignLearningContent").append(adLearnHtml);


       /**
      * Append PS practice content to page
      */


});