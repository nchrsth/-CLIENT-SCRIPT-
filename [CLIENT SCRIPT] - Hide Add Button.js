function onLoad() {
    //MRVS is loaded after the catalog item is loaded. Hence setting a delay of 2 secs.
    setTimeout(function() {
        disableButtons();
    }, 2000);
}

function disableButtons() {
    var my_var = g_form.getField("checklist_end2end");//use your variable set name here
    my_var.max_rows_size = 0;
    var btn = this.document.getElementsByClassName("btn btn-primary");
    for (i = 0; i < btn.length; i++) {
        if(btn[i].innerText == 'Add') {
            btn[i].disabled="disabled";
            //If you want to hide it fully, then use below line.
            btn[i].style.display='None';
        }
    }

    //if you want to hide Add button as well, you can use above logic, 
    // but use the class name as btn-primary instead of btn-default 
    //and change the if condition to Add.
}