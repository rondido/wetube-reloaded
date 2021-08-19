
const fakeUser ={
    username:"Park",
    loggedIn:false,
};

export const tranding = (req,res) => {
    const videos =[
        {
            title: "First Video",
            rating:5,
            comments:2,
            createdAt: "2 mintues ago",
            views:59,
            id:1
        },
        {
            title: "secound Video",
            rating:5,
            comments:2,
            createdAt: "2 mintues ago",
            views:59,
            id:2
        },
        {
            title: "third Video",
            rating:5,
            comments:2,
            createdAt: "2 mintues ago",
            views:59,
            id:3
        },
    ];
    return res.render("home", {pageTitle:"Home", videos});
};
export const see = (req,res) =>
     res.render("watch");
export const edit = (req,res) =>{
    console.log(req.params);
    return res.send("edit");
};
export const search = (req,res) => res.send("search");
export const upload =(req,res) => res.send("upload");
export const deletevideo = (req,res) => {
    console.log(req.params);
    return res.send("deletevideo");
}
