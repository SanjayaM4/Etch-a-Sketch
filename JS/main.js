function newGrid(size)
{
    size = size || 16;
    cellSize = 40/Math.sqrt(size) + "rem";

    const container = document.querySelector(".grid-container");

    let divArray = [];

    for (i = 0; i < size; i++)
    {
        const box = document.createElement("div");
        box.classList.add("grid-item");

        box.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })

        box.style.width = cellSize;
        box.style.height = cellSize;

        container.appendChild(box);
    }

}

const rainbowButton = document.querySelector('#rainbow');
rainbowButton.addEventListener('click', () => {
    var boxes = document.getElementsByClassName("grid-item");
    for (i = 0; i < boxes.length; i++)
    {
        boxes[i].addEventListener('mouseover', function(event){
            boxes[i].removeEventListener('mouseover', arguments.callee, false) ;
        })
    }
  });

function randomColor() {
    // return "#" + Math.floor(Math.random()*16777215).toString(16);
    // this returns fewer colors but they are all nice and bright
    return `hsl(${Math.random() * 360}, 100%, 50%)`;
  }


newGrid(16);