var parent_div = document.createElement("div")
parent_div.style.textAlign="center"
// parent_div.className="counter"
parent_div.style.color= "red"
parent_div.style.fontSize = "100px"
parent_div.innerHTML="10"
setTimeout(function timer() {
  parent_div.style.color= "blue"
  parent_div.style.fontSize = "100px"
  parent_div.innerHTML="9"
  setTimeout(function timer() {
    parent_div.style.color= "orange"
    parent_div.style.fontSize = "100px"
    parent_div.innerHTML="8"
    setTimeout(function timer() {
      parent_div.style.color= "green"
      parent_div.style.fontSize = "100px"
      parent_div.innerHTML="7"
      setTimeout(function timer() {
        parent_div.style.color= "yellow"
        parent_div.style.fontSize = "100px"
        parent_div.innerHTML="6"
        setTimeout(function timer() {
          parent_div.style.color= "brown"
          parent_div.style.fontSize = "100px"
          parent_div.innerHTML="5"
          setTimeout(function timer() {
            parent_div.style.color= "aqua"
            parent_div.style.fontSize = "100px"
            parent_div.innerHTML="4"
            setTimeout(function timer() {
              parent_div.style.color= "crimson"
              parent_div.style.fontSize = "100px"
              parent_div.innerHTML="3"
              setTimeout(function timer() {
                parent_div.style.color= "teal"
                parent_div.style.fontSize = "100px"
                parent_div.innerHTML="2"
                setTimeout(function timer() {
                  parent_div.style.color= "darkviolet"
                  parent_div.style.fontSize = "100px"
                  parent_div.innerHTML="1"
                    setTimeout(function timer() {
                      parent_div.style.background = "linear-gradient(orange,white,green)"
                      parent_div.style.color= "#0707a5"
                      parent_div.innerHTML="Happy Independence Day"
                  }, 1000)
                }, 1000)
              }, 1000)
            }, 1000) 
          }, 1000) 
        }, 1000) 
      }, 1000) 
    }, 1000) 
  }, 1000)
}, 1000);   
document.body.append(parent_div) 
