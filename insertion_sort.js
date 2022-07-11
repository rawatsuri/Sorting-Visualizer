
async function Insertion()
{
    console.log("Inside Insertion")
    var bar = document.querySelectorAll('.bar');
    for(let i=1;i<bar.length;i++)
    {
        console.log("inside for loop");
        let key = parseInt(bar[i].style.height);
        let j = i-1;
        while(j>=0 && parseInt(bar[j].style.height)>key)
        {
            console.log("inside while loop");
            bar[j].style.backgroundColor = 'gray';
            bar[j+1].style.backgroundColor = 'lime';
            bar[j].style.transform = 'translate(0,-25px)';
            bar[j+1].style.transform = 'translate(0,-25px)';

            await speedUp();

                Swap_Container(bar[j],bar[j+1]);
            bar[j].style.backgroundColor = '#00BFFF';
            bar[j+1].style.backgroundColor = '#00BFFF';
            bar[j].style.transform = 'translate(0,0px)';
            bar[j+1].style.transform = 'translate(0,0px)';
            j--;
            bar = document.querySelectorAll('.bar');
        }
    }
    done = true;
    enable_buttons();
}