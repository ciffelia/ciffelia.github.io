/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 *
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{

		var keywords =	'abs absf alloc and array assert atan await axobj bcopy '+'bgscr bload bmpsave bmscr boxf break bsave buffer button callfunc case '+'chdir chdpm chgdisp chkbox circle clrobj cls cnt cnvstow cnvwtos color '+'combox comevarg comevdisp comevent comobj comres continue cos ctype ddim default '+'delcom delete delmod dialog dim dimtype dir_cmdline dir_cur dir_desktop dir_exe '+'dir_mydoc dir_sys dir_win dirinfo dirlist do double dup dupptr else '+'end err exec exgoto exist expf float font for foreach '+'gcopy getkey getpath getstr gettime ginfo ginfo_act ginfo_b ginfo_cx ginfo_cy '+'ginfo_dispx ginfo_dispy ginfo_g ginfo_intid ginfo_mesx ginfo_mesy ginfo_mx ginfo_my ginfo_paluse ginfo_r '+'ginfo_sel ginfo_sizex ginfo_sizey ginfo_sx ginfo_sy ginfo_vx ginfo_vy ginfo_winx ginfo_winy ginfo_wx1 '+'ginfo_wx2 ginfo_wy1 ginfo_wy2 global gmode gosub goto grect groll grotate '+'gsel gsquare gzoom hdc hinstance hspstat hspver hsvcolor hwnd if '+'input instr int iparam label length length2 length3 length4 libptr '+'limit limitf line listbox logf logmes loop looplev lparam lpeek '+'lpoke mcall mci memcpy memexpand memfile memset mes mesbox mkdir '+'mmload mmplay mmstop mouse mousew mousex mousey mref msgothic msmincho '+'newcom newmod next not noteadd notedel noteget noteinfo noteload notemax '+'notesave notesel notesize noteunsel nullptr objinfo objmode objprm objsel objsize '+'on onclick oncmd onerror onexit onkey or palcolor palette peek '+'pget picload poke pos print pset pval querycom randomize redraw '+'refdval refstr repeat return rnd run sarrayconv screen sdim sendmsg '+'sin sptr sqrt stat stick stop str strf strlen strmid '+'strsize sublev swbreak swend switch syscolor sysfont sysinfo tan thismod '+'title until var varptr vartype varuse wait wend while width '+'winobj wparam wpeek wpoke wptr wstr xor';

this.regexList=[

	{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:'comments'},

	{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:'comments'},

	{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:'string'},

{regex:new RegExp(';.*','gm'),css:'comments'},

{regex:new RegExp('\\#\\w+','gm'),css:'preprocessor'},

{regex:new RegExp('\\*\\w+','gm'),css:'labels'},

{regex:new RegExp('\\$\\w+','gm'),css:'vars'},

{regex:new RegExp(this.getKeywords(keywords),'gm'),css:'keyword'}

];

	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['hsp'];

	SyntaxHighlighter.brushes.Hsp = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();