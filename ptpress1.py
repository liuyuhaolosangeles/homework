from lxml import etree
import requests
import pymysql
import urllib.request
from bs4 import BeautifulSoup
from urllib.request import urlopen
import json
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from pymongo import MongoClient
from bson.objectid import ObjectId

conn=MongoClient('localhost',27017)
db=conn.testdb

url = "https://www.ptpress.com.cn/recommendBook/getRecommendTypeListForPortal"
url1="https://www.ptpress.com.cn/recommendBook/getRecommendBookListForPortal"

booklist = []
urllist = []


return_data = requests.get(url).text
data = json.loads(return_data)
bookId = data['data']

for id in bookId:
    bookTagId = id['bookTagId']
        # print(bookTagId)
    new_url=url1+'?bookTagId='+bookTagId
    urllist.append(new_url)
    # print(new_url)
# https://www.ptpress.com.cn/recommendBook/getRecommendBookListForPortal?bookTagId=e3d9206b-c6c5-4d24-8633-cc2a43c018f8
# https://www.ptpress.com.cn/recommendBook/getRecommendTypeListForPortal?bookTagId=2725fe7b-b2c2-4769-8f6f-c95f04c70275
# https://www.ptpress.com.cn/recommendBook/getRecommendBookListForPortal?bookTagId=98cd2758-ce40-4596-8da4-e263e77197cb

for i in urllist:
    return_data1 = requests.get(i).text
    data1 = json.loads(return_data1)
    bookNames=data1['data']

    for j in bookNames:
        bookName  = j['bookName']
        booklist.append(bookName)
        db.col.insert({'bookName':j['bookName']})
# print(booklist)

print("success")


