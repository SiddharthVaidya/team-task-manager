

const logoutController = (req, res) =>{
    let token = req.headers.authorization
    if(!token){
        return res.status(401).json({message: "Unaothorized"});
    }
    token = token.split(' ')[1];
    
}