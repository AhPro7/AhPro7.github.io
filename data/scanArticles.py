# imports
import os
import json
from bs4 import BeautifulSoup

# article data
# [
#     {
#         "title": "title",
#         "description": "description",
#         "tags": ["tag1", "tag2"],
#         "date": "date"
#     }
# ]
articles = []

# get current directory
current_dir = os.path.dirname(os.path.realpath(__file__))

# get all file names in the articles directory except index.html
files = [f for f in os.listdir(current_dir + "/../articles") if f not in ["index.html","article.html","images"]]

# get the metadata of each file from the meta tags
for i in range(len(files)):
    # read the file
    with open(current_dir + "/../articles/" + files[i], "r") as f:
        content = f.read()

    # parse the file
    soup = BeautifulSoup(content, "html.parser")

    # get the meta tags
    meta = soup.find_all("meta")

    metaData = {
        "file": files[i],
        "title": "",
        "description": "",
        "tags": [],
        "date": "",
        "img": ""
    }

    # get the data from the meta tags
    for tag in meta:
        if tag.get("name") == "title":
            metaData["title"] = tag.get("content")
        elif tag.get("name") == "description":
            metaData["description"] = tag.get("content")
        elif tag.get("name") == "tags":
            metaData["tags"] = tag.get("content").split(",")
            metaData["tags"] = [tag.strip() for tag in metaData["tags"]]
        elif tag.get("name") == "date":
            metaData["date"] = tag.get("content")
        elif tag.get("name") == "img":
            metaData["img"] = tag.get("content")
            #remove first slash

    # add the metadata to the articles list
    articles.append(metaData)

# print('img-pth', articles[0]['img'])
# generate json data
jsonData = json.dumps({
    "articles": articles
})

# write json data to file
with open(current_dir + "/articles.json", "w") as f:
    f.write(jsonData)

print("Successfully generated articles.json")