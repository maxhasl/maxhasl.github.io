<?php
/**
 * Основные параметры WordPress.
 *
 * Этот файл содержит следующие параметры: настройки MySQL, префикс таблиц,
 * секретные ключи, язык WordPress и ABSPATH. Дополнительную информацию можно найти
 * на странице {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Кодекса. Настройки MySQL можно узнать у хостинг-провайдера.
 *
 * Этот файл используется сценарием создания wp-config.php в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать этот файл
 * с именем "wp-config.php" и заполнить значения.
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define('DB_NAME', 'bagreyev_newc');

/** Имя пользователя MySQL */
define('DB_USER', 'bagreyev_newc');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', '28C6689F7A');

/** Имя сервера MySQL */
define('DB_HOST', 'localhost');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется снова авторизоваться.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '7,e|~$Bh^tJ%y!,X;F#)`Zx}l8#Q6.}}_K+<D<#f~z6]7+!~D#)d`CvJEpFuX:~Y');
define('SECURE_AUTH_KEY',  'H:YHO$3JOPoZj2U29ec>YY~nKG{|T@dmJj5}I%YP{DI2ynl3M:FPKaVCqf3wpthj');
define('LOGGED_IN_KEY',    't_kQfM5uFj|Yf]+$HUwLk+IGqSl[_~+_PtEKi*roe(,?[+_23+PT>Jqwt4C+gS8N');
define('NONCE_KEY',        'c/3m{V%LIl.Tnm*_|(Bzl86g1d#=E%* I:@}sM]wn-,0BtT+| d&u08YoB~s;< -');
define('AUTH_SALT',        '(vLU9EV/T?_1B/+cwi>JuEawb~aDWJ&=j1J?*g>ud$ V1OvkSO>wS:BZHz_cPG35');
define('SECURE_AUTH_SALT', '%gZ<|Jh[5>D%9/bd=Tr@_4c]Sbc1(uPaunkwJ+Sq/.@Ka9j_zJY${:]]E`F{p-/!');
define('LOGGED_IN_SALT',   '=ATM].Dm|4t&%6G2(8tmke cpo{fU|.xS#CD9wa:Q^sGgt@.NyJ}I[E|7j.*-B|6');
define('NONCE_SALT',       'RFT t@i:AM`G$TDx=Je0gl<B O-,D?X2pCVQIcaC_-`@ZGL`kNN%d;D.+5J:AIk,');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько блогов в одну базу данных, если вы будете использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'wp_';

/**
 * Язык локализации WordPress, по умолчанию английский.
 *
 * Измените этот параметр, чтобы настроить локализацию. Соответствующий MO-файл
 * для выбранного языка должен быть установлен в wp-content/languages. Например,
 * чтобы включить поддержку русского языка, скопируйте ru_RU.mo в wp-content/languages
 * и присвойте WPLANG значение 'ru_RU'.
 */
define('WPLANG', 'ru_RU');

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Настоятельно рекомендуется, чтобы разработчики плагинов и тем использовали WP_DEBUG
 * в своём рабочем окружении.
 */
define('WP_DEBUG', false);

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');
