<?php
/**
 * Основные параметры WordPress.
 *
 * Этот файл содержит следующие параметры: настройки MySQL, префикс таблиц,
 * секретные ключи и ABSPATH. Дополнительную информацию можно найти на странице
 * {@link http://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Кодекса. Настройки MySQL можно узнать у хостинг-провайдера.
 *
 * Этот файл используется скриптом для создания wp-config.php в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать этот файл
 * с именем "wp-config.php" и заполнить значения вручную.
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define('DB_NAME', 'bagreyev_crafin');

/** Имя пользователя MySQL */
define('DB_USER', 'bagreyev_crafin');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', 'cgnwqede');

/** Имя сервера MySQL */
define('DB_HOST', 'localhost');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

define('FS_METHOD', 'direct'); 

define( 'WPCF7_AUTOP', false );
/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'vmV]N<GT}A~}:cpWu7-m@p)RT2VA/?Xk)6&N*IvQvUF:%D,X^S/6?eX};i7n->5n');
define('SECURE_AUTH_KEY',  '~xT2-@o7lt%AUlON^Qi3O[chU`3c2zjXp280V|i0x]|Kx+D!Mi^ZEpj8U5*u4f(n');
define('LOGGED_IN_KEY',    'gUGYM-N;=!Y=Y1eAsDJsRMRa}?)Ulbapa:8i-+,.F;H0Jyq6-&Me4w$fMS/=DK<U');
define('NONCE_KEY',        '{HY18,&/=vpy9bKz pqt;*SO_-::r||oMvmW?nGdS&I5rNk+D~Hs1-{C.{0S}.|$');
define('AUTH_SALT',        'D 3W1~,3vZ4+8G6`@]cC];Jd k^+2mew%+Tit4t*990mZMLI.<Ir}nn)`(=@-EQj');
define('SECURE_AUTH_SALT', 'H/+2 +y_%z=N?`+PLmHen}>BO<gzmO$+6|IJL*)DF/.LAD8%83g{_rklsGLP//c^');
define('LOGGED_IN_SALT',   'HQpqaC-a-R&8O+Ej~k^kS)G/tE#V|Iw`r:vv[W&1uQLb^)kr0zOb|C;]UwmrowC8');
define('NONCE_SALT',       'kL!OYa^z~+F&kC09t]<eF:wtQUUuW,9yRLL!!_u.evCC=POEuOlSa?v3q9^Rg@(>');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 */
define('WP_DEBUG', false);

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');
