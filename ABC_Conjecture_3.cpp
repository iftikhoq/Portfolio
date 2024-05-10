#include <bits/stdc++.h>
#define ll              long long
#define yes             cout << "YES\n";
#define no              cout << "NO\n";
#define f1(n)           for(int i=0;i<n;i++)
#define f2(a,n)         for(int i=a;i<n;i++)
#define vi              vector <long long>
#define pb              push_back
#define sp              << " "
#define endl            "\n"
#define MOD             1000000007

using namespace std;
void solve(){
    ll n;
    cin >> n;
    string str;
    cin >> str;
    int a[str.size()+1],c[str.size()+1];
    a[0]=0;
    c[str.size()]=0;

    f1(str.size()){
        a[i+1]=a[i];
        c[str.size()-i]=c[str.size()-1-i];
        if(str[i]=='a') a[i+1]++;
        if(str[str.size()-i-1]=='c') c[str.size()-i]++;
    }

    ll count(0);
    f1(str.size()){
        if(str[i]=='b') if(a[i]>1 && c[i]>1) 
    }

}   
signed main(){
    ios::sync_with_stdio(0); cin.tie(NULL); cout.tie(NULL);
   
   //  int test;
   //  cin >> test;
   //  while (test--) 
            solve();
}