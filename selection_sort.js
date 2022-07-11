async function Selection_sort()
{
    var bar = document.querySelectorAll('.bar');

    for(let i = 0;i<bar.length-1;i++)
    {
        let minimum = i;

        for(let j=i+1;j<bar.length;j++)
        {
            bar[minimum].style.backgroundColor = 'lime';
            bar[j].style.backgroundColor = 'gray';
            bar[minimum].style.transform = 'translate(0,-20px)';
            bar[j].style.transform = 'translate(0px,-25px)';
            
          await speedUp();
            let min_Number = parseInt(bar[minimum].style.height);
            let current_number = parseInt(bar[j].style.height);

            if(min_Number>current_number)
            {
                bar[minimum].style.backgroundColor = 'gray';
                bar[minimum].style.transform = 'translate(0,0px)';
                minimum = j;
            }
            bar[j].style.transform = 'translate(0,0px)';
        }
        Swap_Container(bar[i],bar[minimum]);
        bar[minimum].style.backgroundColor = '#00BFFF';
        bar[minimum].style.transform = 'translate(0,0px)';

        bar = document.querySelectorAll('.bar');
    }
    bar[bar.length-1].style.backgroundColor = '#00BFFF';
    done = true;
    enable_buttons();
}