#include<stdio.h>
int fib(int n,int a,int b)
{
  /* Declare an array to store Fibonacci numbers. */
  int f[n+1];
  int i;

  /* 0th and 1st number of the series are 0 and 1*/
  f[0] = a;
  f[1] = b;

  for (i = 2;i<n;i++)
  {
      /* Add the previous 2 numbers in the series
         and store it */
      f[i] = f[i-1] + f[i-2]*f[i-2];
  }

  return f[n];
}
void main ()
{
  int n,a,b,t,i;
    scanf("%d%d%d",&t,&a,&b);
  for(i=0;i<t;i++){
    scanf("%d",&n);
    printf("%d", fib(n,a,b));
    printf("\n");
  }

}
