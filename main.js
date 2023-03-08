var a=[65,765,675,234,45,55,67,87,98];
var b=a[0];
for(i=0;i<a.length;i++)
{
	if(a[i]<b)
	{
		b=a[i];
	}
}
document.write(b);
