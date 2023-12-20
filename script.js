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
        } else if (currentInputValue === "bio") {
						const bioIframe = document.createElement("iframe");
						bioIframe.src="https://effendi-ethan-esuhsd.github.io/aboutme.ethan/bioPage.html";
						bioIframe.frameborder="0";
						bioIframe.width="50px";
						bioIframe.height="1000em";
						currentDiv.append(bioIframe);
        } else if (currentInputValue === "bio") {
						const kahkai = document.createElement("img");
						bioIframe.src="https://media.discordapp.net/attachments/1162123155167510571/1168967444430332044/PXL_20231031_152220010.jpg?ex=65944a45&is=6581d545&hm=414ac07790853dcc2bda0cdbb3aeaf521b314eacae05496474f1eb07bd8856f9&=&width=862&height=1150";
						bioIframe.width="50px";
						bioIframe.height="1000em";
						currentDiv.append(kahkai);
        } else if (currentInputValue === "CaydenKahKaiYap") {
						const kahkai = document.createElement("img");
						bioIframe.src="https://media.discordapp.net/attachments/1162123155167510571/1168967444430332044/PXL_20231031_152220010.jpg?ex=65944a45&is=6581d545&hm=414ac07790853dcc2bda0cdbb3aeaf521b314eacae05496474f1eb07bd8856f9&=&width=862&height=1150";
						bioIframe.width="50px";
						bioIframe.height="1000em";
						currentDiv.append(kahkai);
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

//KahKai: https://media.discordapp.net/attachments/1162123155167510571/1168967444430332044/PXL_20231031_152220010.jpg?ex=65944a45&is=6581d545&hm=414ac07790853dcc2bda0cdbb3aeaf521b314eacae05496474f1eb07bd8856f9&=&width=862&height=1150
