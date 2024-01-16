class Functions {
    constructor() {
        this.initalPoint = 5;
        this.endPath = 40;
        this.pathResult = 0;

        var elementsX = [];
    }

    Resolution1() {
        //Discover the number of steps to arrive in Y;


        while (this.initalPoint < this.endPath) {
            this.initalPoint++;

            this.pathResult++;
        }
        console.log(this.pathResult);
    }


    Resolution2() {
        //Set the object that no repeat.
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
    //Move the first string object to the next array's position
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
    Resolution4() {
        var allLeters = [];
        var letter2 = [];
        let maxGap = 0;
        var counter = 0;
        var input = "ab";
        var allLeters = input.split("");
        var letter = allLeters[0].charCodeAt(0).toString(2);
        var letter2 = allLeters[1].charCodeAt(0).toString(2);
        var allToBinary = letter + letter2
        
        console.log(allToBinary);
        for (let x of allToBinary) {
            if (x === '0') {
                counter++;

            } else {
                maxGap = Math.max(maxGap, counter);
                counter = 0;
            }
        }
        console.log(maxGap);
        
    }
}
module.exports = {
    Functions,
}