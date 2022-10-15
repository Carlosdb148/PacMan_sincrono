var game = game || {};

game = {
    Play:class{
        constructor(){
            this.board =  [['· ','· ','· ','· ','· ','· ',1,'· ','0','· ','· ',1,'· ','· ','· ','· ','· ','· '],
                           ['· ',1,1,'· ','· ','· ',1,1,'· ','· ',1,1,'· ','· ','· ',1,1,'· '],
                           ['· ',1,'· ','· ',1,'· ','· ','· ','· ','· ','· ','· ','· ',1,'· ','· ',1,'· '],
                           ['· ',1,1,'· ',1,'· ',1,1,1,1,1,1,'· ',1,'· ',1,1,'· '],
                           ['·','· ','· ' ,'· ','· ','· ','· ','X','·','· ','· ','· ','· ' ,'· ','· ','· ','· ','· ']];
            this.colPacman;
            this.rowPacman;
            this.aux = '·';
            this.makeBoard();
            this.movePacman();
            this.moveGhost();
        }

        makeBoard(){
            let table = document.getElementById("table");
            for (let i = 0; i < this.board.length; i++) {
                var row = table.insertRow(i);
                for (let j = 0; j < this.board[i].length; j++) {
                    var cell = row.insertCell(j);
                    cell.innerHTML = this.board[i][j];
                    if(this.board[i][j] == 'X'){
                        this.rowPacman = i;
                        this.colPacman = j;
                        console.log(this.rowPacman);
                    }
                }
            }
        }

        play(){
            
        }

        movePacman(){
            let but = document.getElementById("play");
            //but.onclick = ()=>{
                but.addEventListener("click", ()=>{
                //Move between 1-4 -> 1(up), 2(down), 3(left), 4(right)
                let move = document.getElementById("text").value;
                if(move == 1){
                    if(!this.board[this.rowPacman-1] || this.board[this.rowPacman-1][this.colPacman] === "undefined" || this.board[this.rowPacman-1][this.colPacman] == 1){
                        console.log('muro');
                    }else{
                        this.board[this.rowPacman-1][this.colPacman] = 'X';
                        this.board[this.rowPacman][this.colPacman] = this.aux;
                        this.rowPacman--;
                        document.getElementById("table").innerHTML = '';
                        this.makeBoard();
                    }
                }else if(move == 2){
                    if(!this.board[this.rowPacman+1] || this.board[this.rowPacman+1][this.colPacman] === "undefined" || this.board[this.rowPacman+1][this.colPacman] == 1){
                        console.log('muro');
                    }else{
                        this.board[this.rowPacman+1][this.colPacman] = 'X';
                        this.board[this.rowPacman][this.colPacman] = this.aux;
                        this.rowPacman++;
                        document.getElementById("table").innerHTML = '';
                        this.makeBoard();
                    }
                }else if(move == 3){
                    if(!this.board[this.rowPacman][this.colPacman-1] || this.board[this.rowPacman][this.colPacman-1] === "undefined" || this.board[this.rowPacman][this.colPacman-1] == 1){
                        console.log('muro');
                    }else{
                        this.board[this.rowPacman][this.colPacman-1] = 'X';
                        this.board[this.rowPacman][this.colPacman] = this.aux;
                        this.colPacman--;
                        document.getElementById("table").innerHTML = '';
                        this.makeBoard();
                    }
                }else if(move == 4){
                    if(!this.board[this.rowPacman][this.colPacman+1] || this.board[this.rowPacman][this.colPacman+1] === "undefined" || this.board[this.rowPacman][this.colPacman+1] == 1){
                        console.log('muro');
                    }else{
                        this.board[this.rowPacman][this.colPacman+1] = 'X';
                        this.board[this.rowPacman][this.colPacman] = this.aux;
                        this.colPacman++;
                        document.getElementById("table").innerHTML = '';
                        this.makeBoard();
                    }
                }
            },false);
        }

        moveGhost(){
            let but = document.getElementById("play");
            //but.onclick = ()=>{
                but.addEventListener("click", ()=>{
                //Move between 1-4 -> 1(up), 2(down), 3(left), 4(right)
                let move = Math.round() * (4-1 +1) + 1;
                if(move == 1){
                    if(!this.board[this.rowPacman-1] || this.board[this.rowPacman-1][this.colPacman] === "undefined" || this.board[this.rowPacman-1][this.colPacman] == 1){
                        console.log('muro');
                    }else{
                        this.board[this.rowPacman-1][this.colPacman] = 0;
                        this.board[this.rowPacman][this.colPacman] = this.aux;
                        this.rowPacman--;
                        document.getElementById("table").innerHTML = '';
                        this.makeBoard();
                    }
                }else if(move == 2){
                    if(!this.board[this.rowPacman+1] || this.board[this.rowPacman+1][this.colPacman] === "undefined" || this.board[this.rowPacman+1][this.colPacman] == 1){
                        console.log('muro');
                    }else{
                        this.board[this.rowPacman+1][this.colPacman] = 0;
                        this.board[this.rowPacman][this.colPacman] = this.aux;
                        this.rowPacman++;
                        document.getElementById("table").innerHTML = '';
                        this.makeBoard();
                    }
                }else if(move == 3){
                    if(!this.board[this.rowPacman][this.colPacman-1] || this.board[this.rowPacman][this.colPacman-1] === "undefined" || this.board[this.rowPacman][this.colPacman-1] == 1){
                        console.log('muro');
                    }else{
                        this.board[this.rowPacman][this.colPacman-1] = 0;
                        this.board[this.rowPacman][this.colPacman] = this.aux;
                        this.colPacman--;
                        document.getElementById("table").innerHTML = '';
                        this.makeBoard();
                    }
                }else if(move == 4){
                    if(!this.board[this.rowPacman][this.colPacman+1] || this.board[this.rowPacman][this.colPacman+1] === "undefined" || this.board[this.rowPacman][this.colPacman+1] == 1){
                        console.log('muro');
                    }else{
                        this.board[this.rowPacman][this.colPacman+1] = 0;
                        this.board[this.rowPacman][this.colPacman] = this.aux;
                        this.colPacman++;
                        document.getElementById("table").innerHTML = '';
                        this.makeBoard();
                    }
                }
            },false);
        //}            
        
        
        
        }
    }
}
