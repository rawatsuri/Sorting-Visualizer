
var done = false;
var input_array = document.getElementById('size_of_array');
var array_size = input_array.value;
var input_speed = document.getElementById('array_speed');
var gen_array = document.getElementById('generate_array');

var sort_button = document.querySelectorAll(".algo_button button");
var maxValue = 110;
var minValue = 5;
var div_size = [];
var margin_size;
var cont = document.getElementById('array_container');
cont.style = "flex-direction: row";


gen_array.addEventListener('click',form_array);
input_array.addEventListener('input',update_array_size);

function form_array(){
    done = false;
    enable_buttons();
    console.log('inside form');
    cont.innerHTML="";
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    
    if(array_size<50){
        
        for(let i=0;i<array_size;i++)
        {
            div_size[i] = Math.floor(Math.random()*(maxValue-minValue)+minValue);
            var bar = document.createElement('div');
            bar.classList.add('bar');
            bar.style.height = (windowHeight*div_size[i]*0.006)+'px';
            bar.style.width = (((windowWidth*0.80)/array_size)-1)+'px';
            var barTitle = document.createElement('label');
            barTitle.classList.add('bar_title');
            barTitle.innerHTML = div_size[i];
            bar.appendChild(barTitle);
            cont.appendChild(bar);
        }
    }
    else
    {
        for(let i=0;i<array_size;i++)
        {
            div_size[i] = Math.floor(Math.random()*(maxValue-minValue)+minValue);
            var bar = document.createElement('div');
            bar.classList.add('bar');
            bar.style.height = (windowHeight*div_size[i]*0.006)+'px';
            bar.style.width = (((windowWidth*0.80)/array_size)-1)+'px';
            cont.appendChild(bar);
        }
    }
}

function update_array_size()
{
    console.log("inside update array size");
    array_size = input_array.value;
    form_array();
}

 window.onload = update_array_size();

     for(let i = 0;i<sort_button.length;i++)
     {
         sort_button[i].addEventListener('click',runAlgo);
     }


function disableOtherButton()
{
    for(let i = 0; i<sort_button.length;i++)
    {
        sort_button[i].classList = [];
        sort_button[i].classList.add("button_locked");
        sort_button[i].disabled = true;
        input_array.disabled = true;
        gen_array.disabled = true;
    }
}
function enable_buttons()
{
        if(done === true)
        {
                gen_array.disabled = false;
                input_array.disabled = false;
        }
        else {
                for(let i=0;i<sort_button.length;i++)
                {
                    sort_button[i].classList = [];
                    sort_button[i].classList.add("button_unselected");
        
                    sort_button[i].disabled = false;
                    input_array.disabled = false;
                    gen_array.disabled = false;
                }
        }
        
}

function runAlgo()
{
    pressed = this.innerHTML;
    console.log("inside runAlgo");
    disableOtherButton();
    this.classList.add('button_selected');
    console.log(this);
    switch(this.innerHTML)
    {
        case "Bubble Sort" : Bubble();
                        break;
        case "Selection Sort" : Selection_sort();
                        break;
        case "Insertion Sort" : Insertion();
                        break;
        case "Merge Sort" : Merge();
                        break;
        case "Quick Sort" : Quick();
                        break;
        case "Heap Sort" : Heap();
                        break;
    }
}

// var flexStart = false;
// function Change_div()
// {
//     console.log('change is called');
//     if(flexStart === false){
//         cont.style.alignItems = 'flex-start';
//         flexStart = true;
//     }
//     else 
//     {
//         flexStart = false;
//         cont.style.alignItems = 'flex-end';
//     }
// }
