function add(parent1, texts){
     let element = document.createElement("p")
     element.style.marginTop = "1rem";
     element.style.color = "#8c6991"
     let text = document.createTextNode(texts);
     element.append(text);
     parent1.append(element);
    
    }
   
    let button1= document.querySelectorAll(".relative img");
    let linked = new Image()
    linked.src="assets/images/icon-minus.svg";
    
    linked.onload = function(){
    button1.forEach((value, index) => {
        value.addEventListener("click", function(){
            let parent1 = this.closest(".relative");
            let paragraph = parent1.querySelectorAll("p")[1];
          
            if(paragraph){
              parent1.removeChild(paragraph);
              this.setAttribute("src", "assets/images/icon-plus.svg");
            }
          else{
            let text = 
            ["Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
             "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
             "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
             "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."];
            let texts = text[index];
            add(parent1, texts);
            this.setAttribute("src", linked.src);
        }
        }, false)
    })
    }
















