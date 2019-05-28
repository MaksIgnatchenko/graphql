<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>

    <title>{{ config('app.name', 'Laravel') }}</title>

    <link rel="shortcut icon" href="{{ asset('favicon.ico') }}">
    <link href="{{ asset('css/vendor.css') }}" rel="stylesheet" type="text/css">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet" type="text/css">
    <link href="{{ asset('css/admiry.css') }}" rel="stylesheet" type="text/css">
    <link href="{{ asset('css/icons.css') }}" rel="stylesheet" type="text/css">
</head>

<body class="fixed-left">



<div id="app">
    <div id="wrapper" class="wrapper-fixed-height">
        <!-- SIDEBAR START-->
        <div class="left side-menu">
            <button type="button" class="button-menu-mobile button-menu-mobile-topbar open-left waves-effect">
                <i class="ion-close"></i>
            </button>

            <br><br>

            <div class="topbar-left">
                <div class="text-center">
                    <img src="{{ asset('images/logo.svg') }}" height="50" alt="logo">
                </div>
            </div>

            <div class="sidebar-inner slimscrollleft">
                <div id="sidebar-menu">
                    <ul>
                        <li class="active">
                            <a href="#"><i class="fa fa-user"></i> <span>My profile</span></a>
                        </li>
                    </ul>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
        <!--SIDEBAR END-->

        <!-- CONTENT START-->
        <div class="content-page">
            <div class="content">
                <!-- TOPBAR START-->
                <div class="topbar">
                    <nav class="navbar-custom">
                        <ul class="list-inline float-right mb-0">
                            <li class="list-inline-item dropdown notification-list">
                                <a class="nav-link dropdown-toggle arrow-none waves-effect nav-user" data-toggle="dropdown" href="#"
                                   role="button"
                                   aria-haspopup="false" aria-expanded="false">
                                    <img src="{{ asset('images/hamburger.png') }}"
                                         alt="user" class="rounded-circle">
                                </a>
                                <div class="dropdown-menu dropdown-menu-right profile-dropdown ">
                                    <a class="dropdown-item" href="#">
                                        <i class="mdi mdi-logout m-r-5 text-muted"></i>Logout</a>
                                </div>
                            </li>
                        </ul>
                        <ul class="list-inline menu-left mb-0">
                            <li class="list-inline-item">
                                <button type="button" class="button-menu-mobile open-left waves-effect">
                                    <i class="ion-navicon"></i>
                                </button>
                            </li>
                            <li class="hide-phone list-inline-item app-search">
                                <h3 class="page-title">User profile</h3>
                            </li>
                        </ul>
                        <div class="clearfix"></div>
                    </nav>
                </div>
                <!-- TOPBAR END-->

                <div class="content">
                    <div class="clearfix"></div>
                    <profile v-bind:user="me"></profile>
                </div>
            </div>

            <footer class="footer">
                {{date('Y')}} {{config('app.name')}}
            </footer>

        </div>
        <!-- CONTENT END-->
    </div>
</div>

<script src="{{ asset('js/vendor.js') }}"></script>
<script src="{{ asset('js/app.js') }}"></script>

</body>
</html>

