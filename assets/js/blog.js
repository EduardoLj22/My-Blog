document.write('<script src="assets/js/logic.js"></script>');

document.addEventListener('DOMContentLoaded', () => {
    const blogPostsContainer = document.getElementById('blog-posts');
    const posts = getBlogPosts();

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <p><strong>Author:</strong> ${post.username}</p>
        `;

        blogPostsContainer.appendChild(postElement);
    });

    setup();
});