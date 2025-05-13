# Projects related to DOM

## project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-h5rtzzmp?file=index.html)

# Solution code

## Project 1

```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button) => {
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        switch (e.target) {
            case grey:
                body.style.backgroundColor = e.target.id
                break;
            case white:
                body.style.backgroundColor = e.target.id
                break;
            case blue:
                body.style.backgroundColor = e.target.id
            break;
            case yellow:
                body.style.backgroundColor = e.target.id
                break;
                case purple:
                body.style.backgroundColor = e.target.id
                break;
            default:
                break;
        }
    })
})
```