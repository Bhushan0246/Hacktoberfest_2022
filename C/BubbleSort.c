#include <stdio.h>

int main()
{
  int arr[50], n, i, j, tr;

  printf("\nEnter number of elements:\n");
  scanf("%d", &n);

  printf("\nEnter the elements:\n", n);

  for (i = 0; i < n; i++)
  {
    scanf("%d", &arr[i]);
  }

  for (i = 0 ; i < n - 1; i++)
  {
    for (j = 0 ; j < n - i - 1; j++)
    {
      if (arr[j] > arr[j+1]) 
      {
        tr = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = tr;
      }
    }
  }

  printf("\nElements after bubble sorting:\n");

  for (i = 0; i < n; i++)
{
     printf("%d\n", arr[i]);
}

  return 0;
}