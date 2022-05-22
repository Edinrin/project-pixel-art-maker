// Select color input:

var color = document.querySelector('#colorPicker');

// Select size input:

var size = document.querySelector('#sizePicker');


// Select canvas input:

var canvas = document.querySelector('#pixelCanvas');


// When size is submitted by the user, call makeGrid()

size.addEventListener('submit', function (event)
{

    event.preventDefault();

    makeGrid();

});

// Your code goes here!

function makeGrid()

{
    var height = document.querySelector('#inputHeight').value;
    var width = document.querySelector('#inputWidth').value;

//(https://knowledge.udacity.com/questions/845443 , 13th May, 2022)

// to reset the grid

    canvas.innerHTML = "";

    for (var h = 0; h < height; h++)
    {
//(https://knowledge.udacity.com/questions/834332 , 22nd April, 2022)

        var row = document.createElement('tr');

        for (var w = 0; w < width; w++)
        {
            let  cell = document.createElement('td');
           
            row.appendChild(cell)

            cell.addEventListener('click', function (event)

            {
                
// (https://knowledge.udacity.com/questions/834662 , 22nd April, 2022)

                if (event.target.backgroundColorstyle)

                    event.target.style.removeProperty('background-color');
                else
                    event.target.style.backgroundColor = color.value;
            })
        }

    canvas.appendChild(row);

    }

}



