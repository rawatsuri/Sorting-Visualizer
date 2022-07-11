async function Merge()
{
    var bar = document.querySelectorAll('.bar') ;
    let left = 0, right = bar.length-1;
    await mergeSort(bar,left,right);
    done = true;
    enable_buttons();
}

async function mergeSort(bar,left,right)
{
    if(left<right)
    {
        let mid = left + Math.floor((right-left)/2);
        await mergeSort(bar,left,mid);
        await mergeSort(bar,mid+1,right);
        await merge_sorted_array(bar,left,mid,right);
    }   
}


async function merge_sorted_array(bar,low,mid,high)
{
    const num1 = mid - low + 1;
    const num2 = high - mid;

    let left = new Array(num1);
    let right = new Array(num2);
    let leftVal = new Array(num1);
    let rightVal  = new Array(num2);

    for(let i=0;i<num1;i++)
    {
        await speedUp();
        bar[low+i].style.backgroundColor = 'orange';
        left[i] = bar[low+i].style.height;
        leftVal[i] = bar[low+i].innerHTML;
    }

    for(let i=0;i<num2;i++)
    {
        await speedUp();
        bar[mid+i+1].style.backgroundColor = 'yellow';
        right[i] = bar[mid+i+1].style.height;
        rightVal[i] = bar[mid+i+1].innerHTML;
    }

    await speedUp();
    let i = 0,j = 0,k = low;

    while(i < num1 && j < num2)
    {
        await speedUp();
        if(parseInt(left[i])<=parseInt(right[j]))
        {
            console.log('left - '+ left[i]);
            if((num1+num2) === bar.length)
                bar[k].style.backgroundColor = '#00BFFF';
            else
                bar[k].style.backgroundColor = 'lime';
            
            bar[k].style.height = left[i];
            bar[k].innerHTML = leftVal[i];
            console.log('bar - '+ bar[k].style.height);
            i++;
        }
        else{
            
            console.log('right - '+ right[j]);
            if((num1+num2) === bar.length)
                bar[k].style.backgroundColor = '#00BFFF';
            else
                bar[k].style.backgroundColor = '#00BFFF';
            bar[k].style.height = right[j];
            bar[k].innerHTML = rightVal[j];
            j++;
            console.log('bar - '+ bar[k].style.height);
        }
        k++;
    }

    while(i<num1)
    {
        await speedUp();
        
        if((num1+num2) === bar.length)
            bar[k].style.backgroundColor = '#00BFFF';
        else
            bar[k].style.backgroundColor = 'lime';

        bar[k].style.height = left[i];
        bar[k].innerHTML = leftVal[i];
        i++;
        k++;
    }

    while(j<num2)
    {
        
        if(num1+num2 === bar.length)
            bar[k].style.backgroundColor = '#00BFFF';
        else
            bar[k].style.backgroundColor = 'lime';
       
        bar[k].style.height = right[j];
        bar[k].innerHTML = rightVal[j];
        j++;
        k++;
    }
}