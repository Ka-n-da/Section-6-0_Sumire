function plus(n1: number, n2: number): number {
    return n1+n2;
}

function checkText(text1: string, text2: string): string {
  if (text1 === "test" && text2 !== "temp") {
    return text2;
  } else {
    return " " + text2 + "random text";
  }
}

const catCount = 0;

// 使われていないと言われるのでここで関数を呼び出す
plus(1, 2);
checkText("test", "hello");
console.log(catCount);
