// window.addEventListener('beforeunload', function (e) {
//     // Cancel the event
//     e.preventDefault();
//     // Chrome requires returnValue to be set
//     e.returnValue = 'Are you sure you want to leave?';
// });


function addTask(){

    
    const id = "ele" + getUniqueId()
    const task = document.getElementById("taskname").value
    const description = document.getElementById("description").value
    if(task=="" || description=="")
        {
            alert(`Please provide required details to start`)
            return
        }

    const ele1 = document.createElement("p")
    ele1.textContent = `task : ${task}`
    const ele2 = document.createElement("p")
    ele2.textContent = `name : ${description}`
    const priority = document.createElement("p")
    priority.textContent = `class : ${getValue()}`
    const ele3 = document.createElement("button")
    ele3.id = "my-delete"
    ele3.textContent = "Delete"

    const check = document.createElement("input")
    check.type = "checkbox"
    check.id = "click-me"

    const justone = document.createElement("p")
    const justtwo = document.createElement("p1")
    justtwo.id = "my-options"

    justone.append(ele1)
    justone.append(ele2)
    justone.append(priority)

    justtwo.append(ele3)
    justtwo.append(check)
    
    const ele4 = document.createElement("div")
    ele4.id = id
    ele4.className = "item"
    ele4.style.backgroundColor = getColor()
    // this line helps us to put priortuiy to our tasks
    ele4.dataset.priority = getValue()
    ele4.append(justone)
    ele4.append(justtwo)
    //ele4.append(ele3)
    const temp1 = ele4.style.backgroundColor
    const tasklist = document.querySelector(".my-tasks")
    tasklist.prepend(ele4)

    ele3.addEventListener('click', function() {

        console.log(id)
        let elementToDelete = document.getElementById(id)
        if(elementToDelete)
            {
                console.log(tasklist==elementToDelete.parentNode)
                console.log(elementToDelete.parentNode)
                elementToDelete.parentNode.removeChild(elementToDelete)
            }
    })


    check.addEventListener('change', function() {
        
        
        if(this.checked)
            {
                ele4.style.backgroundColor = "green"
                
                console.log(temp1)
            }
        else{
            ele4.style.backgroundColor = temp1
            
            console.log(temp1)
        }

        
        
    })

    document.getElementById("taskname").value = ""
    document.getElementById("description").value = ""
}




function getUniqueId()

{
    return Math.floor(Math.random()*10000)
}


function getValue()
{
    if(document.getElementById("choice").value==3)
        {
            return 'Low'
        }
    else if(document.getElementById("choice").value==2)
        {
            return 'Medium'
        }
    else{
        return 'High'
    }
}

function getColor()
{
    if(document.getElementById("choice").value==3)
        {
            return "#CBB114"
        }
    else if(document.getElementById("choice").value==2)
        {
            return "#CF7014"
        }
    else{
        return "#CF4214"
    }
}



function sortTasksHL()
{


    const taskList = document.querySelector(".my-tasks")
    const tasks = Array.from(taskList.getElementsByClassName("item"))
    console.log(tasks)
    const priorityOrder = { 'High': 1, 'Medium': 2, 'Low': 3 };

            // Sort the items based on their data-priority attribute
            tasks.sort((a, b) => {
                return priorityOrder[a.dataset.priority] - priorityOrder[b.dataset.priority];
            })
    
    tasks.forEach(task => {
        taskList.appendChild(task)
    })


}

function sortTasksLH()
{


    const taskList = document.querySelector(".my-tasks")
    const tasks = Array.from(taskList.getElementsByClassName("item"))
    console.log(tasks)
    const priorityOrder = { 'High': 1, 'Medium': 2, 'Low': 3 };

            // Sort the items based on their data-priority attribute
            tasks.sort((a, b) => {
                return priorityOrder[b.dataset.priority] - priorityOrder[a.dataset.priority];
            })
    
    tasks.forEach(task => {
        taskList.appendChild(task)
    })

}

function shuffle()
{


    const taskList = document.querySelector(".my-tasks")
    const tasks = Array.from(taskList.getElementsByClassName("item"))

    for(let index in tasks)
        {
            new_idx = Math.floor(Math.random()*tasks.length)
            let temp = tasks[index]
            tasks[index] = tasks[new_idx]
            tasks[new_idx] = temp
        }
    
    tasks.forEach(task => {
        taskList.appendChild(task)
    })

}