function newGrid(size)
{
    size = size || 16;
    cellSize = 40/Math.sqrt(size) + "rem";

    const container = document.querySelector(".grid-container");

    let divArray = [];

    for (i = 0; i < size; i++)
    {
        divArray[i] = document.createElement("div");

        divArray[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })

        divArray[i].style.width = cellSize;
        divArray[i].style.height = cellSize;

        container.appendChild(divArray[i]);
    }

}

newGrid(16);