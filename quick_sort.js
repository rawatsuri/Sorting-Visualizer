
async function Quick()
{
    var bar = document.querySelectorAll('.bar');
    let left = 0,right = bar.length-1;
   await quickSort(bar,left,right);
   done = true;
   enable_buttons();
}

async function quickSort(bar,left,right)
{
    if(left<right)
    {
        let pivot = await partition_array(bar,left,right);
        await quickSort(bar,left,pivot-1);
        await quickSort(bar,pivot+1,right);
    }
    else if(left>=0 && right>=0 && left<bar.length && right<bar.length)
    {
        bar[right].style.backgroundColor = '#00BFFF';
        bar[left].style.backgroundColor = '#00BFFF';
        bar[right].style.transform = 'translate(0,0px)';
        bar[left].style.transform = 'translate(0,0px)';
    }
}

async function partition_array(bar,left,right)
{
    let i = left-1;
    bar[right].style.backgroundColor = 'red';
    bar[right].style.transform = 'translate(0,-25px)';
    for(let j=left;j<=right-1;j++)
    {
        bar[j].style.backgroundColor = 'lime';
        bar[j].style.transform = 'translate(0,-25px)';
       await speedUp();
        
        let num1 = parseInt(bar[j].style.height);
        let num2 = parseInt(bar[right].style.height);
        if(num1<num2)
        {
            i++;
            Swap(bar[i],bar[j]);
            bar[i].style.backgroundColor = 'gray';
        //     bar[i].style.transform = 'translate(0,0px)';
            if(i!=j) 
                bar[i].style.backgroundColor = 'gray';

            await speedUp();
        }
        else {
            bar[j].style.backgroundColor = 'red';
        }
    }
    i++;
    await speedUp();
        Swap(bar[i],bar[right]);
        bar[right].style.backgroundColor = 'red';
        bar[i].style.backgroundColor = '#00BFFF';
        bar[i].style.transform = 'translate(0,0px)';

        await speedUp();

        for(let k=0;k<bar.length;k++)
        {
            if(bar[k].style.backgroundColor!='#00BFFF')
                    bar[k].style.backgroundColor = 'lime';
        }
        return i;
}

function Swap(num1,num2)
{
    let title = num1.innerHTML;
    num1.innerHTML = num2.innerHTML;
    num2.innerHTML = title;
    let tmp = num1.style.height;
    num1.style.height = num2.style.height;
    num2.style.height =tmp;
}