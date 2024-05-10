#include <bits/stdc++.h>
using namespace std;

int main() {
	long long x;
    cin >> x;
	while(x--){
	    long long y;
	    cin >> y;
	    long long total=((y%4)/2)+y/4;
	    cout << total << endl;
	}

}
