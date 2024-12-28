ch=input("taper une phrase")
caracteres=1
mots=0
voyelles=0
for i in range(len(ch)):
    caracteres=caracteres+1
    if ch[i] in "aeiouyAEIOUY":
        voyelles=voyelles+1
    if ch[i]==" ":
        mots=mots+1
if ch[-1]=='.':
    mots=mots+1
print("Longueur de la phrase :",caracteres)
print("Nombre de mots :",mots)
print("Nombre de voyelles :",voyelles)
