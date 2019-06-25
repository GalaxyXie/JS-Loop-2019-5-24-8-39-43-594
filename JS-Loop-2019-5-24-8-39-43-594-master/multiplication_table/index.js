for(var row=1;row<=9;row++)
{
	for (var col = 1;col<=row; col++) {
		document.write("<span>"+row+"*"+col+"="+row*col+" </span>");
	}
	document.write("<br>");
}