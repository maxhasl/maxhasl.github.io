<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'test1');

/** MySQL database username */
define('DB_USER', 'test1');

/** MySQL database password */
define('DB_PASSWORD', 'qweasd123');

/** MySQL hostname */
define('DB_HOST', '127.0.0.1');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '#14[H?Zn0_62=R rfJj/XJ)el9QUrdT+4[0<Ov)#58}Cgo,PDs#eqJA!B8haCm#x');
define('SECURE_AUTH_KEY',  '&-r|-DOF:k3;U{{GVFrj@0lT*yi.M-H!_@(0)T@DPon:xh+@*rR#|8aX2h`zZw05');
define('LOGGED_IN_KEY',    '00t`;I3irT#sYc>0O~,2(cQH4+X|+FE^6i4@er*hd*.P7BF}).aD=`Jpp<UzO_x7');
define('NONCE_KEY',        '2oZ.CkKB11WHA?VXu];Hq[Lb9 |H .>sO-~rm+0F;T;GFhW@6BkE7)@@KQUUXq>n');
define('AUTH_SALT',        '73iic3@o|RL<Bmwyy(v23OW4!]k^r_[sA-r0?4nyFu/T&LZODGBiqvEJVB(Yc5}{');
define('SECURE_AUTH_SALT', '-Lvyc0z#|H<@*gp.7kTXDTUI1jNU1,/tdXv#CZOSZs+pJ/]_)&8]0F6;1ND}(pl=');
define('LOGGED_IN_SALT',   'q?{+DgP#pJz]+XijhZ ({*3}i+[&-l|]7Jy01Afpfpq4np5tRhradH|d89Y[^*2}');
define('NONCE_SALT',       'mOq 1t/(67|))#]|g6PR IL*V<wz~GT!3q#Do?hsVTB>SUpLE(z_:uohF-2o!9=S');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
