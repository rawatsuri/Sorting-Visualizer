
async function Bubble()
{
    var bar = document.querySelectorAll(".bar");

    for(let i =0;i<bar.length-1;i++)
    {
        for(let j=0;j<bar.length-i-1;j++)
        {
            bar[j].style.backgroundColor = 'gray';
            bar[j+1].style.backgroundColor = 'lime';
            bar[j].style.transform = "translate(0,-25px)";
            bar[j+1].style.transform = "translate(0,-25px)";

          
            await speedUp();

                // let num1 = Number(bar[j].childNodes[0].innerHTML);
                // let num2 = Number(bar[j+1].childNodes[0].innerHTML);
                let num1 = parseInt(bar[j].style.height);
                let num2 = parseInt(bar[j+1].style.height);
                    console.log(num1);
                    console.log(num2);
                if(num1>num2)
                {
                    Swap_Container(bar[j],bar[j+1]);
                    bar = document.querySelectorAll(".bar");
                }
                bar[j].style.transform = "translate(0,0)";
                bar[j+1].style.transform = "translate(0,0)";
                bar[j].style.backgroundColor = 'green';
                bar[j+1].style.backgroundColor = 'green';
        }
        bar[bar.length-i-1].style.backgroundColor = '#00BFFF';
    }
    bar[0].style.backgroundColor = '#00BFFF';
    done = true;
    enable_buttons();
}