n=int(input())
m=int(input())
x=""
c=[['o' for i in range(m)] for i in range(n)]
for i in range(n):
    for j in range(m):
        c[i][j]=(str(input()))
        


for i in range(n):
    for j in range(m):
        x+=c[i][j]
    c[i]=x
    x=""



#logic starts

def cost(a):
    if(a=='B'):
        return 5
    else:
        return 3

    
def flip(a):
    if(a=='B'):
       a='G'
    elif(a=='G'):
       a='B'
    return(a)

       
def alternate(a,b):
    x=0
    fp=0
    for i in range(len(a)):
        if(a[i]!=b):
            x+=cost(a[i])
            fp+=1
        b=flip(b)
        
    return(x)

# driver
total=0
totalArray=[]
Z="B"
for i in range(n):
    total+=alternate(c[i],Z)
    Z=flip(Z)
    
    
totalArray.append(total)

total=0
Z="G"
for i in range(n):
    total+=alternate(c[i],Z)
    Z=flip(Z)
    
totalArray.append(total)

print(min(totalArray))


    
    

    


    
