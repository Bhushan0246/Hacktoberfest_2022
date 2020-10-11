from bs4 import BeautifulSoup
import requests
import csv


def getLink():
    articleLinks = []
    source = requests.get("https://mashable.com/category/mobile/")
    soup = BeautifulSoup(source.text, "html.parser")

    storyStream = soup.find("div", class_="story-stream")
    articleContainer = storyStream.find_all("div", class_="article-container")

    for links in articleContainer:
        articleLink = links.find("h2", class_="article-title").a.get("href")
        articleLinks.append(articleLink)

    return articleLinks



def articleContent(link):
    content = []
    for l in link:
        contentSource = requests.get(l)
        contentSoup = BeautifulSoup(contentSource.text, "html.parser")

        contentSection = contentSoup.find("section", class_="article-content")
        paragraphs = contentSection.find_all("p")

        contentTitle = contentSoup.find("h1", class_="title").text

        tempP = []

        for para in paragraphs:
            paragraph = ""
            for p in para.text:
                try:
                    p.encode(encoding='utf-8').decode('ascii')
                except UnicodeDecodeError:
                    c = False
                else:
                    c =True

                if c == True:
                    paragraph += str(p)
            tempP.append(paragraph)


        temp = [contentTitle,tempP]

        content.append(temp)

    return content

def writeToFile (content):
    myFile = open("mashable.csv","w", newline="\n")
    fieldnames =  ['Title','Content']
    csv_writer = csv.DictWriter(myFile, fieldnames=fieldnames)
    csv_writer.writeheader()
    for data in content:
        print (data[1])
        Title = data[0]
        content = data[1]
        csv_writer.writerow({"Title": Title,"Content":content})

    myFile.close()



if __name__=="__main__":
    print ("hello")
    link = getLink()
    content = articleContent(link)
    writeToFile(content)
