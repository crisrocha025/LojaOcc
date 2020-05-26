   Items = []
    for(item=0;item<20;item++){
      var go = ':nth-child('+item+')'
      Items.push(go)
      }
      Labell=[]
     for(l=0;l<20;l++){
        const labbel = document.querySelector(`.label-head${Items[l]}`)
        Labell.push(labbel)
     }
