/*
    Name: Utkarsh
    Institute: IIIT-Guwahati
    e-mail: utk.akt@gmail.com
*/

#include <bits/stdc++.h>

using namespace std;

int power(unsigned int x, unsigned int y)
{
    if (y == 0)
        return 1;
    else if (y % 2 == 0)
        return power(x, y / 2) * power(x, y / 2);
    else
        return x * power(x, y / 2) * power(x, y / 2);
}

int main()
{

    unsigned int x, y;

    cout << "Enter the base and Power: " << endl;
    cin >> x >> y;

    cout << "Result: " << power(x, y);

    return 0;
}