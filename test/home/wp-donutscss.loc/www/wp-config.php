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
define('DB_NAME', 'donutscss');

/** MySQL database username */
define('DB_USER', 'donutscss');

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
define('AUTH_KEY',         'c}O<R|cR{7`mSjNL5Jm)LXJq/RIT!-2I5Nmd55#WK7WU*Ox}6[;_a,VU=y|*vq5G');
define('SECURE_AUTH_KEY',  'W<m+cdIm[d@4I8c>nuezTBOt0?r75R)w:5Nd<9PZnX8Wvvbl{7FPlT?T{I@ME*>R');
define('LOGGED_IN_KEY',    'P|r22o~3 OCcUaU<* #hf-CLNqS6;Nq|_kxO:X!Dj9QkNlqL&Q8d!nW.BASI|@sj');
define('NONCE_KEY',        '0e2Ir6i!ik1c_a]YewlNE9fxKo,h@i>X~s:v]9}VPvNc1 ]PD]4 @!I1W`.Yvj}C');
define('AUTH_SALT',        '0YGzT=gJ5[k0Qf)Q9J8-(d9f0!02<`v#-L[FO<t9;rjwx)+Ry50~Jk}D4;;=5;Ag');
define('SECURE_AUTH_SALT', '`}cy/p(6iK6 G@)x=;L#KeBj@(>V`d7&{^om0q}-U/mwpk2pvxSDBZvPQ;XIO;V_');
define('LOGGED_IN_SALT',   ']K0[nF!fo4<`I7.:0>]fYf7iJ1&_RYF;S?]r#b,IrP#QD0d:QjxJRK>x?hj)g*Us');
define('NONCE_SALT',       '9EN-yD_jcwCrsbLC[.0G7[*[O7}v42T#8Z=pxHs#BnhgGXuZ0Endb4N)1U)t@I|H');

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

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

//define('WP_DEBUG', true);

define('FS_METHOD', 'direct');

