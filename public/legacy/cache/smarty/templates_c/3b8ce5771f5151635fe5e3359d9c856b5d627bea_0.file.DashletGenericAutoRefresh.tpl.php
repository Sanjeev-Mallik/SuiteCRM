<?php
/* Smarty version 4.5.3, created on 2025-09-03 06:58:14
  from '/Users/sanjeev/Sites/Dev/SuiteCRM/public/legacy/include/Dashlets/DashletGenericAutoRefresh.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.5.3',
  'unifunc' => 'content_68b7e7060b7798_23095407',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '3b8ce5771f5151635fe5e3359d9c856b5d627bea' => 
    array (
      0 => '/Users/sanjeev/Sites/Dev/SuiteCRM/public/legacy/include/Dashlets/DashletGenericAutoRefresh.tpl',
      1 => 1754486155,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_68b7e7060b7798_23095407 (Smarty_Internal_Template $_smarty_tpl) {
?><input type="hidden" id="<?php echo $_smarty_tpl->tpl_vars['dashletId']->value;?>
_offset" name="<?php echo $_smarty_tpl->tpl_vars['dashletId']->value;?>
_offset" value="0">
<input type="hidden" id="<?php echo $_smarty_tpl->tpl_vars['dashletId']->value;?>
_interval" name="<?php echo $_smarty_tpl->tpl_vars['dashletId']->value;?>
_interval" value="<?php echo $_smarty_tpl->tpl_vars['dashletRefreshInterval']->value;?>
">
<?php echo '<script'; ?>
 type='text/javascript'>
<!--
var autoRefreshProcId<?php echo $_smarty_tpl->tpl_vars['strippedDashletId']->value;?>
 = '';
if (document.getElementById("<?php echo $_smarty_tpl->tpl_vars['dashletId']->value;?>
_interval").value > 0) {
    autoRefreshProcId<?php echo $_smarty_tpl->tpl_vars['strippedDashletId']->value;?>
 = setInterval('refreshDashlet<?php echo $_smarty_tpl->tpl_vars['strippedDashletId']->value;?>
()', "<?php echo $_smarty_tpl->tpl_vars['dashletRefreshInterval']->value;?>
");
}	
function refreshDashlet<?php echo $_smarty_tpl->tpl_vars['strippedDashletId']->value;?>
() 
{
    //refresh only if offset is 0
    if ( SUGAR.mySugar && document.getElementById("<?php echo $_smarty_tpl->tpl_vars['dashletId']->value;?>
_offset") !== null && document.getElementById("<?php echo $_smarty_tpl->tpl_vars['dashletId']->value;?>
_offset").value == '0' ) {
        SUGAR.mySugar.retrieveDashlet("<?php echo $_smarty_tpl->tpl_vars['dashletId']->value;?>
","<?php echo $_smarty_tpl->tpl_vars['url']->value;?>
");
    }
}
-->
<?php echo '</script'; ?>
><?php }
}
