import Video from "../models/Video";



export const home = (req,res) => {
    console.log("Start");
    Video.find({},(error,videos) => {
    console.log("finished ");
    return res.render("home", { pageTitle: "Home", videos: [] });
    });
};
export const watch = (req, res) => {
  const { id } = req.params;
  return res.render("watch", { pageTitle: `Watching `  });
};
export const getEdit = (req,res) => {
    const { id } = req.params;
    return res.render("edit", {pageTitle:`Editing:` })
};
export const postEdit = (req,res) => {
     const { id } = req.params;
     const { title } = req.body;
     return res.redirect(`/videos/${id}`);
};

export const getUpload = (req,res) =>{
    return res.render("upload",{pageTitle:"Upload Video"});
};

export const postUpload =(req,res)=>{
    //이곳에서 비디오 배열을 추가 할 예정
    const {title} = req.body;
    return res.redirect("/");
};
