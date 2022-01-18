
const sentence = "hello there from lighthouse labs";

let time = 0;
for (let i = 0; i < sentence.length; i++) {

  setTimeout(() => {
    // print the char here
    process.stdout.write(sentence[i]);
    if (i === sentence.length - 1) {
      console.log("")

    }
  }, time) // <= 1s delay to make it noticeable. Can dial it down later.
  time += 50

}