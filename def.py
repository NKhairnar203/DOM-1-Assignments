counter={}
Def iscounter(contry):
    if contry in counter:
        counter[contry]+=1
    else:
        counter[contry]=1

iscounter("china")
iscounter("Japan")
iscounter("china")

print(len(counter))