//intialize the topic list
var topics = ['lions','tigers','bears'];

//display buttons for topics
function renderButtons(){
    $("#topicButtons").empty(); // clears the html from #topicButtons so we don't keep duplicating the existing list
    for (var i=0; i<topics.length;i++){
        var myBtn=$("<button>");
        myBtn.addClass("topic");
        myBtn.attr("btnTopic",topics[i]);
        myBtn.text(topics[i]);
        $("#topicButtons").append(myBtn);
    }
}

// adds topic to the topics array and re-renders the button list
$("#addTopic").on("click", function(event) {
    event.preventDefault(); // can't remember exactly why this is needed
    var topic = $("#topicInput").val();
    topics.push(topic);
    renderButtons();
});

// display giphys
function displayGiphys(){
    var $element=$(this);
    var topic=$element.attr('btnTopic');
    console.log("topic of button clicked is:");
    console.log(topic);
}

// display the giphys when the button is clicked
$(document).on("click", ".topic", displayGiphys);

// display initial button list
renderButtons();