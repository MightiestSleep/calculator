function perform_calculation(strng) {
    let first_arg = "";
    let first_satisfied = false;
    let second_arg = "";
    let op = "";
    for(let i = 0;i<strng.length;i++)
    {
        if(isNaN(strng.charAt(i)))
        {
            first_satisfied = true;
            op = strng.charAt(i);
        }
        else if(first_satisfied == false)
        {
            first_arg = first_arg + strng.charAt(i);
        }
        else if(first_satisfied == true)
        {
            second_arg = second_arg + strng.charAt(i);
        }
    }
    alert(first_arg);
    alert(op);
    alert(second_arg);
    return 0;
}




const cells = document.querySelectorAll('.cell');
const display = document.querySelector('.display');
let display_value = "";
//alert("Hello");
    for(let i = 0; i<cells.length;i++)
    {
        //alert("Initialization");
        // cells[i].addEventListener('mouseover',makeSolid);
        cells[i].addEventListener('click', function (e) {
            //e.target.style.background = COLOR;
            if(e.target.id.localeCompare("C") == 0)
            {
                display_value = "0";
                display.innerHTML = display_value;
            }
            if(e.target.id.localeCompare("=") == 0)
            {

                display_value = perform_calculation(display_value);
                display.innerHTML = display_value;
            }
            else
            {
                display_value = display_value + e.target.id;
                display.innerHTML = display_value;
            }
            

        });

    }

/*
    if(isNaN(+e.target.id))
    {
        display.innerHTML = e.target.id;
    }
    else
    {
        display.innerHTML = display_value;
    }
    */