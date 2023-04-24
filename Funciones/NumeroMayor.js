/*
function NumeroMayor(a,b,c){
          if (a>b && a>c){
            return a;
          }else if (b>a && b>c){
            return b;
          }else
            return c;
          }

          console.log("Numero Mayor es:" + NumeroMayor(1,2,3));

*/
function NumeroMayor(a,b,c){
    var Mayor=a;
    if (b>Mayor){
      return Mayor=b;
    }else if(c>Mayor){
      return Mayor=c;
    }else{
        return Mayor;
    }
}
    console.log("Numero Mayor es:" + NumeroMayor(5,3,3));
