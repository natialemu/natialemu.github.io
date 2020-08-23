$(function(){

    var source = $("#resource-modal-template").html();
    var resource_modal_template = Handlebars.compile(source);


    /**
     * Problem solving practice
     */
    var leetCode = {
        ProblemSolvingTitle:"Leet code",
        ProblemSolvingDescription: "Data structures and algorithm problems mostly geared towards technical interviews",
        ProblemSolvingLink: "https://leetcode.com/"
     };


     var codeJam = {
        ProblemSolvingTitle:"Google code jam",
        ProblemSolvingDescription: "Google's annual code jam competition archives",
        ProblemSolvingLink: "https://codingcompetitions.withgoogle.com/codejam"
     };


     var kattis = {
        ProblemSolvingTitle:"Kattis",
        ProblemSolvingDescription: "Kattis programming problem archives",
        ProblemSolvingLink: "https://open.kattis.com/"
     };
      /**
      * Append algorithms practice content to page
      */
     var html = resource_modal_template(codeJam);
     $("#problemSolvingPracticeContent").append(html);

     html = resource_modal_template(kattis);
     $("#problemSolvingPracticeContent").append(html);

     html = resource_modal_template(leetCode);
     $("#problemSolvingPracticeContent").append(html);


     /**
      * ---------------------
      */

     var learning_source = $("#learning-modal-template").html();
     var learning_modal_template = Handlebars.compile(learning_source);


    /**
     * Problem solving learning
     */
    var mitIntroToAlgorithms = {
        ProblemSolvingLearningTitle:"Introduction to algorithms",
        ProblemSolvingLearningDescription: "Basics of problem solving, data structures and algorithms",
        ProblemSolvingLearningLink: "https://leetcode.com/"
     };

     var dataStructures = {
        ProblemSolvingLearningTitle:"Data structures",
        ProblemSolvingLearningDescription: "Analysis of the efficiency of a variety of techniques for structuring data",
        ProblemSolvingLearningLink: "https://inst.eecs.berkeley.edu/~cs61b/fa18/"
     };


     var discreteMath = {
        ProblemSolvingLearningTitle:"Discrete mathematics",
        ProblemSolvingLearningDescription: "Logical reasoning with focus on proofs & definitions",
        ProblemSolvingLearningLink: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-fall-2010/"
     }

     var designAndAnalysisOfAlgorithms = {
        ProblemSolvingLearningTitle:"Design and analysis of algorithms",
        ProblemSolvingLearningDescription: "Design and analysis of algorithms",
        ProblemSolvingLearningLink: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/"
     }

     var advancedAlgorithms = {
        ProblemSolvingLearningTitle:"Advanced algorithms",
        ProblemSolvingLearningDescription: "Advanced topics in algorithms design",
        ProblemSolvingLearningLink: "http://www.infocobuild.com/education/audio-video-courses/computer-science/cs224-fall2014-harvard.html"
     }

     var modernApplicationsOfAlgorithms = {
        ProblemSolvingLearningTitle:"Modern applications of algorithms",
        ProblemSolvingLearningDescription: "Applications of algorithms that are at the core of most modern tools",
        ProblemSolvingLearningLink: "https://web.stanford.edu/class/cs168/"
     }

     var learnHtml = learning_modal_template(discreteMath);
     $("#problemSolvingLearningContent").append(learnHtml);

     learnHtml = learning_modal_template(dataStructures);
     $("#problemSolvingLearningContent").append(learnHtml);

     learnHtml = learning_modal_template(mitIntroToAlgorithms);
     $("#problemSolvingLearningContent").append(learnHtml);

     learnHtml = learning_modal_template(designAndAnalysisOfAlgorithms);
     $("#problemSolvingLearningContent").append(learnHtml);

     learnHtml = learning_modal_template(advancedAlgorithms);
     $("#problemSolvingLearningContent").append(learnHtml);

     learnHtml = learning_modal_template(modernApplicationsOfAlgorithms);
     $("#problemSolvingLearningContent").append(learnHtml);






      /**
      * ---------------------
      */





});