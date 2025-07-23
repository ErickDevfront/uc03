class Dado {
  #faces;  
    
    constructor() {
        let facesRandom = Math.floor(Math.random()*6 + 1)
        this.#faces = facesRandom;
        Object.freeze(this)
    }
    setFaces(faces) {
        this.#faces = faces;
    }

    getFaces(){
        return this.#faces;
    }
}

    module.exports = {Dado};

    let d1 = new Dado (); 
    //console.log(d1.getFaces());//






   





