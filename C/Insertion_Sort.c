#include<stdio.h>
void insertion(int[],int);
int main(){
    int i,n,arr[20],j,key;
    printf("Enter The Number of Elements of The Array: \n");
    scanf("%d",&n);
    printf("Enter Array Elements: \n");
    for(i=0;i<n;i++)
    {
        scanf("%d",&arr[i]);
    }
    insertion(arr,n);
    printf("Sorted List in ascending order: \n");
    for(i=0;i<n;i++)
    {
        printf("%d\n",arr[i]);
    }
    return 0;
}
void insertion(int arr[], int b)
{   int key,j;
    for(int i=1;i<b;i++)
    {
        key=arr[i];
        j=i-1;
        while(j>=0 && arr[j]>key)
        {
            arr[j+1]=arr[j];
            j=j-1;
        }
        arr[j+1]=key;
    }
}