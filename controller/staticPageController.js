

//homepage
const homepage_view = (req, res) =>{
    res.render('index', {title:'Homepage'});
};


//about
const about_view = (req, res) =>{
    res.render('about', {title:'About Us'});
}

//login
const login_view = (req, res) =>{
    res.render('login', {title:'Login'});
}

//dashboard
const dashboard_view = (req, res)=>{
    res.render('dashboardStudent', {title:"Student Dashboard"});
}


module.exports = {
    homepage_view,
    about_view,
    login_view,
    dashboard_view
};