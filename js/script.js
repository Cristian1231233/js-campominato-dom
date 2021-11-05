

document.querySelector('.play').addEventListener('click', function(){
    play();
 });
 
 function play(){
     const level = document.getElementById('selezione').value;
     console.log(level);
     
     let tentativi = 0;
     const listaTentativi = [];
     
     
     const BOMBS_NUMBER = 17;
     

     let numeroCelle;
     
     if(level === 'easy'){
         numeroCelle = 100;
         console.log(numeroCelle);
     }else if(level === 'crasy'){
         numeroCelle = 81;
         console.log(numeroCelle);
     }else if(level === 'hard'){
         numeroCelle = 49;
         console.log(numeroCelle);
     }
     
     
     
     
     const celleForRow = Math.sqrt(numeroCelle);
     console.log(celleForRow);
          
     
     

     document.querySelector('main').innerHTML = '';
     generateGrid();
 
    function generateGrid(){
         const grid = document.createElement('div');
 
         grid.className = 'countain-wrap';
 
         document.querySelector('main').append(grid);
 
         

         for( let i = 1; i <= numeroCelle; i++){
         //    creo ogni cella
            const cella = document.createElement('div');
            cella.className = 'square';
            cella.innerHTML = `<span>${i}</span>`;
            const cellaSize = `calc(100% / ${celleForRow})`;
            cella.style.width = cellaSize;
            cella.style.height = cellaSize;
            
            grid.append(cella);
 
            cella.addEventListener('click', eventClick);
                
            
         }
         const tentativiMax = numeroCelle - BOMBS_NUMBER;
         console.log('tentativi Max', tentativiMax);
         
          const bombs = generateBombs();
          function eventClick(event){

            const cellValue = parseInt(event.target.innerText);

            if(bombs.includes(cellValue)){
                // fine partita
                endGame()
                this.classList.add('red');
            }else if(!listaTentativi.includes(cellValue)){
                tentativi++;
                listaTentativi.push(cellValue);
            }
             console.log(listaTentativi);

            console.log(event.target.innerText);
            this.classList.add('clicked');
               
            if(tentativi === tentativiMax){
                endGame();
            }
          }

           function endGame(){
               console.log('End game');
               const cells = document.getElementsByClassName('red');
               for( let i = 0; i < cells.length; i++){
                   if(bombs.includes(cells[i + 1])){
                       cells[i].classList.add('red');
                   }
               }
           }
        
         
        //creo una funzione che genera le bombe
        function generateBombs(){
            // array di bombe vuoto
            const bombs = [];
            console.log(bombs);
            console.log('BOMBS_NUMBER', BOMBS_NUMBER);

            // creo un ciclo while in cui le bombe totali
            //  devono essere inferiori a 16 cioè a BOMBS_NUMBER
            while(bombs.length < BOMBS_NUMBER){
                
                // creo una costante che contiene una funzione
                //  che genera numeri random da 1 a numero celle
                const bomb = randomBomb(1, numeroCelle);
                
                // se la bomba non è all'interno dell'array
                if(!bombs.includes(bomb)){
                    // pusho la bomba nell'array
                    bombs.push(bomb);
                }
                 
            }
            // mi restituisce le bombe
            return bombs;
        }
    }
 


        
     
 
 }
 
 function randomBomb(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
 
 
 // const testo = document.querySelector('.testo');
 
 // let selezione = document.getElementById('selezione');
 // console.log(selezione);
 
 
 // function getselectedValue(){
 //     let selectedValue = document.getElementById('selezione');
 //     console.log(selectedValue);
 // }
 // getselectedValue();
 
 
 // play.addEventListener('click', function(){
   
 
  
 //     let container = document.querySelector('.countain-wrap');
 //     console.log(container);
     
 // // creo un ciclo for in cui inserisco gli square
 // for( let i = 1; i < 101; i++){
     
 //     const sq = document.createElement('div');
 //     sq.className = 'square';
 //     sq.innerHTML = `<span> ${numerRandom(1, 100)}</span>`;
 //     container.append(sq);
 //     sq.addEventListener('click', function(){
 //         this.classList.add('clicked');
 //     });
   
 // }
 
 //     testo.classList.add('none');
 //     containerHidd.classList.remove('none');
     
 // });
 
   
 
 
 
 
 
 
 
 
 // function numerRandom(min, max){
 //     return Math.floor(Math.random() * (max - min + 1) + min)
 








// function numerRandom(min, max){
//     return Math.floor(Math.random() * (max - min + 1) + min)
