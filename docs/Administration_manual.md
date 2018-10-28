![RU logo](http://www.ru.is/media/HR_logo_midjad_hires.jpg)


## Administration manual


Vinnsla þessa verkefnis krefst þess að unnið verði með Heroku, CircleCI Git og fleira og mun þessi skýrsla innihalda nákvæmar leiðbeiningar í að setja upp öll kerfi svo hægt sé að hefjast handa við vinnslu verkefnisins.

### GitHub

Best er að byrja á því að tengja GitHub við tölvuna sína. 

Hér eru skrefin í að setja upp Git

1. Búa til Git Repository á GitHub.com
2. Búa til möppu locally sem mun tengjast git repository'inu
3. Afrita SSH clone kóða frá GitHub.com
4. Fara inn í fyrr greina möppu í gegnum git bash og rita:
```
git clone "URL hér"
```
5. Repositoryið er nú tengt möppunni á local tölvunni og hægt er að byrja að vinnslu verkefnisins.


### Npm

Næst er að setja upp Npm. 

1. Opna git bash
2. Fara inn í git repository möppuna
3. Rita:
```
npm init
```
&
```
npm install
```
4. Npm er nú tilbúið til notkunar við þróun verkefnisins


### Heroku

Á eftir Npm er það Heroku. Heroku er skýja þjónusta sem leyfir fyrirtækjum að build'a, afhenda (e. deliver), vakta (e. monitor) og skala öpp. Hér eru leiðbeiningar við uppsetningu:

1. Búa til Heroku aðgang (e. Account)
2. Install'a Heroku
3. Búa til pocfile sem keyrir `app.js` & `app.json`
4. Passa að git sé up to date
5. Búa til Heroku `<insert name here>`
6. Git push Heroku master
7. Heroku open

### CircleCI

Að lokum er CircleCI. CircleCI er er forrit sem vinnur að "Continuous integration". Forritið runnar test á verkefnum (e. projects) þegar nýrri útgáfu er push'að á github. Hér eru skrefin við uppsetningu CircleCI:

1. Skrá sig inn í gegnum Github
2. Bæta við því verkefni sem notandi vill prófa (e. test)
3. Þegar það er komið afstað þá getur notandi séð hvort prófanirnar (e. the tests) hafi misheppnast eða staðist. (e. fail or pass)

