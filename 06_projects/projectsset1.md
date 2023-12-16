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