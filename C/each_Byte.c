#include<stdio.h>
void main()
{
    int n;
    printf("Enter a number: ");
    scanf("%d",&n);
    int b4 = (n>>24) & 0xff;
    int b3 = (n>>16) & 0xff;
    int b2 = (n>>8) & 0xff;
    int b1 = n & 0xff;
    printf("Block1: %d\n",b1);
    printf("Block2: %d\n",b2);
    printf("Block3: %d\n",b3);
    printf("Block4: %d\n",b4);
}