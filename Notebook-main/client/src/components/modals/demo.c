#include<stdio.h>
int main(){
    int num;
    // Input an integer
    printf("Enter an integer");
    scanf("%d",&num);
    //Check if the number is smaller or greater than 10
    if(num<10)
    printf("%d is less than 10",num);
    else
    printf("%d is greater than 10",num);
    return 0;
}
