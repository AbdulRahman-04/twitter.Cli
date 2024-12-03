import read from "readline-sync";
import { registerUser, loginUser, addTask } from "./users.js";

async function main() {
  let loggedInUser = null;

  console.clear();
  console.log("************");
  console.log("----toDO----");
  console.log("************");

  while (true) {
    const options = ["exit", "Register", "Login", "Add a task"];

    options.map((x, indexVal) => {
      console.log(`${indexVal}. ${x}`);
    });

    let userOption = read.questionInt("enter an option: ");

    switch (userOption) {
        case 0: 
        console.log('Jarao, tataByebye');
        process.exit(0);
      case 1:
       await registerUser();
        break;
      case 2:
        loggedInUser =  await loginUser();
        break;
        case 3: await addTask(loggedInUser)
      default:
        break;
    }

    read.question("press Enter to continue");
  }
}
main();
