function randomPick(list,arrange=null) {
    let max = list.length-1;

    if( arrange == null )
        return list[Math.round(Math.random()*max)];

    let pick = Math.round(Math.random()*100);
    
    let current = 0;
    for (let ind=0;ind<arrange.length-1;ind++){
        if ( current <= pick && pick < current+arrange[ind])
            return list[ind];

        current += arrange[ind];
    }

    return list[list.length-1];
}

function create() {
    let column = document.createElement('div');
    column.classList.add('letter-column');

    column.setAttribute('speed',(Math.round(1+Math.random()*9)+'s'));
    column.setAttribute('color',randomPick(
        [ 'dark' , 'normal' , 'light' ],
        [   50   ,    30     ,   20   ]
    ));
    column.setAttribute('size',randomPick(
        [ 'small' , 'normal' , 'big' ],
        [   25    ,    50    ,   25   ]
    ));
    

    let letterSize = Math.round(25+Math.random()*25);
    for (let ind = 0;ind < letterSize;ind++) {
        let character = String.fromCharCode(Math.round(33+Math.random()*(125-33)));
        column.innerText += character;
    }

    column.style.left = (Math.random()*100)+'%';
    column.style.animationDelay = (Math.random()*5)+'s';
    
    return column;
}

function generate(amount) {
    for(let ind=0;ind<amount;ind++)
        document.body.append(create());
}

window.onload = () => {
    generate(500);
}