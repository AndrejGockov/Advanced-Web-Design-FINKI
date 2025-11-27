// Да се креира функција createPlaylist која како вредност прима листа од песни и враќа нов објект кој овозможува управување со истата.
//
//     Нововратениот објект ги има следните својства:
//
//     queue(songs): функција која ги додава песните во редот на чекање (queue).
//
// dequeue(n): функција која брише последни n песни од редот на чекање (queue).
//
// play(n): функција која ги отстранува првите n песни од редот на чекање (queue) и ги додава во листата на изведени песни (playlist).
//
// skip(song): функција која ја брише дадената песна од редот на чекање (queue).
//
// preview(): ја враќа листата на изведени песни (playlist) и редот на чекање (queue).
//
// == EN ==============================================
//
//     Create a function createPlaylist that receives a list of songs and returns a new object that allows managing a music playlist.
//
//     The returned object has the following properties:
//
//     queue(songs): a function that adds the new songs to the waiting queue.
//
// dequeue(n): a function that removes the last n songs from the waiting queue.
//
// play(n): a function that removes the first n songs from the waiting queue and adds them to the list of played songs (playlist).
//
// skip(song): a function that removes the specified song from the waiting queue.
//
// preview(): returns an object containing both the list of played songs (playlist) and the waiting queue.
//
//     For example:
//     Test:
//     const playlist = createPlaylist(['Song1', 'Song2', 'Song3']);
//     console.log(playlist.preview());
//     playlist.queue(['Song4', 'Song5', 'Song1', 'Song2']);
//     console.log(playlist.preview());
//     playlist.play(3);
//     console.log(playlist.preview());
//     playlist.skip('Song2');
//     console.log(playlist.preview());
//     playlist.queue(['Song1', 'Song2', 'Song3']);
//     console.log(playlist.preview());
//     playlist.dequeue(2);
//     console.log(playlist.preview());
//
// 	  Result:
// 	  { playlist: [ 'Song1', 'Song2', 'Song3' ], queue: [] }
// 	  { playlist: [ 'Song1', 'Song2', 'Song3' ],
// 	  queue: [ 'Song4', 'Song5', 'Song1', 'Song2' ] }
// 	  { playlist: [ 'Song1', 'Song2', 'Song3', 'Song4', 'Song5', 'Song1' ],
//     queue: [ 'Song2' ] }
//     { playlist: [ 'Song1', 'Song2', 'Song3', 'Song4', 'Song5', 'Song1' ],
//     queue: [] }
//     { playlist: [ 'Song1', 'Song2', 'Song3', 'Song4', 'Song5', 'Song1' ],
//     queue: [ 'Song1', 'Song2', 'Song3' ] }
//     { playlist: [ 'Song1', 'Song2', 'Song3', 'Song4', 'Song5', 'Song1' ],
//     queue: [ 'Song1' ] }


function createPlaylist(playlist){
    let Playlist = playlist;
    let Queue = [];

    function queue(songs){
        Queue = songs.filter(song => typeof song === 'string' && song !== '');
    }

    function dequeue(n){
        Queue = Queue.slice(0, Queue.length - n);
    }

    function play(n){
        Queue.slice(0, n).forEach(song => {
            Playlist.push(song);
        });
        Queue = Queue.slice(n, Queue.length);
    }

    function skip(song){
        Queue = Queue.filter(s => s !== song);
    }

    function preview(){
        return {playlist: Playlist, queue : Queue};
    }

    return {
        queue,
        dequeue,
        play,
        skip,
        preview
    };
}