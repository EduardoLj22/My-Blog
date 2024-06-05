document.write('<script src="assets/js/logic.js"></script>');

document.getElementById('blog-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();
    const errorMessage = document.getElementById('error-message');

    if (!username || !title || !content) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';

        const blogPost = {
            username,
            title,
            content
        };

        let posts = getBlogPosts();
        posts.push(blogPost);
        saveBlogPosts(posts);

        redirectTo('blog.html');
    }
});