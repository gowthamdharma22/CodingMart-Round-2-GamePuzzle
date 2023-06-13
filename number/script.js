function check(){
    let count=0;
    let a=document.f1.a.value;
    let b=document.f1.b.value;
    let c=document.f1.c.value;
    let d=document.f1.d.value;
    let s=document.f1.s.value;
    let find="";
    if(s.length!==0){
        if(a.length>0) {count++;}
        else {find="a";}
        if(b.length>0) {count++;}
        else {find="b";}
        if(c.length>0) {count++;}
        else {find="c";}
        if(d.length>0) {count++;}
        else {find="d";}
        if(count==3){
            switch(find){
                case "a":
                    document.f1.a.value=parseInt(s)-(parseInt(b)+parseInt(c)+parseInt(d));
                    break;
                case "b":
                    document.f1.b.value=parseInt(s)-(parseInt(a)+parseInt(c)+parseInt(d));
                    break;
                case "c":
                    document.f1.c.value=parseInt(s)-(parseInt(b)+parseInt(a)+parseInt(d));
                    break;
                case "d":
                    document.f1.d.value=parseInt(s)-(parseInt(b)+parseInt(c)+parseInt(a));
                    break;
                    
            }
        }
    }

}
function reset(){
    document.f1.a.value="";
    document.f1.b.value="";
    document.f1.c.value="";
    document.f1.d.value="";
    document.f1.s.value="";
}