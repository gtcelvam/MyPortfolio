export class InterSection{
    constructor(options){
        this.options = options
    }
    callBack = entries =>{
        var observer = ()=> this.observer()
        entries.forEach(entry => {
            if(entry.isIntersecting){
              const page = entry.target.classList[0];
              entry.target.classList.add(page+'-fade-in');
              observer().unobserve(entry.target);
            } 
        });
     }
    options = this.options
    observer = ()=>{
        var callBack = this.callBack
        var options = this.options 
        return new IntersectionObserver(callBack,options)
    }
}

