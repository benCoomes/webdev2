var count = 0;
    var colors = ["#6FF229", "#29F27C", "#29EEF2", "#29ABF2",
                  "#295EF2", "#6829F2", "#D429F2", "#F2294E",
                  "#F35229", "#F29429","#D0F229"];
    $(".content-row").each(function(index){
      var id = "resume-cr-" + count;
      $(this).css({
        "border-left-color": colors[count%colors.length]
      });

      count += 1;
    });