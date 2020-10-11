#include<stdio.h>
#include <stdlib.h>

int main()
{
int i,j,k,l,n,x=0,m;
scanf("%d",&n);
m=n/2;
for(i=0;i<n;i++)
{
    for(j=0;j<n;j++)
    {
        if(i==m || j==m || (i==0 && j>m) || (j==0 && i<m) || (i==n-1 && j<m) || (j==n-1 && i>m))
        printf("* ");
        else
        {
        printf("   ");
        }
    }
    printf("\n");
}

}