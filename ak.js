











        const canvas = document.getElementById("gameCanvas");
        const ctx = canvas.getContext("2d");
        
        const box = 20;
        let score =0;
		let a1=5;
        

	
	

        let snake = [];
        snake[0] = { 
            x: 10 * box, 
            y: 10 * box 
        };
        
        let food = {
            x: Math.floor(Math.random() * 15) * box,
            y: Math.floor(Math.random() * 20) * box
        };
        
        let d;















document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);

let touchStartX = 0;
let touchStartY = 0;

function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
}

function handleTouchMove(event) {
    if (!touchStartX || !touchStartY) {
        return;
    }

    let touchEndX = event.touches[0].clientX;
    let touchEndY = event.touches[0].clientY;

    let dx = touchEndX - touchStartX;
    let dy = touchEndY - touchStartY;

    if (Math.abs(dx) > Math.abs(dy)) {
        if (dx > 0 && d!="LEFT") {
            // Right swipe
            d = "RIGHT";
        } else {
            // Left swipe
			if (d!="RIGHT")  d = "LEFT";
           
        }
    } else {
        if (dy > 0 && d!="UP") {
            // Down swipe
            d = "DOWN";
        } else {
            // Up swipe
            if (d != "DOWN") d = "UP";
        }
    }

    // Reset touch coordinates
    touchStartX = 0;
    touchStartY = 0;
}









let bg = "aliceblue";
let c1 ="black";
let c2 ="gray";
let f ="blue";
let b ="yellow";



        
        document.addEventListener("keydown", direction);
        
        function direction(event) {
            if (event.keyCode == 37 && d!= "RIGHT" ) {
                d = "LEFT";
            } else if (event.keyCode == 38 && d!="DOWN") {
                d = "UP";
            } else if (event.keyCode == 39 && d!="LEFT") {
                d = "RIGHT";
            } else if (event.keyCode == 40 && d!="UP") {
                d = "DOWN";
            }
        }
        
        function collision(head, array) {
            for (let i = 0; i < array.length; i++) {
                if (head.x == array[i].x && head.y == array[i].y) {
                    return true;
                }
            }
            return false;
        }
        let h2 = document.querySelector('h2');
        function draw() {

            ctx.clearRect(0, 0,300, 400);

            ctx.fillStyle = bg;
            ctx.fillRect(0,0,300,400);
            
        
            for (let i = 0; i < snake.length; i++) {
                ctx.fillStyle = (i === 0) ? c1 : c2;
                ctx.fillRect(snake[i].x, snake[i].y, box, box);
                ctx.strokeStyle = b;
                ctx.strokeRect(snake[i].x, snake[i].y, box, box);
            }
        
            ctx.fillStyle = f;
            ctx.fillRect(food.x, food.y, 20,20);
        
            let snakeX = snake[0].x;
            let snakeY = snake[0].y;
        
            if (d === "LEFT") snakeX -= box;
            if (d === "UP") snakeY -=  box;
            if (d === "RIGHT") snakeX += box;
            if (d === "DOWN") snakeY += box;
			const p = document.querySelector('span');
            if (snakeX == food.x && snakeY == food.y) {
                score += a1;
				
	           p.innerHTML = score;
                food = {
                    x: Math.floor(Math.random() * 15) * box,
                    y: Math.floor(Math.random() * 20) * box
                };
            } else {
                snake.pop();
            }
        
            let newHead = {
                x: snakeX,
                y: snakeY
            };
        
            if (snakeX < 0 || snakeX >= canvas.width || snakeY < 0 || snakeY >= canvas.height || collision(newHead, snake)) {
                clearInterval(game);
				h2.classList.remove("hidden");
				
            }
        
            snake.unshift(newHead);
        }
        


let x= 200;
        let game = setInterval(draw,x );

let round = 1;
h2.addEventListener('click',()=>{
	round++;
	h2.classList.add('hidden');
	snake = [];
        snake[0] = { 
            x: 1 * box, 
            y: 1 * box 
        };

		if(d == "LEFT" || d =="UP")d="RIGHT"
        if(round==2){
			bg = "silver";
			c1="lightGray"
			c2 ="white";
			f="green";
		}
		
		if(round==2){
			bg = "silver";
			c ="white";
			f="green";
		}

		if(round==3){
			bg = "steelblue";
			c ="white";
			f="green";
		}

		x-=30;
	game = setInterval(draw, x);
})


   