






let eat = new Audio('eat.mp3');
let mov = new Audio('mov.mp3');
let go = new Audio('go.mp3');




        const canvas = document.getElementById("gameCanvas");
        const ctx = canvas.getContext("2d");

    
        const box = 20;
        let score =0;
		let arr = [];
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



const s2 = document.querySelector('.s2');
			 
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
			
            if (snakeX == food.x && snakeY == food.y) {
                score += a1;
				eat.play();
				mov.play();
				
	           s2.innerHTML = score;
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
                go.play();
				mov.pause();
				clearInterval(game);
				arr.push(score);
				score =0;
				h2.classList.remove("hidden");
				
            }
        
            snake.unshift(newHead);
        }
        
		let b2 = document.querySelector('.b2');

		b2.addEventListener('click',()=>{
			location.reload();
		})

		let show = ()=>{

			let nav = document.querySelector('.nav');
			nav.classList.add("hidden");
			b2.classList.remove("hidden");
			let sc = document.querySelector('.sc');
		
		for( i =0;i<arr.length;i++){
		 
			let li = document.createElement('li');
			li.innerHTML = `round ${i+1} score:: ${arr[i]}`;
		
			sc.appendChild(li);
		
		
		}
		
		
		}
		   

          let x= 200;
        let game = setInterval(draw,x );

let round = 1;
const s1 = document.querySelector('.s1');
h2.addEventListener('click',()=>{
	
	mov.play();
	round++;
	s1.innerHTML = round;
	s2.innerHTML = score;
	
	h2.classList.add('hidden');
	snake = [];
        snake[0] = { 
            x: 1 * box, 
            y: 1 * box 
        };

		if(d == "LEFT" || d =="UP")d="RIGHT"
        if(round==2){
			a1=8;
			bg = "silver";
			c1="lightGray"
			c2 ="white";
			f="green";
		}
		
		if(round==3){
			a1= 15;
			bg = "silver";
			c ="white";
			f="green";
		}

		if(round==4){
			a1 = 25;
			bg = "steelblue";
			c ="white";
			f="green";
		}

		if (round ==5) {
			a1 = 40;
		}

		if(round == 6){
			a1= 80;
			clearInterval(game);
			mov.pause();
			show();
			return;
		}

		x-=29;
	game = setInterval(draw, x);
})


