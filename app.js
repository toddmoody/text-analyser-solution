
function init(){
  //listnen for click on analyze button and capture text
    $(".js-text-form").submit(function(event){
      event.preventDefault();
    
      //obtain user entry and save as a global variable.
      var userText = $(this).find("#user-text").val(); 
    
      //1.--- totalWordCount function---
      totalWordCount = function(a) {
        var totalCount = a.split(" ").length;

        //DOM traversal and manipulation
        $(".js-text-report").removeClass("hidden");
        $(".js-word-count").text(totalCount);
      };
      totalWordCount(userText);
    
      //2.--- Unique word count function---

      uniqueWord = function(b){
        var unique = b.split(" ");
        var counts = [], count = 0, i = 0;
          for(i=0; i<unique.length; i++) {
              if(counts[unique[i]] == undefined) {
                  counts[unique[i]] = 1;
                  count++;
              }
          }
        $(".js-unique-word-count").text(count);  
        }
        uniqueWord(userText);

      //3.---Avg word length in characters function---
      wordLength = function(c) {
        var wordCount = c.split(" ").length;
        var wordArray = c.split(" ");
        var wordAvg = 0;
          for (var i = 0; i < wordCount; i++){
            wordAvg += wordArray[i].length;
          }
        var avgLen = wordAvg / wordCount;
        
        //DOM traversal & manipulation
        $(".js-average-word-length").text(avgLen);
      };
      wordLength(userText);
  });
}
init();


    


