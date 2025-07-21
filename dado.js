class dado {
  #faces;  
    
    constructor(faces) {
        let facesRandom = Math.floor(Math.random()*6 + 1)
        this.#faces = facesRandom;
        object.freeze(this)
    }
    setFaces(faces) {
        this.#faces = faces;
    }

    getFaces(){
        return this.#faces
    }
}

    module.exports = {dado};

    let d1 = new dado ();
    console.log(d1.getFaces());






   





