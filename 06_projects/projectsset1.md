# Projects related to DOM
## Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code
## Project 1
```
console.log("Manisha")
const buttons = document.querySelectorAll('.button');
console.log(buttons);
const body = document.querySelector('body');

buttons.forEach(function(btn){
  btn.addEventListener('click',function(e){
    body.style.backgroundColor = e.target.getAttribute('id');
  });
});
```

## Project 2
```
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  if (height < 0 || height == '' || isNaN(height)) {
    result.innerHTML = `Please enter a valid height ${height}`;
  }
  if (weight < 0 || weight == '' || isNaN(weight)) {
    result.innerHTML = `Please enter a valid weight ${weight}`;
  } else {
    const bmi = weight / ((height * height) / 10000).toFixed(2);
    result.innerHTML = `<span> ${
      bmi < 18.6
        ? 'Under-Weight'
        : bmi >= 18.6 && bmi <= 24.9
        ? 'Normal Range'
        : 'Over-Weight'
    } ${bmi}</span>`;
  }
});
```

## Project 3
setInterval(function(){
  document.querySelector("#clock").innerHTML = 
new Date().toLocaleTimeString()
},1000);
