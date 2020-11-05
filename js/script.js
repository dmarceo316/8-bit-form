
// will launch rocket 
function launch(e){
e.preventDefault()
anime({
    targets: '#rocket',
    keyframes:[
    {translateX: 5},
    {translateX: 0},
    {translateX: 5},
    {translateX: 0},
    {translateX: 5},
    {translateX: 0},
    {translateX: 5},
    {translateX: 0},
    {translateY: -1000}
    ],
    easing: 'easeInOutSine',
    duration: 2000
    });
};
const launchBtn = document.getElementById("launch")
launchBtn.addEventListener("click", launch)

// makes mario jump
    anime({
        targets: '#mario',
        keyframes:[
        {translateY: -45},
        {translateY: 0}
        ],
        duration: 1500,
        loop: true,
    })

    // makes ghost move
    anime({
        targets: '#ghost',
        keyframes:[
        {translateX: 150},
        {translateY: 20},
        {translateY: 0},
        {translateY: 20},
        {translateY: 0},
        {translateX: -150},
        {translateY: 20},
        {translateY: 0},
        {translateY: 20},
        {translateY: 0},
        {translateX: 0}
        ],
        duration: 10000,
        loop: true,
        easing: 'easeInOutSine'
        });
