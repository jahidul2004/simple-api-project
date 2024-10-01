const loadData = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await res.json();
    console.log(data);
    processData(data);
};

let loadCount = 0;

const processData = (data) => {
    if (loadCount < 1) {
        for (post of data) {
            let id = post.id;
            let title = post.title;
            let body = post.body;

            let div = document.createElement("div");
            div.innerHTML = `
                <div class="bg-success p-5 rounded-lg">
                    <h1 class="text-2xl font-bold">${id}</h1>
                    <h1 class="text-3xl font-extrabold my-2">${title}</h1>
                    <p>${body}</p>
                </div>
            `;
            document.getElementById("data-container").appendChild(div);
        }
        loadCount++;
    } else {
        alert("Data already loaded!");
    }
};
