

document.querySelector('.play').addEventListener('click', function(){
   play();
});

function play(){
    const level = document.getElementById('selezione').value;
    console.log(level);
    
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

           cella.addEventListener('click', function(){
               this.classList.add('clicked');
               console.log('cliccata');
           });
        }


    }


    

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
