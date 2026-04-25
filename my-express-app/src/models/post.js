const POSTS = [
    {
        id:1,
        user_id:1,
        title: "Hellow World",
        content: "This is s simple post"
    },
    {
        id:2,
        user_id:1,
        title: "Hellow World",
        content: "This is s simple post"
    },
];
const all = () => {
    return POSTS;
};
const byId = (id) => {
    return POSTS.find((v) => v.id === id);
}
module.exports ={
    all,
    byId,
}