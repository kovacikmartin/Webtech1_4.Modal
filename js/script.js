function valueCheckX()
{
    let insertedValue = document.getElementById("valueX").value;
    let msg = document.getElementById("valueXMsg");

    if(insertedValue == "")
    {
        msg.textContent = "Invalid input";
        return false;
    }
    

    if(insertedValue % 1 != 0)
    {
        msg.textContent = "Only celé numbers";
        return false;
    }
    else if(insertedValue < 1 || insertedValue > 9)
    {
        msg.textContent = "Only numbers from <1;9>";
        return false;
    }
    else
    {
        msg.textContent = "";
        return true;
    }
}

function valueCheckY()
{
    let insertedValue = document.getElementById("valueY").value;
    let msg = document.getElementById("valueYMsg");

    if(insertedValue == "")
    {
        msg.textContent = "Invalid input";
        return false;
    }
    

    if(insertedValue % 1 != 0)
    {
        msg.textContent = "Only celé numbers";
        return false;
    }
    else if(insertedValue < 1 || insertedValue > 9)
    {
        msg.textContent = "Only numbers from <1;9>";
        return false;
    }
    else
    {
        msg.textContent = "";
        return true;
    }
}

function showTable()
{
    var modal = document.getElementById("tableModal");
    var modalContent = document.getElementById("modalContent");
    modal.style.display = "block";

    var valueX = document.getElementById("valueX").value;
    var valueY = document.getElementById("valueY").value;

    var table = document.createElement("table");
    table.setAttribute("id", "table");
    var tBody = document.createElement("tbody");
    
    for(y = 0; y <= valueY; y++)
    {
        var tr = document.createElement("tr");

        for(x = 0; x <= valueX; x++)
        {
            if(y==0 && x == 0)
            {
                let th = document.createElement("th");
                th.colSpan = 1;
                th.appendChild(document.createTextNode(""))
                tr.appendChild(th);
            }
            else if(y==0 && x != 0)
            {
                let th = document.createElement("th");
                th.colSpan = 1;
                th.appendChild(document.createTextNode("X = " + x))
                tr.appendChild(th);
            }
            else if(x==0 && y>0)
            {
                var td = document.createElement("td");
                td.appendChild(document.createTextNode("Y = " + y));
                tr.appendChild(td);
            }
            else
            {
                let td = document.createElement("td");
                td.appendChild(document.createTextNode(x*y));
                tr.appendChild(td);
            }
        }
        tBody.appendChild(tr);
    }
    table.appendChild(tBody);
    modalContent.appendChild(table);
}

function closeTable()
{
    let modal = document.getElementById("tableModal");
    let table = document.getElementById("table");
    modal.style.display = "none";
    table.remove();
}

function showModal()
{
    if([valueCheckX(), valueCheckY()].every(Boolean))
        showTable();
}