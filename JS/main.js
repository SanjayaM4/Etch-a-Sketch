function newGrid(size)
{
    size = size || 16;

    let cellSize = (30 / Math.sqrt(size)) + "rem";

    const container = document.querySelector(".grid-container");
    
    container.style.gridTemplateColumns = `repeat(${Math.sqrt(size)}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${Math.sqrt(size)}, 1fr)`;

    let divArray = [];

    for (let i = 0; i < size; i++)
    {
        const box = document.createElement("div");
        box.classList.add("grid-item");

        box.addEventListener('mouseover', handleMouseoverDefault)

        box.style.width = cellSize;
        box.style.height = cellSize;
        box.style.backgroundColor = 'rgb(255, 255, 255)';

        container.appendChild(box);
    }

}

function updateGridSize() {

    const newSize = gridSizeSlider.value ** 2;

    const container = document.querySelector(".grid-container");
    container.innerHTML = '';

    newGrid(newSize);
}

function handleMouseoverDefault(event) 
{
    event.target.style.backgroundColor = 'rgb(0, 0, 0)';
}

function handleMouseoverEraser(event) 
{
    event.target.style.backgroundColor = 'rgb(255, 255, 255)';
}

function handleMouseoverRainbow(event) 
{
    event.target.style.backgroundColor = randomColor();
}

function handleMouseoverShader(event) 
{
    const currentColor = event.target.style.backgroundColor;
    event.target.style.backgroundColor = darkenColor(currentColor, 0.2);
}

const gridSizeSlider = document.getElementById('grid-size');
gridSizeSlider.addEventListener('input', updateGridSize);

const defaultButton = document.querySelector('#default');
defaultButton.addEventListener('click', () => {
    var boxes = document.getElementsByClassName("grid-item");
    for (let i = 0; i < boxes.length; i++)
    {
        boxes[i].removeEventListener('mouseover', handleMouseoverEraser);
        boxes[i].removeEventListener('mouseover', handleMouseoverRainbow);
        boxes[i].removeEventListener('mouseover', handleMouseoverShader);
        boxes[i].addEventListener('mouseover', handleMouseoverDefault);
    }
    });

const eraserButton = document.querySelector('#eraser');
eraserButton.addEventListener('click', () => {
    var boxes = document.getElementsByClassName("grid-item");
    for (let i = 0; i < boxes.length; i++)
    {
        boxes[i].removeEventListener('mouseover', handleMouseoverDefault);
        boxes[i].removeEventListener('mouseover', handleMouseoverRainbow);
        boxes[i].removeEventListener('mouseover', handleMouseoverShader);
        boxes[i].addEventListener('mouseover', handleMouseoverEraser);
    }
    });

const rainbowButton = document.querySelector('#rainbow');
rainbowButton.addEventListener('click', () => {
    var boxes = document.getElementsByClassName("grid-item");
    for (let i = 0; i < boxes.length; i++)
    {
        boxes[i].removeEventListener('mouseover', handleMouseoverDefault);
        boxes[i].removeEventListener('mouseover', handleMouseoverEraser);
        boxes[i].removeEventListener('mouseover', handleMouseoverShader);
        boxes[i].addEventListener('mouseover', handleMouseoverRainbow);
    }
    });

const shaderButton = document.querySelector('#shader');
shaderButton.addEventListener('click', () => {
    var boxes = document.getElementsByClassName("grid-item");
    for (let i = 0; i < boxes.length; i++)
    {
        boxes[i].removeEventListener('mouseover', handleMouseoverDefault);
        boxes[i].removeEventListener('mouseover', handleMouseoverEraser);
        boxes[i].removeEventListener('mouseover', handleMouseoverRainbow);
        boxes[i].addEventListener('mouseover', handleMouseoverShader);
    }
    });

function randomColor() 
{
    // return "#" + Math.floor(Math.random()*16777215).toString(16);
    // this returns fewer colors but they are all nice and bright
    return `hsl(${Math.random() * 360}, 100%, 50%)`;
}

function darkenColor(color, factor) {
    // Ensure the factor is between 0 and 1
    factor = Math.min(1, Math.max(0, factor));

    let rgbValues;

    // Check if the color is in the format 'rgb(r, g, b)'
    if (color.startsWith('rgb')) {
        rgbValues = color.match(/\d+/g).map(Number);
    } else {
        // Parse the color into RGB components
        rgbValues = [
            parseInt(color.slice(1, 3), 16),
            parseInt(color.slice(3, 5), 16),
            parseInt(color.slice(5, 7), 16),
        ];
    }

    // Subtract the factor from each RGB component
    const subtractedValues = rgbValues.map(value => Math.max(0, value - Math.floor(255 * factor)));

    // Convert back to rgb and return
    return `rgb(${subtractedValues.join(', ')})`;
}

newGrid(16);