// Example asynchronous functions
function asyncFunction1(param) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (param >= 0) {
        const result = param + 1;
        resolve(result);
      } else {
        reject("asyncFunction1 failed: param is less than 0");
      }
    }, 1000);
  });
}

function asyncFunction2(param) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (param >= 0) {
        const result = param * 2;
        resolve(result);
      } else {
        reject("asyncFunction2 failed: param is less than 0");
      }
    }, 1000);
  });
}

function asyncFunction3(param) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (param >= 0) {
        const result = param - 3;
        resolve(result);
      } else {
        reject("asyncFunction3 failed: param is less than 0");
      }
    }, 1000);
  });
}

function asyncFunction4(param) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (param >= 0) {
        const result = param - 3;
        resolve(result);
      } else {
        reject("asyncFunction4 failed: param is less than 0");
      }
    }, 1000);
  });
}

function asyncFunction5(param) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (param >= 0) {
        const result = param - 3;
        resolve(result);
      } else {
        reject("asyncFunction5 failed: param is less than 0");
      }
    }, 1000);
  });
}

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis elit nisl. Aliquam congue ut orci quis gravida. Etiam eleifend ultrices turpis, ut gravida ligula accumsan vel. Cras sagittis ex ac rutrum congue. Curabitur tristique nibh posuere nisi varius, non ullamcorper sapien venenatis. Maecenas non suscipit ex. Etiam commodo magna ullamcorper ex dignissim, sit amet lacinia dolor molestie. Morbi vitae scelerisque magna. Phasellus pulvinar, mauris id ornare consequat, elit sem fermentum nisl, eget varius sapien risus at felis.

Curabitur eu accumsan turpis. Fusce finibus sem euismod massa fringilla, at maximus sem pulvinar. Proin sollicitudin porta leo sed pellentesque. Mauris nisi dolor, posuere in neque sit amet, sodales lobortis justo. Etiam venenatis metus aliquet purus porta, a aliquam nunc ullamcorper. Maecenas dapibus nibh non nunc facilisis, sit amet consequat lectus scelerisque. Pellentesque neque elit, sodales a commodo vel, vulputate in diam. Quisque quis lacus hendrerit, viverra dolor vel, volutpat nisi. Sed facilisis sollicitudin lorem, sit amet vulputate ipsum convallis sit amet. Praesent ipsum orci, vestibulum non consectetur id, molestie sit amet sem. Phasellus interdum purus id erat tempor rhoncus. In viverra quam et neque placerat malesuada. Donec interdum nulla non ante finibus, eget posuere sem ultricies.

Vestibulum tempor aliquam ipsum sit amet pretium. Quisque egestas risus nisi, vel pharetra arcu ultricies a. Quisque ornare nunc sit amet libero pharetra consectetur. Aenean ligula dui, faucibus vitae tempor in, molestie ut nibh. Donec finibus ex ex, et aliquet urna accumsan et. Duis felis nisi, tincidunt nec magna sed, tincidunt volutpat lectus. Mauris at gravida ipsum. Duis vel velit lectus. Etiam auctor fermentum tortor, eget condimentum elit.`;

// Remove all spaces inside the text

const singleSentence = loremIpsum.

console.log(singleSentence);
