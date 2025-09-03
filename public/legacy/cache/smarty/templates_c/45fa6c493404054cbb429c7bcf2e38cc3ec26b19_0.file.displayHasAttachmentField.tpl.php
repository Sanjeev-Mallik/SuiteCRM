<?php
/* Smarty version 4.5.3, created on 2025-09-03 07:58:20
  from '/Users/sanjeev/Sites/Dev/SuiteCRM/public/legacy/modules/Emails/templates/displayHasAttachmentField.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.5.3',
  'unifunc' => 'content_68b7f51c16ef44_92174951',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '45fa6c493404054cbb429c7bcf2e38cc3ec26b19' => 
    array (
      0 => '/Users/sanjeev/Sites/Dev/SuiteCRM/public/legacy/modules/Emails/templates/displayHasAttachmentField.tpl',
      1 => 1754486155,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_68b7f51c16ef44_92174951 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_checkPlugins(array(0=>array('file'=>'/Users/sanjeev/Sites/Dev/SuiteCRM/public/legacy/include/Smarty/plugins/function.sugar_getimagepath.php','function'=>'smarty_function_sugar_getimagepath',),));
?>

<div class="email-has-attachement">
    <?php if (!empty($_smarty_tpl->tpl_vars['bean']->value)) {?>
        <?php if (!empty($_smarty_tpl->tpl_vars['bean']->value['has_attachment'])) {?>
            <div class="email-has-attachment"><span class="glyphicon"><img src="<?php echo smarty_function_sugar_getimagepath(array('directory'=>'','file_name'=>'attachment-indicator','file_extension'=>"svg",'file'=>'attachment-indicator.svg'),$_smarty_tpl);?>
"/></span></div>
        <?php }?>

    <?php }?>
</div>
<?php }
}
