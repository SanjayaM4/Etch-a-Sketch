function newGrid(size)
{
    size = size || 16;
    cellSize = 40/size + "rem";

    const mainContainerDiv = document.getElementById("maincontainer");

    let divArray = [];

    for (i = 0; i < size; i++)
    {
        divArray[i] = document.createElement("div");

        mainContainerDiv.appendChild(divArray[i]);
    }

}
