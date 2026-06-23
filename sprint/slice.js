function extractContent(content, start, end) {
    return content.slice(content.indexOf(start), content.lastIndexOf(end) + 1);
}

const blogPosts = ['post1', 'post2', 'post3', 'post4', 'post5'];
const blogPost = 'The big brown fox';
