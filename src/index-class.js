// This is the same code in ES6 class format 
class Note {
    constructor(elem){
        this.contianer=elem;
        this.addEvents(elem)
    }
    template = document.querySelector("#myTemplate");
    addNode = (elem) => {
        elem.appendChild(this.template.content.cloneNode(true));
    }
    delNode = (elem)=> {
        elem.remove();
    }
    render = (elem) =>{
        let savedText = localStorage.getItem('test');
        if(savedText){
            this.contianer.innerHTML = savedText;
        }else{
            this.contianer.appendChild(this.template.content.cloneNode(true));
        }
        
    }
    addEvents = (elem) =>{
        this.contianer.addEventListener("click",(e)=>{
            if(e.target.dataset.action === "add"){
                this.addNode(e.target.parentElement.lastElementChild);
            }
            if(e.target.dataset.action === "delete"){
                this.delNode(e.target.parentElement);
            }
            
        });
        window.addEventListener("beforeunload",function(){
            localStorage.setItem('test',cont.innerHTML);
        })
    }
    
}
const cont = document.querySelector("#app");
const note = new Note(cont);
note.render();




