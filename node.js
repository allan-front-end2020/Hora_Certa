function carregar(){
    var msg = window.document.getElementById ("msg")
    var img = window.document.getElementById ("imagem")
    //var data = new Date()
    var hora  = 12

    msg.innerHTML = `Agora sao ${hora}  horas.`
    if(hora  >=0 && hora < 11){ 
        img.src = "./manha.png"
        document.body.style.background = "blue"
    } else if( hora>= 12 && hora <= 18 ){
        img.src = "./tarde.png"
        document.body.style. background = "red"
    }else{
        img.src = "./noite.png"
        document.body.style. background = "black"
     }
 }