function getResults() {
    const url = '../travel_recommendation_api.json';
    var searchBar=document.getElementById("search-box").value.toLowerCase();
    var results=document.getElementById("search-results");
    results.innerHTML="";
    var errorMsg=document.createElement("p");
    errorMsg.setAttribute("class","error-msg");
    errorMsg.innerHTML="Please enter a valid search query";
    fetch(url)
    .then(response => {
        if (!response.ok) {
            results.appendChild(errorMsg);
        throw new Error('Network response was not ok');
        }
        return response.json(); // Parse JSON from the response
    })
    .then(dataSet => {
        var data;
        if(searchBar=='temple' || searchBar=='temples'){
            data=dataSet.temples;
        }   
        else if(searchBar=='beach' || searchBar=='beaches'){
            data=dataSet.beaches;
        }
        else
        {
            if(searchBar=='australia')
            {
                data=dataSet.countries.find(c => c.name === "Australia").cities;
            }
            else if(searchBar=='japan')
            {
                data=dataSet.countries.find(c => c.name === "Japan").cities;
                console.log(data);
            }
            else if(searchBar=='brazil')
            {
                data=dataSet.countries.find(c => c.name === "Brazil").cities;
            }
            else
            {
                console.log("in else");
                results.appendChild(errorMsg);
            }
        }

        // Iterate through the array using forEach
        data.forEach(dataFetch => {
            var card=document.createElement("div");
            card.setAttribute("class","result-card")
            var image=document.createElement("img");
            image.setAttribute("class","loc-image");
            image.setAttribute("src",`${dataFetch.imageUrl}`);
            card.appendChild(image);
            var location=document.createElement("p");
            location.setAttribute("class","loc-name");
            location.innerHTML=`${dataFetch.name}`;
            card.appendChild(location)
            var description=document.createElement("p");
            description.setAttribute("class","loc-desc");
            description.innerHTML=`${dataFetch.description}`;
            card.appendChild(description);
            var visitBtn=document.createElement("button");
            visitBtn.setAttribute("class","visit-btn");
            visitBtn.innerHTML="Visit";
            card.appendChild(visitBtn);
            results.appendChild(card);
        });
    })
    .catch(error => {
        results.innerHtml=`Error fetching or parsing JSON: ${error}`;
    });
}

function clearResults() {
    var searchBar=document.getElementById("search-box");
    var results=document.getElementById("search-results");
    searchBar.value="";
    results.innerHTML="";
}