<?php
/* Smarty version 4.5.3, created on 2025-09-03 06:58:14
  from '/Users/sanjeev/Sites/Dev/SuiteCRM/public/legacy/themes/suite8/include/MySugar/tpls/actions_menu.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.5.3',
  'unifunc' => 'content_68b7e7061e9f51_63031978',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '1d0c1256d05ad74f674a958799955178597b8458' => 
    array (
      0 => '/Users/sanjeev/Sites/Dev/SuiteCRM/public/legacy/themes/suite8/include/MySugar/tpls/actions_menu.tpl',
      1 => 1754486156,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_68b7e7061e9f51_63031978 (Smarty_Internal_Template $_smarty_tpl) {
?><ul class="dropdown-menu tab-actions">
    <?php if (!$_smarty_tpl->tpl_vars['lock_homepage']->value) {?>

        <li>
            <input class="button addDashlets" type="button" name="Edit"  data-toggle="modal" data-target=".modal-add-dashlet" value="<?php echo $_smarty_tpl->tpl_vars['lblAddDashlets']->value;?>
">
        </li>
        <li>
            <input class="button addDashboard" type="button" name="Edit"  data-toggle="modal" data-target=".modal-add-dashboard" value="<?php echo $_smarty_tpl->tpl_vars['lblAddTab']->value;?>
">
        </li>
        <li>
            <input class="button addDashboard" type="button" name="Edit"  data-toggle="modal" data-target=".modal-edit-dashboard" value="<?php echo $_smarty_tpl->tpl_vars['app']->value['LBL_EDIT_TAB'];?>
">
        </li>
    <?php }?>
</ul>
<?php }
}
