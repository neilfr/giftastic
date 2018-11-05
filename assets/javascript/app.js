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
    $('#resultsContainer').empty(); //clears the previous giphy list

    var $element=$(this);
    var topic=$element.attr('btnTopic');
    console.log("topic of button clicked is:");
    console.log(topic);

    //build the query, submit the get request, and capture the response
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+topic+"&api_key=Y44NDKEHx6dsp5smn0MUNkIU6Ml60CPk&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
        var resultData=response.data;

        //append rating and image for each of the returned items to the screen
        for (var i=0;i<resultData.length;i++){
            var $thisGiphyDiv=$('<div>'); //container for the elements for this object
            var $p=$('<p>');
            var $img=$('<img>');
            $img.attr('src',resultData[i].images.fixed_height.url);
            $p.html(resultData[i].rating);
            $thisGiphyDiv.append($p);
            $thisGiphyDiv.append($img);
            $('#resultsContainer').append($thisGiphyDiv);
        }
    })
}

// display the giphys when the button is clicked
$(document).on("click", ".topic", displayGiphys);

// display initial button list
renderButtons();