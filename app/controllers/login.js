exports.get_login = (req,res,next) => {
    res.render('login', { title: 'Login' });
}