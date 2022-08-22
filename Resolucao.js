 let open = 0;

 function verificarParentetizacao()
{
    let parentetizacao="(()";
    for(var i=0;i<parentetizacao.length;i++){
     if( parentetizacao[i] === "(")
     {
        open++;
     }
     else
     {
        open --;
     }
  
    
    }
    if(open == 0)
    {
        console.log("Deu certo!");
    return  true;
    
    }
    console.log("Deu errado!");
    return false;
   
    
    
}

console.log(verificarParentetizacao());