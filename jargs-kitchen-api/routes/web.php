<?php

$router->get('/', function () use ($router) {
    return $router->app->version();
});

/* auth routes */
/*
$router->post('/register', 'AuthController@register');
$router->post('/login', 'AuthController@login');
$router->get('/user', ['middleware' => 'auth:api', 'uses' => 'AuthController@getUser']);*/


    $router->post ('/register','AuthController@register'); //working
    $router->post ('/login','AuthController@login'); //working
    //$router->get ('/user','AuthController@show'); //test

    //$router->delete ('/{id}','AuthController@destroy'); // test
    //$router->post ('/logout','AuthController@logout');//test

    $router->options('/{any:.*}', function () {
    return response('', 200);
});
