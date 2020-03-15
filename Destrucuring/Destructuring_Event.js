var news = [
    {
        "title": "sbs",
        "imgurl": "img",
        "newslist": [
            "[속보] 가상 경주도 즐기고, 내 손으로 자동차도 만들고",
            "'리랩차'가 사라진다.",
            "갤럭시S8 출시? '갤노트7' 처리 계획부터 밝혀야",
            "[블로체인 모아보기] 퍼블릭 블록체인의 한계와 프라이빗 블록체인"
        ]
    },
    {
        "title": "mbc",
        "imgurl": "img",
        "newslist": [
            "[속보] 가상 경주도 즐기고, 내 손으로 자동차도 만들고",
            "'리랩차'가 사라진다.",
            "갤럭시S8 출시? '갤노트7' 처리 계획부터 밝혀야",
            "[블로체인 모아보기] 퍼블릭 블록체인의 한계와 프라이빗 블록체인"
        ]
    }
];

function getNewsList([, { newslist }]) {
    console.log(newslist);
}
getNewsList(news);
