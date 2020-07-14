console.log('it works');

// select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shake = document.querySelector('.shake');
const MOVE_AMOUNT = 10;

// setup our canvas for drawing

const {width, height} = canvas; // object destructuring (ES6)const {width} = canvas; and const {height} = canvas; same as const width = canvas.width and const height = canvas.height;; 

//random x and y between 0 and width / height
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 30;

//start draw
ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

//write a draw function
const draw = ({key}) => { //destructuring
    
    //incrument hue
    hue += 10;
    ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;

    console.log(key);
            
        //start our path
        ctx.beginPath();
        ctx.moveTo(x, y);        

        //change x and y
        switch (key) {
            case 'ArrowUp':
                y = y - MOVE_AMOUNT;
                break;
            case 'ArrowDown':
                y = y + MOVE_AMOUNT;
                break;
            case 'ArrowLeft':
                x = x - MOVE_AMOUNT;
                break;
            case 'ArrowRight':
                x = x + MOVE_AMOUNT;
                break;
            default:
                break;
        }

        ctx.lineTo(x, y);
        ctx.stroke();
    }

    
//move our x and y values depending on what the user did that starting points in the canvas
    x = x - MOVE_AMOUNT; // same as x = x - 10; and + goes down - goes up
    y = y - MOVE_AMOUNT;
        
//write a handle for keys (switch statement)
const handleKey = e => {
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw({key: e.key});
        // console.log(e.key);
        // console.log('HANDLING KEY');
}
}

// clear / shake funtion
const clearCanvas = () => {
    canvas.classList.add('shake');
    canvas.addEventListener(
        'animationed',
        () => {
        console.log('done a shake');
        canvas.classList.remove('shake');
    }, {once: true}
    );
}

//listen for the arrow keys
window.addEventListener('keydown', handleKey);
shakeBtn.addEventListener('click', clearCanvas);