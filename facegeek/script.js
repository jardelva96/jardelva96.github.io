document.addEventListener('DOMContentLoaded', () => {
    // Initialize posts from localStorage or set an empty array
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const postsContainer = document.getElementById('posts-container');

    // Function to render all posts
    function renderPosts() {
        postsContainer.innerHTML = '';
        storedPosts.forEach((post, index) => {
            const postElement = createPostElement(post, index);
            postsContainer.appendChild(postElement);
        });
    }

    // Function to create a new post element
    function createPostElement(post, index) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <h3>${post.user}</h3>
            <p>${post.content}</p>
            <div class="post-actions">
                <span class="like-btn" data-index="${index}">${post.likes} Likes</span>
                <span class="comment-btn" data-index="${index}">${post.comments.length} Comments</span>
            </div>
            <div class="comments" id="comments-${index}">
                ${post.comments.map(comment => `<p><strong>${comment.user}:</strong> ${comment.text}</p>`).join('')}
            </div>
            <textarea class="comment-input" data-index="${index}" placeholder="Add a comment..."></textarea>
            <button class="comment-submit" data-index="${index}">Submit</button>
        `;
        return postDiv;
    }

    // Function to add a new post
    function addPost() {
        const postInput = document.getElementById('post-input');
        const content = postInput.value.trim();
        if (content) {
            const newPost = {
                user: 'Jardel Alves',
                content: content,
                likes: 0,
                comments: []
            };
            storedPosts.unshift(newPost); // Add the new post to the beginning
            localStorage.setItem('posts', JSON.stringify(storedPosts)); // Save to localStorage
            renderPosts();
            postInput.value = ''; // Clear the input after posting
        } else {
            alert('Please write something before posting!');
        }
    }

    // Event listener for creating a new post
    document.querySelector('.create-post button').addEventListener('click', addPost);

    // Event listener for like buttons
    postsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('like-btn')) {
            const index = event.target.dataset.index;
            storedPosts[index].likes += 1;
            localStorage.setItem('posts', JSON.stringify(storedPosts));
            renderPosts();
        }
    });

    // Event listener for submitting comments
    postsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('comment-submit')) {
            const index = event.target.dataset.index;
            const commentInput = document.querySelector(`.comment-input[data-index="${index}"]`);
            const commentText = commentInput.value.trim();
            if (commentText) {
                const newComment = { user: 'Jardel Alves', text: commentText };
                storedPosts[index].comments.push(newComment);
                localStorage.setItem('posts', JSON.stringify(storedPosts));
                renderPosts();
            } else {
                alert('Please write a comment before submitting!');
            }
        }
    });

    // Function to show suggestions dynamically
    function showSuggestions() {
        const suggestionsContainer = document.querySelector('.suggestions');
        const suggestions = [
            { name: 'Alex Nerd', image: 'https://via.placeholder.com/50' },
            { name: 'Chris Geek', image: 'https://via.placeholder.com/50' },
            { name: 'Sam Dev', image: 'https://via.placeholder.com/50' },
            { name: 'Taylor Tech', image: 'https://via.placeholder.com/50' }
        ];
        suggestionsContainer.innerHTML = '<h2>Suggested Friends</h2>';
        suggestions.forEach(suggestion => {
            const suggestionDiv = document.createElement('div');
            suggestionDiv.classList.add('suggestion');
            suggestionDiv.innerHTML = `
                <img src="${suggestion.image}" alt="${suggestion.name}">
                <div>
                    <p>${suggestion.name}</p>
                    <button>Add Friend</button>
                </div>
            `;
            suggestionsContainer.appendChild(suggestionDiv);
        });
    }

    // Render initial posts and suggestions
    renderPosts();
    showSuggestions();
});
