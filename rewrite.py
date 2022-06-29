with open('index.html','r') as file:
    html = file.read()

html = html.split()

delay = 0
for i in range(len(html)):
    if "data-start" in html[i]:
        html[i] = html[i][:-1] + str(delay) + '"'
        delay += 1

html = ' '.join(html)
print(html)

with open('inddex.html', 'w') as file:
    file.write(html)