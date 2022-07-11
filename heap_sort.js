
async function Heap()
{
    var bar = document.querySelectorAll('.bar');
    let size = bar.length;

    for(let i=size/2-1;i>=0;i--)
        await heap_sort_run(bar,size,i);
    
    for(let i=size-1;i>0;i--)
    {
        bar[i].style.backgroundColor = 'blue';
        //bar[0].style.backgroundColor = 'lime';
        Swap(bar[i],bar[0]);

        await speedUp();

        await heap_sort_run(bar,i,0);
    }
    done = true;
    enable_buttons();
}

async function heap_sort_run(bar,size,index)
{
    let largest = index;

    let left = 2*index+1;
    let right = 2*index+2;

    if(left<size && parseInt(bar[left].style.height)>parseInt(bar[largest].style.height))
        largest = left;
    
    if(right<size && parseInt(bar[right].style.height)>parseInt(bar[largest].style.height))
        largest = right;
    
    if(largest!=index)
    {
        bar[index].style.backgroundColor = 'red';
        bar[largest].style.backgroundColor = 'lime';
        Swap(bar[index],bar[largest]);

        await speedUp();
        await heap_sort_run(bar,size,largest);
   
    }
}