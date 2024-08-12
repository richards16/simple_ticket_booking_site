function payment(){
    var x = document.getElementById('amount');
    x.style.display='inline';

    var y=document.getElementById('tickets').value;
    document.getElementById('values').value = y+" x 240 = "+y*240;
}