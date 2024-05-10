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
   int n;
   cin >> n;
   vi v(n);
   f1(n) cin >>v[i];

   sort(v.begin(),v.end());
    int i=0;
    ll total(0);
   for(i=0;i<n/2;i++){
        total-=v[i];
   } 
   for(i;i<n;i++){
        total+=v[i];
   } 
   cout << total << endl;
}   
signed main(){
    ios::sync_with_stdio(0); cin.tie(NULL); cout.tie(NULL);
   
    int test;
    cin >> test;
    while (test--) 
            solve();
}