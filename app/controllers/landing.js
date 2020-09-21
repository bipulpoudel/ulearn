exports.get_landing = (req,res,next) => {
    res.render('index', { title: 'Express' });
}