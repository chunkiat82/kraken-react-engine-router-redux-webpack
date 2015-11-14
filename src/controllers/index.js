const routes = router => {

    const defaultRoute = (req, res) => {
        res.render(req.url, {});
    };

    router.get('/*', defaultRoute);

};

export default routes;
