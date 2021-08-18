export const tranding = (req,res) => res.render("./src/home");
export const see = (req,res) => {
    console.log(req.params);
    return  res.send(`watch video #${req.params.id}`);
};
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
