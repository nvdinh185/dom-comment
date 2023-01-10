const users = [
    {
        id: 1,
        name: 'Kien Dam'
    },
    {
        id: 2,
        name: 'Son Dang'
    },
    {
        id: 3,
        name: 'Van Dinh'
    }
]

const comments = [
    {
        id: 1,
        user_id: 1,
        content: 'sao chưa ra video anh ơi'
    },
    {
        id: 2,
        user_id: 2,
        content: 'vừa ra xong em ơi'
    },
    {
        id: 3,
        user_id: 1,
        content: 'cam ơn anh'
    }

]

function getUsersByIds(userIds) {
    return users.filter(function (user) {
        return userIds.includes(user.id);
    })
}

const userIds = comments.map(function (comment) {
    return comment.user_id;
})
const usersByIds = getUsersByIds(userIds);

const commentBlock = document.getElementById('comment-block');
var html = '';
comments.forEach(function (comment) {
    const user = usersByIds.find(function (user) {
        return user.id === comment.user_id;
    })
    html += `<li>${user.name}: ${comment.content}</li>`;
});
commentBlock.innerHTML = html;