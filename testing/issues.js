
		document.getElementById("discordForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the default form submission
            // Get form data
            var formData = new FormData(this);
            // Send data to Discord webhook
            fetch("https://discord.com/api/webhooks/1211752029387489340/sPlx6CwnU5aWFfmoqFk4Fxa9Aym8ljZiBVdvG-9gl1FOFDhYAVqjgLSxHx5soE-sKI4u", 
               {method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                  "embeds": [{
                    "color": 0xff0000,
                    "title": "New Problem Reported",
                    "author":{
                      "name": "Bug Tracking",
                      "icon_url":"https://enterprise-kc.com/assets/img/EKC_Logo_White.png",
                      "url": "http://enterprise-kc.com",
                    },
                    "fields": [
                      {
                        "name": "Submitted by:",
                        "value": formData.get("email"),
                        "inline": false
                      },
                      {
                        "name": "Issue:",
                        "value": formData.get("area"),
                        "inline": false
                      },
                      {
                        "name": "URL:",
                        "value": formData.get("url"),
                        "inline": false
                      },
                      {
                        "name": "Details:",
                        "value": formData.get("desc"),
                        "inline": false
                      }
                    ],
                  }]
                })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("There was an error uploading the form - please try again. If the issue persists, you can request assistance on the #help channel on the Discord server.");
                }
                alert("Form submitted successfully! Thank you for your submission.");
                //document.getElementById("discordForm").reset(); // Reset the form
            })
            .catch(error => {
                console.error('Error:', error);
                alert("There was an error uploading the form - please try again. If the issue persists, you can request assistance on the #help channel on the Discord server.");
            });
        });




		document.getElementById("screenshotForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the default form submission
            // Get form data
            var imgData = new FormData(this);
            
            var sendSsData = new FormData();
          	sendSsData.append("file", imgData.get("file"));
          	sendSsData.append("content", "*screenshot*");
          	var xhr = new XMLHttpRequest();                
          	xhr.open("Post", "https://discord.com/api/webhooks/1211752029387489340/sPlx6CwnU5aWFfmoqFk4Fxa9Aym8ljZiBVdvG-9gl1FOFDhYAVqjgLSxHx5soE-sKI4u");

          	xhr.send(sendSsData);
						xhr.onload = function() {
 		           if (xhr.status != 200) {alert("There was an error uploading the image - please try again. If the issue persists, you can request assistance on the #help channel on the Discord server.");} 
						   else {alert("Screenshot successfully uploaded! Thank you for your submission."); }
            };
            xhr.onerror = function() {alert("There was an error uploading the image - please try again. If the issue persists, you can request assistance on the #help channel on the Discord server.");};
            });
