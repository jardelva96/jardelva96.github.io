document.addEventListener('DOMContentLoaded', () => {
    // Load initial posts
    const initialPosts = [
        {
            user: "John Dev",
            content: "Check out my new Node.js project! It's a to-do app with a twist."
        },
        {
            user: "Jane Coder",
            content: "Does anyone have resources on learning Rust? I'm just getting started."
        }
    ];
    const postsContainer = document.getElementById('posts-container');
    initialPosts.forEach(post => addPostToDOM(post.user, post.content));
});

function addPost() {
    const postInput = document.getElementById('post-input');
    const content = postInput.value.trim();
    if (content) {
        addPostToDOM('Jardel Alves', content);
        postInput.value = ''; // Clear the input after posting
    } else {
        alert('Please write something before posting!');
    }
}

function addPostToDOM(user, content) {
    const postsContainer = document.getElementById('posts-container');
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');
    postDiv.innerHTML = `
        <h3>${user}</h3>
        <p>${content}</p>
    `;
    postsContainer.prepend(postDiv); // Add the new post at the top
}
