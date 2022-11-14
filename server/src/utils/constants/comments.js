const commentArr =  [
    {id: 1, parent: null, children: [2, 3], time: "22/05/2022", by: "terzalis", content: "Level1  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis facilisis volutpat. Pellentesque vel viverra tortor. Suspendisse potenti. Proin et lorem volutpat, ornare erat in, interdum odio. Aenean ex orci, fringilla nec neque nec, blandit ultricies risus. Phasellus quis leo sit amet turpis condimentum ultricies. Curabitur auctor neque nibh, ac."},
    {id: 2, parent: 1, children: [4], time: "22/05/2022", by: "magic", content: "Level2  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu pulvinar orci, et laoreet dolor. Cras sed gravida odio. Fusce lacinia auctor elit, at tincidunt diam consequat vel. Aenean et nunc elit. Pellentesque sit amet enim sit amet tellus luctus maximus non tempor justo. Pellentesque volutpat vestibulum lectus at eleifend. Etiam eleifend dapibus neque id pharetra. Quisque id dui tempus, tincidunt sem id, aliquam sapien. Pellentesque nec fermentum dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc pharetra leo eu euismod accumsan. Pellentesque blandit urna id massa lacinia, vitae tincidunt nibh egestas. Sed at."},
    {id: 3, parent: 1, children: [],time: "22/05/2022", by: "wanna", content: "Level2"},
    {id: 4, parent: 2, children: [], time: "22/05/2022",by: "Karpov", content: "Level3"},
    {id: 5, parent: null, children: [],time: "22/05/2022", by: "Smirnov", content: "Level4"},
    {id:6, parent: null, children: [7, 8, 9], time: "22/05/2022", by: "Zara222", content: "Level"},
    {id:7, parent: 6, children: [10, 11], time: "22/05/2022", by: "Zara222", content: "Level"},
    {id:8, parent: 6, children: [], time: "22/05/2022", by: "Zara222", content: "Level"},
    {id:9, parent: 6, children: [12], time: "22/05/2022", by: "Zara222", content: "Level"},
    {id:10, parent: 7, children: [], time: "22/05/2022", by: "Zara222", content: "Level"},
    {id:11, parent: 7, children: [], time: "22/05/2022", by: "Zara222", content: "Level"},
    {id:12, parent: 9, children: [], time: "22/05/2022", by: "Zara222", content: "Level"},

]

module.exports = commentArr;