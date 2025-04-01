<?php

/**
 * Plugin Name:         My Plugin
 * Plugin URI:          https://lafabriquevirtuelle.com
 * Description:         Wow amazing! Is this real???
 * Version:             0.0.1
 * Author:              Jules Luzy-Riopel
 * Author URI:          https://github.com/lolcabanon
 * License:             GPLv2 or later
 * License URI:         http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 * Requires at least:   5.0
 * Requires PHP:        7.4
 * Text Domain:         my-plugin
 * Domain Path:         /languages
 *
 * This program is free software; you can redistribute it and/or modify it under the terms of the GNU
 * General Public License version 2, as published by the Free Software Foundation. You may NOT assume
 * that you can use any other version of the GPL.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without
 * even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 */

// usual gatekeeper
defined('ABSPATH') or die("You don't belong here");

/**
 * Run at activation
 */
function my_plugin_activation()
{
    // Flush rewrite rules on plugin activation
    flush_rewrite_rules();
}

register_activation_hook(__FILE__, 'my_plugin_activation');

/**
 * Run at deactivation
 */
function my_plugin_deactivation()
{
    // Flush rewrite rules on plugin deactivation
    flush_rewrite_rules();
}

register_deactivation_hook(__FILE__, 'my_plugin_deactivation');

// bootstrap client code
include plugin_dir_path(__FILE__) . 'client/build/index.php';

// bootstrap admin code
include plugin_dir_path(__FILE__) . 'admin/build/index.php';

// some other PHP code here...
