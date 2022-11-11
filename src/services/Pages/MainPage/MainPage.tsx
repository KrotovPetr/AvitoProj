import React, {FC, useEffect, useState} from 'react';
import Article from "../../Components/Article/Article";
import "./mainPageStyles.scss"
const MainPage: FC = () => {
    const [articles, setArr] = useState<any>([]);
    const arr = [
        {
            "by": "lemaudit",
            "descendants": 0,
            "id": 33564354,
            "score": 1,
            "time": 1668189973,
            "title": "Women are set to make more money than men on NIL deals in college basketball",
            "type": "story",
            "url": "https://www.marketwatch.com/story/in-the-final-four-more-women-than-men-are-atop-the-list-of-players-poised-to-earn-the-most-in-nil-money-11649099653"
        },
        {
            "by": "PaulHoule",
            "descendants": 0,
            "id": 33564345,
            "score": 1,
            "time": 1668189943,
            "title": "Alzheimer's disease can be diagnosed before symptoms emerge",
            "type": "story",
            "url": "https://medicalxpress.com/news/2022-11-alzheimer-disease-symptoms-emerge.html"
        },
        {
            "by": "trifit",
            "descendants": 0,
            "id": 33564342,
            "score": 1,
            "time": 1668189936,
            "title": "Will Writing in Dubai",
            "type": "story",
            "url": "https://www.gulfadvocates.com/wills-writing-services-dubai/"
        },
        {
            "by": "mephos",
            "descendants": 0,
            "id": 33564338,
            "score": 1,
            "time": 1668189898,
            "title": "Critter and Guitari Release Microphone",
            "type": "story",
            "url": "https://www.critterandguitari.com/microphone"
        },
        {
            "by": "bigthymer",
            "descendants": 0,
            "id": 33564326,
            "score": 2,
            "time": 1668189857,
            "title": "Afghan couple accuse US Marine of abducting their baby",
            "type": "story",
            "url": "https://apnews.com/article/afghan-baby-us-marine-custody-battle-b157557538b84b288a0a8415735e24ab"
        },
        {
            "by": "giuliomagnifico",
            "descendants": 0,
            "id": 33564321,
            "score": 1,
            "time": 1668189845,
            "title": "Man built a PC inside a microwave to save money",
            "type": "story",
            "url": "https://twitter.com/jakesucky/status/1589669753106628609"
        },
        {
            "by": "kordlessagain",
            "descendants": 1,
            "id": 33564311,
            "kids": [
                33564312
            ],
            "score": 1,
            "time": 1668189818,
            "title": "How to Model True Crime Data in FeatureBase",
            "type": "story",
            "url": "https://www.featurebase.com/blog/a-true-crime-story"
        },
        {
            "by": "obblekk",
            "descendants": 1,
            "id": 33564284,
            "kids": [
                33564361
            ],
            "score": 1,
            "time": 1668189719,
            "title": "Saving Twitter: 6 Steps for Brand Ad Networks",
            "type": "story",
            "url": "https://magoop.substack.com/p/six-simple-steps-to-save-twitter"
        },
        {
            "by": "jseliger",
            "descendants": 0,
            "id": 33564283,
            "score": 1,
            "time": 1668189711,
            "title": "Further to Fall: Russia’s Grinding Mobilization",
            "type": "story",
            "url": "https://ridl.io/further-to-fall-russia-s-grinding-mobilization/"
        },
        {
            "by": "dddavid",
            "descendants": 0,
            "id": 33564274,
            "score": 1,
            "time": 1668189680,
            "title": "Google VPN Is Coming to Desktop: Should You Use It?",
            "type": "story",
            "url": "https://www.makeuseof.com/should-you-use-google-ones-vpn-desktop/"
        }
    ]
    const getArticles = async function(){
        // let articleArr: any = await fetch("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty")
        //     .then(response => response.json())
        //     .then(result => result)
        //     .catch(error => console.log('error', error));
        // let arr: any = [];
        //
        // for(let i=0;i<10;i++){
        //           await fetch(`https://hacker-news.firebaseio.com/v0/item/${articleArr[i]}.json?print=pretty`)
        //              .then(response => response.json())
        //              .then(result => arr.push(result))
        //              .catch(error => console.log('error', error));
        // }
        // setArr(arr);
       //  for(let i=0;i<100;i++){
       //       await fetch(`https://hacker-news.firebaseio.com/v0/item/${articleArr[i]}.json?print=pretty`)
       //          .then(response => response.json())
       //          .then(result => arr.push(result))
       //          .catch(error => console.log('error', error));
       //  }
       // setArr(arr);
    }
    useEffect(()=>{
       getArticles();
    },[]);

    return (
        <div className="articlesContainer">
            {arr.map((elem:any)=>{
                return <Article key = {elem.id} elem={elem}/>
            })}
        </div>
    );
};

export default MainPage;