from lxml import etree
import requests
import pymysql
import urllib.request
from bs4 import BeautifulSoup
from urllib.request import urlopen

"""urls = ['https://movie.douban.com/']
session = requests.Session()
with session:
    for url in urls:
        response = session.get(url,headers = {
            'user-agent':"User-Agent: Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; 360SE)"
        })

        content = response.text
        html = etree.HTML(content)
        tltles = html.xpath("//div[@class='billboard-bd']//tr")
        for t in tltles:
            xx = t.xpath('.//text()')
            print(''.join(map(lambda x:x.strip(),xx)))
            print('-'*30)
"""
movielist = []
url = "https://movie.douban.com/top250"


# 返回TOP250的html代码
def get_html(url):
    # 访问Url
    res = urllib.request.urlopen(url)
    # 读取并解析
    html = res.read().decode()
    return html


# 返回电影名
def parse_html(htmlfile):
    # 指定Beautiful的解析器为“html.parser”
    mysoup = BeautifulSoup(htmlfile, 'html.parser')
    movie_zone = mysoup.find('ol')
    movie_list = movie_zone.find_all('li')
    for movie in movie_list:
        movie_name = movie.find('span', attrs={'class': 'title'}).getText()
        movielist.append(movie_name)
        nextpage = mysoup.find('span', attrs={'class': 'next'}).find('a')

    if nextpage:
        new_url = url + nextpage['href']
        parse_html(get_html(new_url))


def save_data(movielist):
    con = pymysql.connect(host='localhost', user='root', password='root', db='text')
    mycursor = con.cursor()
    # sql = 'create table movie1(ID VARCHAR(10),name VARCHAR(20))DEFAULT CHARSET = UTF8'
    # mycursor.execute(sql)
    sql = ''
    for id ,movie in enumerate(movielist):
        sql = "insert into movie1 values(%s,%s)"
        mycursor.execute(sql,(id, movie))
    con.commit()
    mycursor.close()
    con.close()


reshtml = get_html(url)

parse_html(reshtml)
print(movielist)
save_data(movielist)

