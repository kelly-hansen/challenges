async function hello() {
  return greeting = await Promise.resolve('hello');
}

hello().then(greeting => console.log(greeting));
