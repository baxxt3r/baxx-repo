README
=============

This is how you use it:
=======================
Given an HTML table with the ID "etable", 
$(document).ready(function() {
  $("#etable").trow({calculate : [1,2], precision : 2});
});

The parameters: 
===============
calculate: in the [] you put the exact columns that you need to calculate a total for them. 
Please note that the numbering starts from 0.

precision: the number of decimals you need to be shown after the floatin point.
