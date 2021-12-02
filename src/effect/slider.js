export var Run = (i,x,len,slider)=>{
    if (i < len) {
        slider[i].classList.add("show");
        slider[x].classList.add("fade");
        for (var j = 0; j < len; j++) {
          var last = j - 1;
          last < 0 ? (last = len - 1) : (last = j - 1);
          if (j != i) {
            slider[j].classList.remove("show");
          }
          if (last != x) {
            slider[last].classList.remove("fade");
    }
    }
}
}