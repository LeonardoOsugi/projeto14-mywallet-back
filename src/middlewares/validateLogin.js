export function validateLogin(req, res, next){
    const {email, password} = req.body;
    if(!email || !password){
        res.status(400).send("Você não preencheu o campo email ou senha");
        return;
    };
    next();
};