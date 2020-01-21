var message=("your GSTR3B for 092019 is filed successfully and acknoledged vide ARN AA050919");
var message1=("Dear Appicant,OTP for sining using EVC is 432A87.OTP will expire in 10mins.");
var splitted=message.split(" ");
var spl=message1.split(" ");
console.log(splitted);
for(var i=0;i<splitted.length;i++)
{
    if(message[i]==)
}
import java.util.*;

public class Msg
{

	public static void main(String args[])
	{
		int count=0,index=0;
		String msg1;
		Scanner sc =new Scanner(System.in);
		msg1 = sc.nextLine();
		int arr[]=new int[7];
		int j=0;
		int flag=0;
		int c=0;
		for(int i = 0;i<msg1.length();i++)
		{
      if(count==6)
      break;
			if(msg1.charAt(i)>=48 && msg1.charAt(i)<=57)
			{
        if(c==0)
        {
          count++;
          index=i;
  				c=1;
        }
        else
        count++;
			}
      else if(!(msg1.charAt(i)>=48 && msg1.charAt(i)<=57) && c==1 && count<6)
      {
        index=0;
        count=0;
        c=0;
      }

		}

		for(var i=index;i<index+6;i++)
		arr[j++]=Character.getNumericValue(msg1.charAt(i));

    for(var i=0;i<6;i++)
    console.log(arr[i]+" ");
	}
}