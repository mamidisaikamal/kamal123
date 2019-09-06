function f1()
{
    var a,b,c;
    a=document.getElementById("t1").value;
    b=document.getElementById("t2").value;
    c=a+b;
    document.getElementById("t3").value=c;
}
function findGender()
{
    var choice=document.querySelector('input[name="r1"]:checked').value;
    alert(choice);
}
function findItem()
{
   var ch=document.getElementById('s1');
   var op=ch.options[ch.selectedIndex].text
   var ch1=document.getElementById('s2');
   var op1=ch1.options[ch1.selectedIndex].text;
   alert("No of cars:"+op);
   alert("Car Name:"+op1);
}
function checkedItems()
{
    var items=document.getElementsByName('c1');
    var selectedItems="";
    for(var i=0;i<items.length;i++){
        if(items[i].type=='checkbox' && items[i].checked==true)
                 selectedItems+=items[i].value+"\n";
    }
    alert(selectedItems);
}

   