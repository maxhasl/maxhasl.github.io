<?php
include 'lib/Controller.php';
$conf = include 'config.php';

$app = new KapController($conf);
$app->run();

