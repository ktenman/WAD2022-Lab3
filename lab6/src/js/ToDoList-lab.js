function reloadButtons() {
    let messages = document.getElementsByTagName("LI")
    for (const message of messages) {
        const htmlButtonElement = document.createElement("button")
        htmlButtonElement.textContent = "Delete"
        htmlButtonElement.className = "close"
        message.appendChild(htmlButtonElement)
    }

    let deleteButtons = document.getElementsByClassName("close")

    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].onclick = function () {
            let parentElement = this.parentElement;
            parentElement.style.display = "none"
        }
    }

    let list = document.querySelector("UL");

    list.addEventListener('click', function (event) {
            if (event.target.tagName === 'LI') {
                event.target.classList.toggle('checked')
            }
        }
    )
}

reloadButtons()

function newTask() {
    let input = document.getElementById("myInput")
    let value = input.value;
    let liElement = document.createElement("LI");
    if (value === '') {
        alert("You must enter some value here")
    } else {
        document.getElementById("myUL").appendChild(liElement)
    }
    liElement.appendChild(document.createTextNode(value))
    input.value = ''
    reloadButtons()
}