$(function(){

    var ad_source = $("#ad-resource-modal-template").html();
    var ad_resource_modal_template = Handlebars.compile(ad_source);


    /**
     * System Design learning
     */

     var grokkingPattern = {
        AppDesignTitle:"Software design patterns",
        AppDesignDescription: "Observe how  some of the most common design patterns are applied",
        AppDesignLink: "https://www.educative.io/courses/software-design-patterns-best-practices"
     };


     var hackerrankOOP = {
        AppDesignTitle:"Hackerrank",
        AppDesignDescription: "Solve common object-oriented programming challenges",
        AppDesignLink: "https://www.hackerrank.com/domains/java/oop/difficulty/all/page/1"
     };

     var leetCodeOOP = {
        AppDesignTitle:"Leetcode",
        AppDesignDescription: "Solve most commonly asked object-oriented design questions",
        AppDesignLink: "https://leetcode.com/discuss/interview-question/object-oriented-design?currentPage=1&orderBy=hot&query="
     };



    


    /**
      * Append PS learn content to page
      */

    
     var adPracticeHtml = ad_resource_modal_template(hackerrankOOP);
     $("#appDesignPracticeContent").append(adPracticeHtml);

     adPracticeHtml = ad_resource_modal_template(leetCodeOOP);
     $("#appDesignPracticeContent").append(adPracticeHtml);
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
        AppDesignLearningDescription: "Learn the basics object-oriented programming",
        AppDesignLearningLink: "https://www.coursera.org/learn/object-oriented-java"
     };

     var softwareStudio = {
        AppDesignLearningTitle:"Software studio",
        AppDesignLearningDescription: "Learn how to design and implement medium scale software systems",
        AppDesignLearningLink: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-170-software-studio-spring-2013/"
     };

     var springBoot = {
        AppDesignLearningTitle:"Spring framework",
        AppDesignLearningDescription: "Learn how to use a framework that facilitates in design and implementation of software systems",
        AppDesignLearningLink: "https://docs.spring.io/spring/docs/3.0.x/spring-framework-reference/html/overview.html"
     };
     var springBootAndCloud = {
        AppDesignLearningTitle:"Spring Boot and Spring Cloud",
        AppDesignLearningDescription: "Learn how to build scalable java microservices using spring boot & spring cloud",
        AppDesignLearningLink: "https://www.coursera.org/learn/google-cloud-java-spring"
     };

     var serviceOrientedArchitecture = {
        AppDesignLearningTitle:"Introduction to service-oriented architecture",
        AppDesignLearningDescription: "Explore two forms of service oriented architecture: Rest & WS",
        AppDesignLearningLink: "https://www.coursera.org/lecture/service-oriented-architecture/4-1-1-introduction-to-service-oriented-architecture-kEZue"
     };

     var domainDrivenDesign = {
        AppDesignLearningTitle:"Domain-Driven Design",
        AppDesignLearningDescription: "Learn the main concepts of domain-driven design",
        AppDesignLearningLink: "https://www.cs.colorado.edu/~kena/classes/6448/s05/lectures/lecture23.pdf"
     };
      /**
      * Append SD learn content to page
      */

     
     var adLearnHtml = ad_learning_modal_template(objectOrientedProgramming);
     $("#appDesignLearningContent").append(adLearnHtml);

     adLearnHtml = ad_learning_modal_template(softwareStudio);
     $("#appDesignLearningContent").append(adLearnHtml);

     adLearnHtml = ad_learning_modal_template(springBoot);
     $("#appDesignLearningContent").append(adLearnHtml);

     adLearnHtml = ad_learning_modal_template(springBootAndCloud);
     $("#appDesignLearningContent").append(adLearnHtml);

     adLearnHtml = ad_learning_modal_template(serviceOrientedArchitecture);
     $("#appDesignLearningContent").append(adLearnHtml);

     adLearnHtml = ad_learning_modal_template(domainDrivenDesign);
     $("#appDesignLearningContent").append(adLearnHtml);


       /**
      * Append PS practice content to page
      */


});