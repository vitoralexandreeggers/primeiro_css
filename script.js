

function calcula(){

    let c = parseFloat(document.getElementById('numero_C').value);
    let i = parseFloat(document.getElementById('numero_I').value);
    let t = parseFloat(document.getElementById('numero_T').value);
   

    i = i / 100;

    let J = c * i * t;
    
    
       
    document.getElementById('juros').textContent = 'juros: ' + J;

    let m = c + J
    document.getElementById('montante').textContent = 'montante: ' + m;

    

   }






   
