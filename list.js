// Make an Arr with Objs
// Obj = date, title, url
// Cut the last one, paste in the first. Bam!

const blogposts = [{
    date: 'Dec 24, 2020',
    title: '7 Bad ASS CSS Tricks and Tips Every Developer Should Know',
    url: 'https://tongueblastingcoder.hashnode.dev/7-bad-ass-css-tricks-and-tips-every-developer-should-know'
}]




// display blogs
function displayBlog(blogs, arr = []) {
    blogs.innerHTML = arr.map((el, i) => {
        return `
        <div class="blogs-post">
        <p class="blogs-date">${el.date}</p>
        <h3 class="blogs-title">${el.title}</h3>
        <a href="${el.url}" target="_blank" class="blogs-link">Read More</a>
        </div>
        `;
    })
    .join('');
}