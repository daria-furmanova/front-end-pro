function postClick() {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(data => handlePost(data))
}

function handlePost(posts) {
    console.log(posts)
    for (post of posts) {
        addPost(post)
        addBgColor(post)
    }
    addAtr(posts)
}


function addPost(post) {
    let html = template.innerHTML.replace("{{title}}", post.title);
    postContainer.insertAdjacentHTML("beforeend", html);
}

function addAtr(posts) {
    let arr = []
    posts.forEach(function(elem) {
        arr.push(elem.id)
    })
    let a = document.querySelectorAll('.text');
    for (let i = 0; i < arr.length; i++) {
        for (let e = 0; e < a.length; e++) {
            a[i].setAttribute("data-id", arr[i])
        }
    }
}

function addBgColor(post) {
    let a = document.querySelectorAll('.text');
    //console.log(post.completed);
    let r = 0
    for (let i = 0; i < a.length; i++) {
        r = a[i]
    }
    if (post.completed === true) {
        r.classList.add('bg-green')
    } else if (post.completed === false) {
        r.classList.add('bg-red')
    }
}