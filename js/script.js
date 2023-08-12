///////------------task 1 ----------////

// class User {
//    constructor(name, role) {
//       this.name = name;
//       this.role = role;
//    }
//    checkRole() {
//       if (this.role === "admin" || this.role === "user") {
//          console.log("It's all right");
//       } else {
//          console.log("Error");
//       }
//    }
//    getName() {
//       console.log(this.name);
//    }
//    getRole() {
//       console.log(this.role);
//    }
//    changeName() {
//       let newName = prompt("What is your name?", "");
//       this.name = newName;
//    }
// }

// let user_1 = new User("Petro", "user");

// console.log(user_1);
// user_1.checkRole();
// user_1.changeName();
// console.log(user_1);

/////////---------task 2----------////

class WorldClock {
   constructor(
      bcg,
      className,
      value,
      width = 100,
      height = 100,
      borderRadius = 50,
      padding = 10
   ) {
      this.bcg = bcg;
      this.className = className;
      this.width = width;
      this.height = height;
      this.borderRadius = borderRadius;
      this.padding = padding;
   }

   getCurrentDate() {
      let round = document.createElement("div");

      round.style.background = this.bcg;
      round.style.width = `${this.width}px`;
      round.style.height = `${this.height}px`;
      round.style.borderRadius = `${this.borderRadius}%`;
      round.style.padding = `${this.padding}px`;
      round.classList.add(this.className);

      let date = new Date();
      round.innerText = date.toLocaleDateString();
      return round;
   }
   getCurrentTime() {
      let round = document.createElement("div");

      round.style.background = this.bcg;
      round.style.width = `${this.width}px`;
      round.style.height = `${this.height}px`;
      round.style.borderRadius = `${this.borderRadius}%`;
      round.style.padding = `${this.padding}px`;
      round.classList.add(this.className);

      let date = new Date();
      round.innerText = date.toLocaleTimeString();
      return round;
   }
}

let blockClock = document.querySelector(".clock");
let inp = document.querySelector("input");
let btn = document.querySelector("button");
let clock_new = new WorldClock("#397c71e0", "round");
let clock = document.querySelector(".round");
btn.addEventListener("click", getDate);

function getDate(e) {
   e.preventDefault();
   if (inp.value == 1) {
      blockClock.append(clock_new.getCurrentDate());
   } else if (inp.value == 2) {
      blockClock.append(clock_new.getCurrentTime());
   } else if (inp.value == 3) {
      clock.remove();
   }
}
