function palin()
{
var a,no,b,temp=0;

const no = prompt('Enter a integer: ');

b=no;
while(no>0)
{
a=no%10;
no=parseInt(no/10);
temp=temp*10+a;
}
if(temp==b)
{
alert("Palindrome number");
}
else
{
alert("Not Palindrome number");
}
}