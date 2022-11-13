const commentArr =  [
    {id: 1, parent: null, children: [2, 3], time: "22/05/2022", by: "terzalis", content: "Level1  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis facilisis volutpat. Pellentesque vel viverra tortor. Suspendisse potenti. Proin et lorem volutpat, ornare erat in, interdum odio. Aenean ex orci, fringilla nec neque nec, blandit ultricies risus. Phasellus quis leo sit amet turpis condimentum ultricies. Curabitur auctor neque nibh, ac."},
    {id: 2, parent: 1, children: [4], time: "22/05/2022", by: "magic", content: "Level2  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu pulvinar orci, et laoreet dolor. Cras sed gravida odio. Fusce lacinia auctor elit, at tincidunt diam consequat vel. Aenean et nunc elit. Pellentesque sit amet enim sit amet tellus luctus maximus non tempor justo. Pellentesque volutpat vestibulum lectus at eleifend. Etiam eleifend dapibus neque id pharetra. Quisque id dui tempus, tincidunt sem id, aliquam sapien. Pellentesque nec fermentum dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc pharetra leo eu euismod accumsan. Pellentesque blandit urna id massa lacinia, vitae tincidunt nibh egestas. Sed at."},
    {id: 3, parent: 1, children: [],time: "22/05/2022", by: "wanna", content: "Level2"},
    {id: 4, parent: 2, children: [], time: "22/05/2022",by: "Karpov", content: "Level3"},
    {id: 5, parent: null, children: [],time: "22/05/2022", by: "Smirnov", content: "Level1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius molestie purus non iaculis. Nulla dictum porta tempor. Vivamus dapibus tortor id iaculis tempor. Ut a commodo nisi, at molestie diam. Etiam dictum sem sit amet est cursus, nec congue turpis iaculis. Integer sodales convallis euismod. In ut felis diam. Vivamus euismod purus at est pellentesque, ut faucibus risus eleifend. Quisque pulvinar sagittis dui sed placerat. Nullam maximus lectus id eros imperdiet sagittis. In scelerisque eleifend ipsum vitae scelerisque. Ut ultricies nisi a tortor placerat, non hendrerit sem gravida.\n" +
            "\n" +
            "Sed cursus arcu non velit finibus gravida. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec et tempor nulla. Phasellus in egestas nibh. Fusce imperdiet eu purus vel tristique. Donec sollicitudin, velit eu eleifend dignissim, nisi ante porttitor felis, eget tincidunt purus quam nec purus. Nam gravida leo id risus aliquet, non molestie ante luctus. Sed nec nisl ac erat vestibulum tincidunt. Fusce sit amet sapien fermentum, finibus tellus eget, commodo lacus.\n" +
            "\n" +
            "Suspendisse egestas dui eu tortor tristique, nec placerat massa semper. Ut pretium, tortor ac semper tincidunt, urna ipsum ultrices purus, nec pellentesque ante neque convallis leo. Proin mi lorem, semper ut pulvinar vitae, tempor vel velit. Nullam nisl lorem, porta vel leo ut, ornare porttitor sem. Cras lacinia aliquet faucibus. Aliquam sagittis tincidunt lorem, et tincidunt urna tristique sit amet. Ut eleifend molestie odio. Duis quam odio, iaculis sagittis purus sed, pharetra sollicitudin tellus. Nullam lobortis enim nibh, ac vulputate mauris finibus nec. Pellentesque gravida convallis metus, vel consectetur mauris. Ut id maximus felis. Suspendisse quis tortor nec urna venenatis venenatis.\n" +
            "\n" +
            "Donec viverra dictum gravida. Morbi sagittis consequat felis, sed vehicula nunc sodales vel. Ut nulla massa, euismod maximus justo sit amet, scelerisque hendrerit magna. Integer dignissim orci quis sapien tempus molestie in ac nunc."},
    {id:6, parent: null, children: [7, 8, 9], time: "22/05/2022", by: "Zara222", content: "Level"},
    {id:7, parent: 6, children: [10, 11], time: "22/05/2022", by: "Zara222", content: "Level"},
    {id:8, parent: 6, children: [], time: "22/05/2022", by: "Zara222", content: "Level"},
    {id:9, parent: 6, children: [12], time: "22/05/2022", by: "Zara222", content: "Level"},
    {id:10, parent: 7, children: [], time: "22/05/2022", by: "Zara222", content: "Level"},
    {id:11, parent: 7, children: [], time: "22/05/2022", by: "Zara222", content: "Level"},
    {id:12, parent: 9, children: [], time: "22/05/2022", by: "Zara222", content: "Level"},

]

module.exports = commentArr;