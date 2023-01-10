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
    },
    {
        id: 4,
        user_id: 3,
        content: 'chém gió cho vui'
    }
]

// Hàm lấy danh sách users theo mảng ids
function getUsersByIds(userIds) {
    return users.filter(function (user) {
        return userIds.includes(user.id);
    })
}
// lấy danh sách user_id của danh sách comments
const userIds = comments.map(function (comment) {
    return comment.user_id;
})

// danh sách users tham gia comment
const usersByIds = getUsersByIds(userIds);

const commentBlock = document.getElementById('comment-block');
var html = '';
comments.forEach(function (comment) {
    //  user tham gia comment này
    const user = usersByIds.find(function (user) {
        return user.id === comment.user_id;
    })
    html += `<li><strong>${user.name}</strong>: ${comment.content}</li>`;
});
commentBlock.innerHTML = html;