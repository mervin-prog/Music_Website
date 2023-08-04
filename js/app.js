$(".play").on('click', function(e){
    var dataSwitchId = $(this).attr('data-switch');
    //console.log(dataSwitchId);

    // and now i use aplayer switch function see
    ap.list.switch(dataSwitchId); //this is static id but i use dynamic 

    // aplayer play function
    // when i click any song to play
    ap.play();

    // click to slideUp player see
    $("#aplayer").addClass('showPlayer');
});

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: true,
    audio: [
    {
        name: 'Sorry',
		artist: 'Justin Bieber',
        url: 'audio/sorry.mp3',
        cover: 'img/sorry.jpg',
    },
    {
        name: 'Faded',
		artist: 'Alan Walker',
        url: 'audio/faded.webm',
        cover: 'img/alan.jpg',
    },
    {
        name: 'We Dont talk Anymore',
		artist: 'Charlie Puth',
        url: 'audio/talk.mp3',
        cover: 'img/Charlie Puth.jpg',
    },
    {
        name: 'Dusk till Dawn',
		artist: 'Zayn Malik',
        url: 'audio/DuskTillDawn.mp3',
        cover: 'img/zayn.jpg',
    },
    {
        name: 'One Dance',
		artist: 'Drake',
        url: 'audio/One_Dance.mp3',
        cover: 'img/drake.jpg',
    },
    {
        name: 'Danza Kuduro',
		artist: 'Don Omar',
        url: 'audio/Danza_Kuduro.mp3',
        cover: 'img/danza.jpg',
    }
    
    ]
});