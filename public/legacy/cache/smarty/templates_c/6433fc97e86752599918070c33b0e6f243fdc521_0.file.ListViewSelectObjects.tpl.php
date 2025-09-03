<?php
/* Smarty version 4.5.3, created on 2025-09-03 06:58:14
  from '/Users/sanjeev/Sites/Dev/SuiteCRM/public/legacy/themes/suite8/include/ListView/ListViewSelectObjects.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.5.3',
  'unifunc' => 'content_68b7e706020cf0_72647682',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '6433fc97e86752599918070c33b0e6f243fdc521' => 
    array (
      0 => '/Users/sanjeev/Sites/Dev/SuiteCRM/public/legacy/themes/suite8/include/ListView/ListViewSelectObjects.tpl',
      1 => 1754486156,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_68b7e706020cf0_72647682 (Smarty_Internal_Template $_smarty_tpl) {
?><div class="selectedRecords label hidden"><?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_LISTVIEW_SELECTED_OBJECTS'];?>
</div><div class="selectedRecords value hidden"><?php echo $_smarty_tpl->tpl_vars['TOTAL_ITEMS_SELECTED']->value;?>
</div>
<input type='hidden' id='selectCountTop' name='selectCount[]' value='<?php echo $_smarty_tpl->tpl_vars['TOTAL_ITEMS_SELECTED']->value;?>
' />

<?php echo '<script'; ?>
>

    $(document).ready(function () {
        setInterval(function () {
            sListView.toggleSelected();
        }, 100);
    });

<?php echo '</script'; ?>
><?php }
}
