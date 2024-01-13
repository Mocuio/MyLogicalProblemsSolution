class Functions {
    constructor() {
        this.initalPoint = 5;
        this.endPath = 40;
        this.pathResult = 0;

        var elementsX = [];
    }

    Resolution1() {
        //discover the number of steps to arrive in Y;


        while (this.initalPoint < this.endPath) {
            this.initalPoint++;

            this.pathResult++;
        }
        console.log(this.pathResult);
    }


    Resolution2() {
        // set the object that no repeat.
        let vetor = ["a", "b", "a", "a", "c", "b"];
        let elements = [];
        let EqualItems = [];

        for (var x in vetor) {
            elements[x] = vetor[x];
            for (var y in elements) {
                if (elements[y] != vetor[x]) {
                    EqualItems = elements[y];
                }
            }
        }
        for (var z in EqualItems) {
            console.log(EqualItems[z]);
        }

    }

    Resolution3() {
        let min = 1;
        let max = 3;
        let x = 0;

        let listaDeCompras = ["arroz", "massa", "carne", "alface"];
        let q = Math.floor(Math.random() * max - min + 1) + min;

        while (x < q) {
            
            let changePostion = listaDeCompras[x];
            listaDeCompras[x] = listaDeCompras[x + 1];
            listaDeCompras[x + 1] = changePostion;

           

            for (let i in listaDeCompras) {
                console.log(listaDeCompras[i]);
            }
            x++;
            console.log("\n");
        }

    }
}


module.exports = {
    Functions,
}