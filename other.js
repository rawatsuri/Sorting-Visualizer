var speed = 1000;

input_speed.addEventListener("input",change_speed);

function change_speed()
{
    var array_speed = input_speed.value;

    switch(parseInt(array_speed))
    {
        case 8: speed = -10;
                break;
        case 7: speed = 100;
                break;
        case 6: speed = 200;
                break;
        case 5: speed = 400;
                break;
        case 4: speed = 600;
                break;
        case 3: speed = 800;
                break;
        case 2: speed = 1000;
                break;
        case 1: speed = 2000;
                break;
    }
}



function Swap_Container(num1,num2)
{
    cont.insertBefore(num2,num1);
}

async function speedUp()
{
        await new Promise(resolve=> 
                setTimeout(() => {
                resolve(); 
                }, speed));
}

