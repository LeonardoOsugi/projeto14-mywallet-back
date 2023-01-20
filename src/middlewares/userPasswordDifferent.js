export function userPasswordDifferent(req, res, next){
    const {password, confirmPassword} = req.body;
    if(password !== confirmPassword){
        res.status(400).send("Uma senha esta diferente da outra");
        return;
    }
    next();
};