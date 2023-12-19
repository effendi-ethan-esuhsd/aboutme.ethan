window.addEventListener("keypress", function(e){
    if(e.key == "Enter"){
        //Produce Requested Content/Action
        const currentDiv = document.getElementById("currentDiv")
        const currentInput = document.getElementById("currentInput")
        const currentInputValue = String(currentInput.value)
        console.log(currentInputValue)
        if (currentInputValue === "about age") {
            const newh1 = document.createElement("h1")
            const newText = document.createTextNode("14")
            newh1.append(newText)
						const newBr = document.createElement("br")
						currentDiv.append(newBr)
            currentDiv.append(newh1)
        } else if (currentInputValue === "about name") {
						const newh1 = document.createElement("h1")
						const newText = document.createTextNode("Ethan Effendi")
						newh1.append(newText)
						const newBr = document.createElement("br")
						currentDiv.append(newBr)
						currentDiv.append(newh1)
        } else if (currentInputValue === "about residence") {
						const newh1 = document.createElement("h1")
						const newText = document.createTextNode("San Jose, California")
						newh1.append(newText)
						const newBr = document.createElement("br")
						currentDiv.append(newBr)
						currentDiv.append(newh1)
        } else if (currentInputValue === "about school") {
						const newh1 = document.createElement("h1")
						const newText = document.createTextNode("Piedmont Hills High School @ ESUHSD")
						newh1.append(newText)
						const newBr = document.createElement("br")
						currentDiv.append(newBr)
						currentDiv.append(newh1)
        } else if (currentInputValue === "about email") {
						const newh1 = document.createElement("h1")
						const newText = document.createTextNode("effendiethan8170@students.esuhsd.org")
						newh1.append(newText)
						const newBr = document.createElement("br")
						currentDiv.append(newBr)
						currentDiv.append(newh1)
        }  else if (currentInputValue === "about birth") {
						const newh1 = document.createElement("h1")
						const newText = document.createTextNode("January")
						newh1.append(newText)
						const newBr = document.createElement("br")
						currentDiv.append(newBr)
						currentDiv.append(newh1)
        } else if (currentInputValue === "bio") {
            const newIframe = document.createElement("iframe")
            newIframe.src="bio.html"
            currentDiv.append(newIframe)
        } else if (currentInputValue === "entertainment") {
						const myIframe = document.createElement("iframe");
						myIframe.src="https://www.youtube.com/embed/videoseries?si=NdG2sy1BZjlxcjmS&amp;list=PLjtszbABhJZxkenMEFjF7t2Mke1yx2TsH";
						myIframe.frameborder="0";
						myIframe.width="50px";
						myIframe.height="1000em";
						currentDiv.append(myIframe);
        }


        //Create New Input
        const newDiv = document.createElement("div")
        const newInput = document.createElement("input")
				const newh3 = document.createElement("h3")
				const arrowText = document.createTextNode(">>>")
				newDiv.classList.add("row")
				newh3.classList.add("col-sm-3")
				newInput.classList.add("col-sm-3")
				newh3.append(arrowText)
				newDiv.append(newh3)
        newDiv.append(newInput)
        document.body.insertBefore(newDiv, currentDiv)
        //Change IDs
        currentDiv.id = "done"
        newDiv.id = "currentDiv"
        currentInput.id = "done"
        newInput.id = "currentInput"

    }
})
