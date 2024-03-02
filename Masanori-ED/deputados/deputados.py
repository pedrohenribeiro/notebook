import requests
url ='https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome'
resp = requests.get(url).json()
for dep in resp['dados']:
    if dep ['siglaPartido'] == 'PL' and dep ['siglaUf'] == 'SP':
        print(dep['nome'])
        arq = dep['nome'] + '.jpg'
        f = open(arq,'wb')
        foto = requests.get(dep['urlFoto']).content
        f.write(foto)
        f.close()
